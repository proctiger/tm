package uol.tm.filechecker.config;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import reconf.client.annotations.ConfigurationItem;
import reconf.client.annotations.ConfigurationRepository;
import reconf.client.annotations.UpdateFrequency;

/**
 *
 * @author lnferreira@uolinc.com
 */
@ConfigurationRepository(component="tm-file-checker", product="tag-manager")
@UpdateFrequency(interval=5, timeUnit=TimeUnit.MINUTES)
public interface RemoteConfig {

    @ConfigurationItem("hours.to.execute")
    public String hoursToExecute();

    @ConfigurationItem("files.to.check")
    public List<Map<String, String>> filesToCheck();

    @ConfigurationItem("mail.host")
    public String mailHost();

    @ConfigurationItem("mail.to")
    public List<String> mailTo();

    @ConfigurationItem("commit.to.svn")
    public boolean commitToSVN();
    
    @ConfigurationItem("cron")
    public String cron();
}
