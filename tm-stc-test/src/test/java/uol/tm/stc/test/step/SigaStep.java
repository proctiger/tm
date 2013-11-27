package uol.tm.stc.test.step;

import java.util.HashMap;
import java.util.Map;

import org.junit.Assert;

import uol.tm.stc.test.domain.SigaTag;
import uol.tm.stc.test.utils.Constants;
import uol.tm.stc.test.utils.TestHelper;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;

/**
 * 
 * @author dvrocha
 */
public class SigaStep extends BaseStep {

	private static final int NUM_MAX_UOL_CLIQUES_ADS = 3;

	@Dado("^que o usu�rio possui o modulo de UOL Cliques habilitado$")
	public void enableUolCliquesModule() {
		tmScript.setName("cliques-custom");
	}

	@Dado("^que o usu�rio adicionou um an�ncio de UOL Cliques na p�gina$")
	public void addUolCliquesTag() {
		TestHelper.addUolCliquesTagInPageContent(pageContent, TestHelper.getDefaultLpTag());
	}
	
	@Dado("^que o usu�rio adicionou um an�ncio padr�o de UOL Cliques na p�gina$")
	public void addDefaultUolCliquesTag() {
		addUolCliquesTag();
	}
	
	@Dado("^que o usu�rio adicionou outro an�ncio padr�o de UOL Cliques na p�gina$")
	public void addOtherDefaultUolCliquesTag() {
		addUolCliquesTag();
	}
	

	@Dado("^que o usu�rio adicionou a quantidade m�xima de an�ncios de UOL Cliques na p�gina$")
	public void addMaxUolCliquesTag() {
		for (int i = 0; i < NUM_MAX_UOL_CLIQUES_ADS; i++) {
			addUolCliquesTag();
		}
	}

	@Dado("^que o usu�rio adicionou mais an�ncios de UOL Cliques que a quantidade m�xima permitida$")
	public void addMoreThanMaxUolCliquesTag() {
		for (int i = 0; i <= NUM_MAX_UOL_CLIQUES_ADS; i++) {
			addUolCliquesTag();
		}
	}

	@Dado("^que o usu�rio adicionou um an�ncio de UOL Cliques na p�gina sem a classe 'tm-ads'$")
	public void setUolCliquesTagWithoutClass() {
		SigaTag tag = TestHelper.getDefaultLpTag();
		tag.setClasses("hide");
		TestHelper.addUolCliquesTagInPageContent(pageContent, tag);
	}

	@Dado("^que o usu�rio adicionou um an�ncio de UOL Cliques na p�gina com mais de uma classe$")
	public void setUolCliquesTagWithMoreThanOneClass() {
		SigaTag tag = TestHelper.getDefaultLpTag();
		tag.setClasses(tag.getClasses() + " other");
		TestHelper.addUolCliquesTagInPageContent(pageContent, tag);
	}

	@Dado("^que o usu�rio informou a tag de UOL Cliques sem o atributo 'siga'$")
	public void setUolCliquesTagWithoutAttributeUolCliques() {
		SigaTag tag = TestHelper.getDefaultLpTag();
		tag.setProperties(null);
		TestHelper.addUolCliquesTagInPageContent(pageContent, tag);
	}

	@Dado("^que o usu�rio informou a tag de UOL Cliques com o atributo 'siga' sem o par�metro 'size'$")
	public void setUolCliquesTagWithoutAdSize() {
		SigaTag tag = TestHelper.getDefaultLpTag();
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("bgColor", "C0CADA");
		tag.setProperties(map);
		
		TestHelper.addUolCliquesTagInPageContent(pageContent, tag);
	}

	@Dado("^que o usu�rio informou a tag de UOL Cliques com o atributo 'siga' com o par�metro 'size' inexistente$")
	public void setUolCliquesTagWithInvalidAdSize() {
		SigaTag tag = TestHelper.getDefaultLpTag();

		Map<String, String> map = new HashMap<String, String>();
		map.put("size", "1x1");
		tag.setProperties(map);

		TestHelper.addUolCliquesTagInPageContent(pageContent, tag);
	}

	@Dado("^que o c�digo do usu�rio para o UOL Cliques n�o foi definido$")
	public void enableUolCliquesModuleWithoutUserCode() {
		tmScript.setName("cliques");
	}

	@Dado("^que o c�digo do usu�rio para o UOL Cliques est� definido na configura��o da p�gina$")
	public void setUserCodeInLpConfig() {
		enableUolCliquesModuleWithoutUserCode();
		TestHelper.addUolCliquesConfig(tmScript, "coddisplaysupplier", Constants.UOL_CLIQUES_AFFILIATED_ID);
	}
	
	@Dado("^que o c�digo do usu�rio para o UOL Cliques est� definido na configura��o do Tag Manager$")
	public void setUserCodeInTagManager() {
		enableUolCliquesModule();
	}
	
