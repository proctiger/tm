package uol.tm.file.checker.test.feature;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

/**
*
* @author dvrocha
*/
@RunWith(Cucumber.class)
@Cucumber.Options(
   glue = "uol.tm.file.checker.test.step",
   tags = {"~@MANUAL","~@WIP"},
   features = "src/test/resources/feature",
   format = "json:target/cucumber.json")
public class FeatureTest {

}
