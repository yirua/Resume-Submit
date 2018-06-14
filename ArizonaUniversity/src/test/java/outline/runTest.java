package outline; 

import org.junit.runner.RunWith; 
import cucumber.junit.Cucumber; 

@RunWith(Cucumber.class)
@Cucumber.Options(features="outline/outline.feature", glue="outline")

public class runTest { }