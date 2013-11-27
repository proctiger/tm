package uol.tm.filechecker.probe;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import uol.tm.filechecker.config.RemoteConfig;
import uol.tm.filechecker.vcs.Subversion;


/**
 * @author lnferreira@uolinc.com
 */
public class ProbeRepository {

    private static final Logger log = LoggerFactory.getLogger(ProbeRepository.class);
    private RemoteConfig remoteConfig;
    private String svnLogin;
    private String svnPassword;
    
    private ProbeRepository(RemoteConfig remoteConfig, String svnLogin, String svnPassword) {
        this.remoteConfig = remoteConfig;
        this.svnLogin = svnLogin;
        this.svnPassword = svnPassword;
    }

    public void checkProbe(HttpServletResponse resp) {
        probe(resp);
    }

    public void monitorProbe(HttpServletResponse resp) {
        probe(resp);
    }

    public void slbProbe(HttpServletResponse resp) {
        probe(resp);
    }

    private void probe(HttpServletResponse resp) {
        try {
            resp.setStatus(HttpServletResponse.SC_OK);
            checkSVNAccessOk(resp);
            checkURLsAccessOk(resp);
            checkFilesAccessOk(resp);
        } catch (Exception e) {
            log.error("erro interno ao executar probe: ", e);
        }
    }
    
    private void checkSVNAccessOk(HttpServletResponse resp) throws IOException {
        if (!remoteConfig.commitToSVN()) {
            return ;
        }
        for (String svnURL : getFileParameter("svn")) {
            try {
                Subversion subversion = new Subversion(svnURL, svnLogin, svnPassword);
                subversion.testConnection();
                resp.getWriter().println("svn [ok] ");
                log.info(String.format("probe - acesso svn [%s] ok", svnURL));
            } catch (Exception e) {
                log.error("probe - erro ao validar conexao com svn: " + svnURL, e);
                resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                resp.getWriter().println("svn [not ok] ");
            }
        }
    }
    
    private void checkFilesAccessOk(HttpServletResponse resp) throws Exception {
        for (String filePath : getFileParameter("path")) {
            if (!Files.isReadable(Paths.get(filePath))) {
                log.error(String.format("probe - nao foi possivel acessar o arquivo: [%s]", filePath));
                resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                resp.getWriter().println("acesso aos arquivos [not ok] ");
            } else {
                log.info(String.format("probe - acesso ao arquivo [%s] ok", filePath));
                resp.getWriter().println("acesso aos arquivos [ok] ");
            }
        }
    }
    
    private void checkURLsAccessOk(HttpServletResponse resp) throws Exception {
        for (String url : getFileParameter("source")) {
            try {
                if (!checkURLOk(url)) {
                    log.error("probe - erro ao validar conexao com url: " + url);
                    resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                    resp.getWriter().println("acesso as urls [not ok] ");
                } else {
                    resp.getWriter().println("acesso as urls [ok] ");
                    log.info(String.format("probe - acesso a url [%s] ok", url));
                }
            } catch (Exception e) {
                log.error("probe - erro ao validar conexao com url: " + url, e);
                resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                resp.getWriter().println("acesso as urls [not ok] ");
            }
        }
    }

    private boolean checkURLOk(String url) throws Exception {
        URL u = new URL(url);
        HttpURLConnection huc = (HttpURLConnection) u.openConnection();
        huc.setRequestMethod("GET");
        huc.connect();
        return huc.getResponseCode() == HttpServletResponse.SC_OK;
    }
    
    private Set<String> getFileParameter(String key) {
        HashSet<String> values = new HashSet<>();
        for (Map<String,String> fileParameters : remoteConfig.filesToCheck()) {
            if (fileParameters.containsKey(key)) {
                values.add(fileParameters.get(key));
            }
        }
        return values;
    }
}
