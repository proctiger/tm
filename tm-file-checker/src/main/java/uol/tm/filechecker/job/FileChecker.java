package uol.tm.filechecker.job;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.locks.ReentrantLock;

import org.apache.commons.lang.StringUtils;
import org.quartz.CronExpression;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import uol.tm.filechecker.config.RemoteConfig;
import uol.tm.filechecker.email.Mail;
import uol.tm.filechecker.vcs.Subversion;
import uol.tm.filechecker.vcs.VersionControlSystem;

/**
 * @author lnferreira@uolinc.com
 */
public class FileChecker {

    public static final String ODD = "odd";
    public static final String EVEN = "even";
    private static final Logger log = LoggerFactory.getLogger(FileChecker.class);

    private ReentrantLock lock = new ReentrantLock();
    private RemoteConfig remoteConfig;
    private String svnLogin;
    private String svnPassword;

    public FileChecker(RemoteConfig remoteConfig, String svnLogin, String svnPassword) {
        this.remoteConfig = remoteConfig;
        this.svnLogin = svnLogin;
        this.svnPassword = svnPassword;
    }

    public void check() {
        check(true);
    }
    
    public void check(boolean checkCron) {
        boolean locked = lock.tryLock();
        if (locked) {
            try {
                if (willExecute()) {
                    if (!checkCron || cron()) {
                        performCheck();
                    }
                }
            } catch (Exception e) {
                log.error("erro ao verificar arquivos: ", e);
            } finally {
                lock.unlock();
            }
        } else {
            log.info("verificacao ja esta sendo executada");
        }
    }

    private void performCheck() {
        log.info("iniciando validacao de arquivos");
        for (Map<String, String> file : remoteConfig.filesToCheck()) {
            FileConfiguration fileConfiguration = null;
            try {
                fileConfiguration = new FileConfiguration(file);
                if (!fileConfiguration.isSameFiles()) {
                    log.info("arquivo baixado [" + fileConfiguration.getUrlSource() + "] eh diferente do arquivo atual [" + fileConfiguration.getFileTarget() + "] e sera atualizado");
                    upsertFile(fileConfiguration);
                    sendMail(fileConfiguration);
                } else {
                    log.info("arquivo baixado [" + fileConfiguration.getUrlSource() + "] eh igual ao arquivo atual [" + fileConfiguration.getFileTarget() + "]");
                }
            } catch (Exception e) {
                log.error("erro ao executar file-checker: ", e);
            } finally {
                if (fileConfiguration != null) {
                    log.info("apagando arquivos temporarios");
                    fileConfiguration.clean();
                }
            }
        }
    }

    private void upsertFile(FileConfiguration fileConfiguration) {
        try {
            if (remoteConfig.commitToSVN()) {
                VersionControlSystem controlSystem = new Subversion(fileConfiguration.getSvn(), svnLogin, svnPassword);
                controlSystem.upsertFile(fileConfiguration.getFileSource());
            }
        } catch (Exception e) {
            log.error("erro ao aplicar alteracao no sistema de controle de versao: ", e);
        }
    }

    private void sendMail(FileConfiguration fileConfiguration) {
        try {
            log.info(String.format("enviando email infomando alteracao do arquivo: [%s]", fileConfiguration.getUrlSource()));
            Mail mail = new Mail(remoteConfig.mailHost());
            mail.addFrom("tm_file_checker@uolinc.com", "TM File Checker");
            for (String mailTo : remoteConfig.mailTo()) {
                mail.addTo(mailTo, "");
            }
            mail.addSubject("Arquivo " + fileConfiguration.getUrlSource() + " foi atualizado");
            mail.addMessageBody("O arquivo baixado em " + fileConfiguration.getUrlSource() + " possuía diferenças em relação ao anterior e foi atualizado.\n\nPath do arquivo atualizado: " + fileConfiguration.getFileTarget());
            mail.send();
        } catch (Exception e) {
            log.error("erro ao enviar email", e);
        }
    }

    private boolean willExecute() {
        Calendar rightNow = Calendar.getInstance();
        boolean oddHour = rightNow.get(Calendar.HOUR_OF_DAY) % 2 == 1;
        String hoursToExecute = StringUtils.trim(remoteConfig.hoursToExecute());
        if (StringUtils.equalsIgnoreCase(hoursToExecute, ODD) && !oddHour) {
            log.info("nao sera executado: execucao configurada apenas em horas impares");
            return false;
        } else if (StringUtils.equalsIgnoreCase(hoursToExecute, EVEN) && oddHour) {
            log.info("nao sera executado: execucao configurada apenas em horas pares");
            return false;
        } else {
            return true;
        }
    }
    
    private boolean cron(){
        String cron = "* " + remoteConfig.cron() ;
        Date date = new Date(); 
        String formatedDate = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss").format(date);
        try {
            CronExpression cronValidator = new CronExpression(cron);
            if (cronValidator.isSatisfiedBy(date)) {
                log.info("cron de execucao [{}] - horario [{}] - file checker sera executado", cron, formatedDate);
                return true;
            } else {
                log.info("cron de execucao [{}] - horario [{}] - file checker nao sera executado", cron, formatedDate);
                return false;
            }
        } catch (ParseException e) {
            log.error("cron invalida [{}] - horario [{}]", cron, formatedDate, e);
            return true;
        }
    }
}
