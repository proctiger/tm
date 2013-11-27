package uol.tm.filechecker.job;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import uol.ecommerce.commons.spring.locator.BeanLocator;
import uol.tm.filechecker.probe.ProbeService;

/**
 * @author lnferreira@uolinc.com
 */
public class Main extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private static final Logger log = LoggerFactory.getLogger(Main.class);
    
    private Server server;
    private FileChecker fileChecker;
    private ProbeService probeService;
    private int port;
    
    public Main(FileChecker fileChecker, ProbeService probeService, int port) {
        this.fileChecker = fileChecker;
        this.probeService = probeService;
        this.port = port;
    }

    public static void main(String[] args) {
        log.info("tm-file-checker em inicializacao...");
        final Main self = BeanLocator.get(Main.class);
        self.run();
    }
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {
        fileChecker.check(false);
    };
    
    private void run() {
        try {
            log.info("iniciando o servico");
            this.server = new Server(port);
            ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
            context.setContextPath("/");
            server.setHandler(context);
            context.addServlet(new ServletHolder(this), "/tm-file-checker/check");
            context.addServlet(probeService.slbProbe(), "/tm-file-checker/slb-probe");
            context.addServlet(probeService.checkProbe(), "/tm-file-checker/check-probe");
            context.addServlet(probeService.monitorProbe(), "/tm-file-checker/monitor-probe");
            server.start();
            server.join();
        } catch (Exception e) {
            log.error("erro ao iniciar o servico: ", e);
        }
    }
    
    public void close() {
        try {
            log.info("finalizando o servico");
            server.stop();
        } catch (Exception e) {
            log.error("erro ao finalizar servidor: " + e);
        }
    }
}
