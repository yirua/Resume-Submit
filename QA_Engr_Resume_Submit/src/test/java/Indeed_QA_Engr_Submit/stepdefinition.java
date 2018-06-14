package Indeed_QA_Engr_Submit; 

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When; 

public class stepdefinition { 
   WebDriver driver = null; 

 

   @Given("^I have open the browser$")
   public void I_have_open_the_browser() throws Exception {
	   System.setProperty("webdriver.gecko.driver", "res/geckodriver");

	   driver = new FirefoxDriver(); 
	   
   }

   @Given("^I open Indeed\\.ca$")
   public void i_open_Indeed_ca() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I input QA Engineer and Montreal, QC$")
   public void i_input_QA_Engineer_and_Montreal_QC() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I click Find Jobs button$")
   public void i_click_Find_Jobs_button() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I choose one of the Software QA Engineer link$")
   public void i_choose_one_of_the_Software_QA_Engineer_link() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I click Apply Now button$")
   public void i_click_Apply_Now_button() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I input My name$")
   public void i_input_My_name() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I input My phone$")
   public void i_input_My_phone() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I input My Email$")
   public void i_input_My_Email() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @When("^I Click Browse button$")
   public void i_Click_Browse_button() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
      
   }

   @When("^I input the QA_Engr resume file name$")
   public void i_input_the_QA_Engr_resume_file_name() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
      
   }

   @When("^I click open button$")
   public void i_click_open_button() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Then("^The Continue button shows up$")
   public void the_Continue_button_shows_up() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Then("^I click the Apply button$")
   public void i_click_the_Apply_button() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I open Indeed\\.com$")
   public void i_open_Indeed_com() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
      
   }

   @Given("^I input QA Engineer and Us$")
   public void i_input_QA_Engineer_and_Us() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
      
   }

   @Given("^I input Data Analyst and Montreal$")
   public void i_input_Data_Analyst_and_Montreal() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I click one of the data analyst job's link$")
   public void i_click_one_of_the_data_analyst_job_s_link() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @When("^I input the Data Analyst resume file name$")
   public void i_input_the_Data_Analyst_resume_file_name() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @Given("^I input Data Analyst and US$")
   public void i_input_Data_Analyst_and_US() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }
   @Then("^I close the browser$")
   public void I_close_the_browser() throws Exception{
       
       driver.close();
   }
   
 
}