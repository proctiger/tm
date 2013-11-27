package uol.tm.file.checker.test.step;

import org.junit.Assert;

import cucumber.api.java.pt.Entao;

public class ThenStep extends BaseStep {
	
	@Entao("^a requisição retorna o status <(\\d+)>$")
    public void checkRequestStatus(int status) {
        Assert.assertEquals("Status retornado na requisição está incorreto", status, serviceResponse.getStatusCode());
    }

}