	@Dado("^que o usu�rio adicionou um an�ncio de UOL Cliques na p�gina com o c�digo do usu�rio no atributo 'siga'$")
	public void setUolCliquesTagWithUserCode() {
		enableUolCliquesModuleWithoutUserCode();
		SigaTag tag = TestHelper.getDefaultLpTag();
		TestHelper.setMapEntry(tag.getProperties(), "coddisplaysupplier", Constants.UOL_CLIQUES_AFFILIATED_ID);
		TestHelper.addUolCliquesTagInPageContent(pageContent, tag);
	}
	
	@Dado("^que o usu�rio possui par�metros de personaliza��o do an�ncio de UOL Cliques na configura��o da p�gina$")
	public void setCustomAdInLpConfig() {
		TestHelper.addUolCliquesConfig(tmScript, "coddisplaysupplier", Constants.UOL_CLIQUES_AFFILIATED_ID);
		TestHelper.addUolCliquesConfig(tmScript, "borderColor", "0A0A0A");
		TestHelper.addUolCliquesConfig(tmScript, "bgColor", "AAAA00");
		TestHelper.addUolCliquesConfig(tmScript, "urlColor", "00FF00");
		TestHelper.addUolCliquesConfig(tmScript, "altColor", "F1123A");
	}
	
	@Dado("^que o usu�rio possui par�metros de personaliza��o do an�ncio de UOL Cliques na configura��o do Tag Manager$")
	public void setCustomAdInTmConfig() {
		enableUolCliquesModule();
	}
	
	@Dado("^que o usu�rio adicionou um an�ncio de UOL Cliques na p�gina com par�metros personalizados$")
	public void setUolCliquesTagWithCustomAd() {
		SigaTag tag = TestHelper.getDefaultLpTag();
		TestHelper.setMapEntry(tag.getProperties(), "borderColor", "1111FF");
		TestHelper.setMapEntry(tag.getProperties(), "bgColor", "010101");
		TestHelper.setMapEntry(tag.getProperties(), "urlColor", "123456");
		TestHelper.setMapEntry(tag.getProperties(), "descrColor", "F55503");
		TestHelper.addUolCliquesTagInPageContent(pageContent, tag);
	}

	@Entao("^o sistema exibe o[s]? an�ncio[s]? de UOL Cliques do usu�rio$")
	public void checkUolCliques() throws Exception {
		if (pageContent.getUolcliquesTags() != null) {
			int currAd = 0;

			for (SigaTag tag : pageContent.getUolcliquesTags()) {
				SigaTag displayedAd = page.getUolCliquesAdById(tag.getId());

				if (currAd >= NUM_MAX_UOL_CLIQUES_ADS) {
					Assert.assertNull("An�ncio de UOL Cliques foi exibido indevidamente", displayedAd);

				} else {
					validateDefaultProperties(displayedAd);

					Assert.assertEquals("Valor da propriedade adBlockCount � inv�lido", String.valueOf(currAd),
					        displayedAd.getProperties().get("adBlockCount"));

					Map<String, String> expectedProperties = new HashMap<String, String>();
					incrementMap(expectedProperties, tmScript.getSigaConfig());
					incrementMap(expectedProperties, tag.getProperties());
					incrementMap(expectedProperties, page.getSigaProperties());
					

					for (Map.Entry<String, String> entry : expectedProperties.entrySet()) {
						Assert.assertEquals("Propriedade [" + entry.getKey() + "] possui valor inv�lido",
						        entry.getValue(), displayedAd.getProperties().get(entry.getKey()));
					}
				}

				currAd++;
			}
		}
	}

	@Entao("^o sistema n�o exibe o an�ncio de UOL Cliques do usu�rio$")
	public void checkInvalidUolCliquesTag() throws Exception {
		Assert.assertTrue("Quantidade de tags do UOL cliques diferente de 1", pageContent.getUolcliquesTags() != null
		        && pageContent.getUolcliquesTags().size() == 1);

		SigaTag tag = pageContent.getUolcliquesTags().get(0);
		Assert.assertNull("Tag do UOL Cliques foi exibida indevidamente", page.getUolCliquesAdById(tag.getId()));
	}

	private void validateDefaultProperties(SigaTag displayedAd) {
		Assert.assertNotNull("An�ncio de UOL Cliques n�o foi encontrado", displayedAd);

		Assert.assertNotNull("An�ncio de UOL Cliques n�o possui propriedades", displayedAd.getProperties());

		Assert.assertTrue("An�ncio de UOL Cliques n�o possui a propriedade numads", displayedAd.getProperties()
		        .containsKey("numads"));

		Assert.assertTrue("An�ncio de UOL Cliques n�o possui a propriedade urlReferer", displayedAd.getProperties()
		        .containsKey("urlReferer"));

		Assert.assertTrue("An�ncio de UOL Cliques n�o possui a propriedade adBlockCount", displayedAd.getProperties()
		        .containsKey("adBlockCount"));
	}

	private void incrementMap(Map<String, String> to, Map<String, String> from) {
		if (from != null) {
			for (Map.Entry<String, String> entry : from.entrySet()) {
				to.put(entry.getKey(), entry.getValue());
			}
		}
	}
}
