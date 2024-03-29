#!/bin/bash

#------------------------------------------------------------------------------
# javaapp.sh - (almost) Generic Java Application Init Script
# Hugo Souza <hwolff@uolinc.com> 09/2004
#------------------------------------------------------------------------------
# Running without options show usage info
#------------------------------------------------------------------------------
# $Id: javaapp.sh,v 1.5 2004/10/20 15:41:02 hwolff Exp hwolff $
#------------------------------------------------------------------------------

RCSID='$Id: javaapp.sh,v 1.5 2004/10/20 15:41:02 hwolff Exp hwolff $'

D=""			# Debug

#-- Begin config
cd "/export/logs/tm-file-checker"
RUN_USER="tm-file-checker"
LOGDIR="/export/logs/tm-file-checker"
APP_HOME="/opt/tm-file-checker"
STDOUT="/dev/null"
STDERR="${LOGDIR}/tm-file-checker-err.log"
CONFIG=""
CONFIG_HOME="${APP_HOME}/config/"
CLASS_MAIN="uol.tm.filechecker.job.Main"
PS_CATCHER=""
JAVA_HOME="/usr/java/latest"
JAVA_OPTS="-Dfile.encoding=UTF-8 -Xmx1024M -Xms128m -Xoss1024k -Xss512k -Duser.timezone=Brazil/East -Dsiga.domain.ignore.metadata=true"
LANG="en_US"
APP_PARAMETERS=""
#-- End config

#-- Other config
MAX_TRIES="..."		# 1 dot = 1 try

PATH="/bin:/usr/bin"
export LANG JAVA_HOME JAVA_OPTS PATH
#-- End other config

#--

if [ "$1" == "DOIT" ]
then
  shift 1
else
  if [ "$UID" -eq 0 ]
  then
    sudo -u "$RUN_USER" "$0" "DOIT" "$@"
    exit $?
  else
    echo "Este script deve ser chamado como root"
    exit 1
  fi
fi

usage ()
{
cat <<EOT
usage: $0 (start|stop|restart|pid|ps|status|tailerr|tailout|tail)
       start|stop|restart: as said
       ps|status: show the application's ps line
       pid: display application pid
       tailerr|tailout: tail stderr or stdout
       tail: if it finds a log4j log file, tails it

special: -eat oldscript.sh
       Eats "oldscript.sh", which means that it will absorb anything inside
       the "#-- Begin config" "#-- End config" block from the old script
       The result block will be a merge of the old one with the new one

$RCSID
EOT

}

validate ()
{
    if [ "${CONFIG}" ] && [ ! -f ${CONFIG} ] ; then
        echo "Error: Config file [${CONFIG}] not found"
        exit
    fi
}

getpid ()
{
    STR="$1"
    SHOW="$2"
    _tmp=""
    if [ ! "${STR}" ] ; then
        return 0
    fi

    if [ "${PS_CATCH}" ] ; then
        _tmp="`ps auxwww | grep ${STR} | grep -v grep | grep ${PS_CATCH}`"
    else
        _tmp="`ps auxwww | grep ${STR} | grep -v grep`"
    fi

    if [ "${SHOW}" ] ; then
        echo ${_tmp}
        return
    else
        PID="`echo ${_tmp} | awk '{print $2}' | head -1`"
    fi
}

start ()
{
    if [ "${PID}" ] ; then
        echo "Error: Already running with pid [${PID}]"
        exit
    fi

    RUN="${JAVA_HOME}/bin/java ${JAVA_OPTS} -cp ${CLASSPATH} ${CLASS_MAIN}"

    if [ "${CONFIG}" ] ; then
        RUN="${RUN} ${CONFIG}"
    fi

    if [ "${APP_PARAMETERS}" ] ; then
        RUN="${RUN} ${APP_PARAMETERS}"
#       RUN="${APP_PARAMETERS}"
    fi

#    if [ "${STDOUT}" ] ; then
#        RUN="${RUN} 1>>${STDOUT}"
#    fi
#
    #if [ "${STDERR}" ] ; then
    #    RUN="${RUN} 1>>${STDERR}"
    #fi

    if [ "$D" -gt 0 ] ; then
        echo "${RUN}"
    fi

    nohup ${RUN} 1> ${STDOUT} 2> ${STDERR} &
    sleep 2
    getpid ${CLASS_MAIN}
    echo "Started with pid: [${PID}]"
}

startwait ()
{
    if [ "${PID}" ] ; then
        echo "Error: Already running with pid [${PID}]"
        exit
    fi

    RUN="${JAVA_HOME}/bin/java ${JAVA_OPTS} -cp ${CLASSPATH} ${CLASS_MAIN}"

    if [ "${CONFIG}" ] ; then
        RUN="${RUN} ${CONFIG}"
    fi

    if [ "${APP_PARAMETERS}" ] ; then
        RUN="${RUN} ${APP_PARAMETERS}"
    fi

    if [ "$D" -gt 0 ] ; then
        echo "${RUN}"
    fi

    nohup ${RUN} 1> ${STDOUT} 2> ${STDERR}
}

