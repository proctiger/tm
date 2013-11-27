package uol.tm.file.checker.test.step;

import uol.tm.file.checker.test.http.FileCheckerHttp;
import cucumber.api.java.pt.Quando;

/**
 * 
 * @author dvrocha
 *
 */
public class WhenStep extends BaseStep {
	 @Quando("^for solicitada a requição da URL do <(.+)>$")
	    public void senProbeRequest(String probeType) throws Exception {
	        serviceResponse = FileCheckerHttp.getProbe(probeType);
	    }

}
