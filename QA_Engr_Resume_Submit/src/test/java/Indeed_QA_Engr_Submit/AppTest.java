package Indeed_QA_Engr_Submit; 

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/Destination/cucumber-htmlreport","json:target/Destination/cucumber-report.json"},features="src/test/java/Indeed_QA_Engr_Submit/outline.feature", glue="Indeed_QA_Engr_Submit")


public class AppTest { }