stop ()
{
    getpid ${CLASS_MAIN}
    if [ ! "${PID}" ] ; then
        echo "Error: no process to kill"
        exit
    fi
    echo "Killing [${PID}]"
    kill ${PID}
}

eat ()
{
    ME="$1"
    OLDCONF="$2"
    NEW="${OLDCONF}.tmp"

    if [ ! -f "${ME}" ] || [ ! "${ME}" ] ; then
        echo "Error: it may sound strange, but i cant find myself [${ME}]"
        exit
    fi

    if [ ! -f "${OLDCONF}" ] || [ ! "${OLDCONF}" ] ; then
        echo "Error: [${OLDCONF}] doesn't exists"
        exit
    fi

    if [ "$D" -gt 0 ] ; then
        echo "D: me = [${ME}]"
        echo "D: old = [${OLDCONF}]"
        echo "D: new = [${NEW}]"
    fi

    if [ -f "${NEW}" ] ; then
        rm ${NEW}
    fi

    # While we read our own config, we look for it inside the old file
    in=""
    flush=""
    _old=""
    IFS="G4Rb4G3"
    echo "Parsing old file"
    while read -r l ; do
        if [ "$D" -gt 1 ] ; then
            echo "-> [$l]"
        fi

        if [ "$flush" ] ; then
            echo "$l" >> "${NEW}"
            continue
        fi

        if [ "`echo ${l} | grep -i '#-- Begin config'`" ] ; then
            in="1"
            echo "$l" >> "${NEW}"
            echo "Found config, merging"
            continue
        elif [ ! "$in" ] ; then
            echo "$l" >> "${NEW}"
            continue
        elif [ "`echo ${l} | grep -i '#-- End config'`" ] ; then
            flush="1"
            echo "$l" >> "${NEW}"
            echo "Done merging, flushing now"
            continue
        fi

        prop="`echo \"${l}\" | awk -F= '{print $1}' | sed 's/\r//g'`"
        echo "Searching for property [${prop}] in [${OLDCONF}]"
        _old="`grep \"^${prop}\" \"${OLDCONF}\"`"
        if [ "${_old}" ] ; then
            echo "${_old}" >> "${NEW}"
        else
            echo "${l}" >> "${NEW}"
        fi
    done < "${ME}"

    IFS=""
    echo "${OLDCONF} has been eaten"

    echo "Backuping ${OLDCONF}"
    cp -f ${OLDCONF} ${OLDCONF}.bkp
    echo "Replacing ${OLDCONF} with generated file"
    mv -f ${NEW} ${OLDCONF}
    echo "Setting permissions to 755"
    chmod 755 ${OLDCONF}
}

if [ ! "$D" ] ; then
    D="0"
fi

if [ ! "$*" ] ; then
    usage
    exit
fi

if [ "$1" == "-eat" ] ; then
    echo "Eating.."
    eat $0 $2
    exit
fi

validate

CLASSPATH="${CONFIG_HOME}:${APP_HOME}/lib/*"
CLASSPATH="${CLASSPATH/%:/}"

# Look for a log4j log file
if [ "${CONFIG}" ] ; then
    LOG4J="`grep log4jFile= ${CONFIG} | awk -F= '{print $2}' | sed 's/\r//g'`"
    if [ "$D" -gt 0 ] ; then echo "D: log4j = ${LOG4J}" ; fi
    if [ "${LOG4J}" ] && [ -f ${LOG4J} ] ; then
       APP_LOG="`grep \"log4j.appender..*.File=\" ${LOG4J} | head -1 | awk -F= '{print $2}' | sed 's/\r//g'`"
       if [ ! -f ${APP_LOG} ] ; then
           APP_LOG=""
       fi
    fi
fi

PID=""
getpid ${CLASS_MAIN}

case $1 in
    start )
        start
    ;;
    startwait )
        startwait
    ;;
    stop )
        stop
    ;;
    restart )
        i=""
        stop
        while [ "$i" != "${MAX_TRIES}" ] ; do
	    getpid ${CLASS_MAIN}
            if [ "${PID}" ] ; then
                i="$i."
                sleep 1
            else
                start
                exit
            fi
        done
        echo "Error: cound not kill process [${PID}]"
    ;;
    ps|status )
        getpid ${CLASS_MAIN} yes
    ;;
    pid )
        if [ "$PID" ] ; then
            echo "$PID"
        else
            echo "Process [${CLASS_MAIN}] not found"
        fi
    ;;
    tailout )
        if [ "${STDOUT}" ] ; then
            tail -f ${STDOUT}
        else
            echo "Error: ${STDOUT} not found"
        fi
    ;;
    tailerr )
        if [ "${STDERR}" ] ; then
            tail -f ${STDERR}
        else
            echo "Error: ${STDERR} not found"
        fi
    ;;
    tail )
        if [ "${APP_LOG}" ] ; then
            tail -f ${APP_LOG}
        else
            echo "Error: no log4j log file found"
        fi
    ;;
esac
