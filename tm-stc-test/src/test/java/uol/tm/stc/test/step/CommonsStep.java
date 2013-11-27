package uol.tm.stc.test.step;

import org.junit.Assert;

import uol.tm.stc.test.domain.PageContent;
import uol.tm.stc.test.domain.TmScript;
import uol.tm.stc.test.utils.TestHelper;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

/**
 * 
 * @author dvrocha
 */
public class CommonsStep extends BaseStep {

	@Before
	public void before() throws Exception {
		template = null;
		tmScript = new TmScript();
		pageContent = new PageContent();
	}

	@Dado("^que o script do UOL Tag Manager foi inserido no corpo do HTML$")
	public void putTmScriptInHtmlBody() throws Exception {
		template = TestHelper.getTmBody();
	}

	@Dado("^que o script do UOL Tag Manager foi inserido no cabe�alho do HTML$")
	public void putTmScriptInHtmlHead() throws Exception {
		template = TestHelper.getTmHead();
	}

	@Quando("^a p�gina contendo o UOL Tag Manager for carregada$")
	public void loadPage() throws Exception {
		TestHelper.writePage(template, tmScript, pageContent);
		page.load();
	}
	
	@Entao("^o sistema rigistra a vers�o do UOL Tag Manager no console do browser$")
	public void checkTmVersion() throws Exception {
		Assert.assertTrue("Vers�o n�o foi registrada em log", page.findLogVersion());
	}

	@Entao("^o sistema registra no console do browser a seguinte mensagem de WARN '(.+)'$")
	public void checkLogWarn(String message) throws Exception {
		Assert.assertTrue("Mensagem de WARN n�o foi registrada em log.", page.findLogWarn(message));
	}
}
