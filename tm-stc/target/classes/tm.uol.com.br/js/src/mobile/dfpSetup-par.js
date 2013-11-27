
TM.dfpSetup = function() {
    var dfpSetup = '/8804';
    goog = googletag,
    pubads = goog.pubads, 
    config = TM.Config;
    if(config.dfpSite) {
        if (TM.Config.site != "mf" || TM.currHref.match(/mail.folha.uol.com.br\/.*/)) {
            if ((TM.Config.dfpChan == "shopping" && !TM.currHref.match(/^http(s)?:\/\/(www.)?shopping((-)?[0-9]*)?.uol.com.br(\/.*)?$/)) || (TM.Config.dfpChan == "todaoferta" && !TM.currHref.match(/^http(s)?:\/\/(www.)?todaoferta.uol.com.br(\/.*)?$/))) {
                TM.Config.dfpSite = TM.Config.dfpAffiliate;
            }
            dfpSetup += '/' + TM.Config.dfpSite;
        }
        if(config.dfpSite == 'parceiros' && config.affiliate) {
            var dfpAff = config.affiliate.indexOf('par') == 0 ? config.affiliate.substring(3) : TM.Config.affiliate;
            dfpSetup += '/' + dfpAff;
        }
    }
    if(config.dfpChan) {
        if (config.site != "mf" || TM.currHref.match(/mail.folha.uol.com.br\/.*/)) {
            dfpSetup += '/' + config.dfpChan;
        } else if (!config.dfpSubchan) {
            dfpSetup += '/' + config.dfpChan;
        }
    }
    if(config.dfpSubchan) {
        dfpSetup += '/' + config.dfpSubchan;
    }
    if (!config.dfpChan && !config.dfpSubhan && config.site == "mf") {
        dfpSetup += '/folha_mobile';
    }
    TM.log.dfp = dfpSetup;
    var pageBannersLength = TM.pageBanners.length;
    for (var i = 0; i < pageBannersLength; i++) {
        var banner = TM.pageBanners[i];
        if (!banner.action) {
            if (banner.width != 1 || banner.height != 1 || TM.isPopupEnable()){
                if (banner.dfpPos) {
                    if(banner.size.match(/120x20|168x28|216x36|300x50/)){
                        goog.defineSlot(dfpSetup, [6,1], banner.id).addService(pubads()).setTargeting("pos", banner.dfpPos);
                    } else {
                        goog.defineSlot(dfpSetup, [banner.width, banner.height], banner.id).addService(pubads()).setTargeting("pos", banner.dfpPos);
                    }
                } else {
                    if(banner.size.match(/120x20|168x28|216x36|300x50/)){
                        goog.defineSlot(dfpSetup, [6,1], banner.id).addService(pubads());
                    } else {
                        goog.defineSlot(dfpSetup, [banner.width, banner.height], banner.id).addService(pubads());
                    }
                }
            }
        }
    }
    pubads().setTargeting("referer", TM.currHref);
    if(config.group && config.group != '') {
        pubads().setTargeting("group", config.group);
    }
    
    var bt = TM.getCookie("BT", document.cookie) || '', 
        retargeting = TM.getCookie("DEretargeting", document.cookie);
        bt = (bt.indexOf("501") != -1) ? bt + "1501;" : bt;
        bt = (bt.indexOf("502") != -1) ? bt + "1502;" : bt;
        bt = (bt.indexOf("503") != -1) ? bt + "1503;" : bt;
        bt = (bt.indexOf("504") != -1) ? bt + "1504;" : bt;
        bt = (bt.indexOf("505") != -1) ? bt + "1505;" : bt;
        bt = (bt.indexOf("506") != -1) ? bt + "1506;" : bt;
        bt = (bt.indexOf("507") != -1) ? bt + "1507;" : bt;
        bt = (bt.indexOf("508") != -1) ? bt + "1508;" : bt;
    if(retargeting){
        bt = (bt || ";") + retargeting + ";";
    }
    if (bt) {
        btLength = bt.length;
        bt = bt.substring(1, bt.length-1).split(';').sort();
        for(var i = 0; i <= btLength; i++){
            if(bt[i+1] == bt[i]){
                bt.splice(i, 1);
            }
        }
        pubads().setTargeting("bt", bt);
    }
    
    pubads().enableSyncRendering();
    pubads().enableSingleRequest();
    goog.enableServices();
};
