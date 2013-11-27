package uol.tm.filechecker.vcs;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

import org.tmatesoft.svn.core.SVNException;
import org.tmatesoft.svn.core.SVNNodeKind;
import org.tmatesoft.svn.core.SVNURL;
import org.tmatesoft.svn.core.auth.ISVNAuthenticationManager;
import org.tmatesoft.svn.core.internal.io.dav.DAVRepositoryFactory;
import org.tmatesoft.svn.core.io.ISVNEditor;
import org.tmatesoft.svn.core.io.SVNRepository;
import org.tmatesoft.svn.core.io.SVNRepositoryFactory;
import org.tmatesoft.svn.core.io.diff.SVNDeltaGenerator;
import org.tmatesoft.svn.core.wc.SVNWCUtil;

/**
 * @author lnferreira@uolinc.com
 */
public class Subversion implements VersionControlSystem {

    private SVNRepository repository;

    public Subversion(String url, String userName, String password) throws SVNException {
        DAVRepositoryFactory.setup();
        SVNURL svnURL = SVNURL.parseURIEncoded(url);
        repository = SVNRepositoryFactory.create(svnURL);
        ISVNAuthenticationManager authManager = SVNWCUtil.createDefaultAuthenticationManager(userName, password);
        repository.setAuthenticationManager(authManager);
    }

    @Override
    public void testConnection() {
        try {
            repository.testConnection();
        } catch (SVNException e) {
            throw new RuntimeException("erro ao acessar svn: ", e);
        }
    }
    
    @Override
    public boolean fileExists(File file) {
        try {
            SVNNodeKind nodeKind = repository.checkPath(file.getName(), -1);
            return nodeKind == SVNNodeKind.FILE;
        } catch (SVNException e) {
            throw new RuntimeException(String.format("erro ao verificar a existencia do arquivo no svn: [%s]", file.getAbsolutePath()), e);
        }
    }
    
    @Override
    public void upsertFile(File file) {
        try {
            ISVNEditor editor = repository.getCommitEditor("adicionando arquivo: " + file.getName(), null);
            editor.openRoot(-1);
            editor.deleteEntry(file.getPath(), -1);
            editor.addFile(file.getPath(), null, -1);
            editor.applyTextDelta(file.getPath(), null);
            SVNDeltaGenerator deltaGenerator = new SVNDeltaGenerator();
            String checksum = deltaGenerator.sendDelta(file.getPath(), new FileInputStream(file), editor, true);
            editor.closeFile(file.getPath(), checksum);
            editor.closeEdit();
        } catch (SVNException e) {
            throw new RuntimeException(String.format("erro ao commitar arquivo no svn: [%s]", repository.getLocation().toString()), e);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(String.format("arquivo a ser commitado nao encontrado: [%s]", file.getAbsolutePath()), e);
        }
    }
}
