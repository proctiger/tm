package uol.tm.filechecker.probe;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.jetty.servlet.ServletHolder;

/**
 * @author lnferreira@uolinc.com
 */
public class ProbeService  {

    private ProbeRepository probeRepository;
    
    private ProbeService(ProbeRepository probeRepository) {
        this.probeRepository = probeRepository;
    }

    public ServletHolder monitorProbe() {
        return new ServletHolder(new HttpServlet() {
            private static final long serialVersionUID = 1L;
            @Override
            protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
                try {
                    resp.setContentType("application/json");
                    probeRepository.monitorProbe(resp);
                } catch (Exception e) {
                    resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                }
            }
        });
    }

    public ServletHolder checkProbe() {
        return new ServletHolder(new HttpServlet() {
            private static final long serialVersionUID = 1L;
            @Override
            protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
                try {
                    resp.setContentType("application/json");
                    probeRepository.checkProbe(resp);
                } catch (Exception e) {
                    resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                }
            }
        });
    }

    public ServletHolder slbProbe() {
        return new ServletHolder(new HttpServlet() {
            private static final long serialVersionUID = 1L;
            @Override
            protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
                try {
                    resp.setContentType("application/json");
                    probeRepository.slbProbe(resp);
                } catch (Exception e) {
                    resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                }
            }
        });
    }
}
