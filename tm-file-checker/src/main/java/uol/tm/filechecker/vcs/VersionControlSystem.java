package uol.tm.filechecker.vcs;

import java.io.File;

/**
 * @author lnferreira@uolinc.com
 */
public interface VersionControlSystem {

    public void upsertFile(File file);

    boolean fileExists(File file);

    void testConnection();
}