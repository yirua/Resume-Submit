package Indeed_QA_Engr_Submit; 

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When; 

public class stepdefinition { 
   WebDriver driver = null; 
   int job_ctr =0; 
 

   @Given("^I have open the browser$")
   public void I_have_open_the_browser() throws Exception {
	   System.setProperty("webdriver.gecko.driver", "res/geckodriver");

	   //driver = new FirefoxDriver(); 
	   driver = new ChromeDriver();
	   
   }

   @Given("I open Indeed.ca")
   public void i_open_Indeed_ca() throws Throwable {
	   int x = 0;
		  while (x<10){
			  try{
				  driver.navigate().to("http://www.indeed.ca "); 
				  break;
			  }
			  catch (Exception e){
				  System.out.println(e);
				  x++;
				  System.out.println("waiting for 2 secs and try to navigate indeed.ca again..");
				  Thread.sleep(2000);
			  }
			  
		  }
		  if (x==10){
			  System.out.println("After 10 tries, still can not access www.indeed.ca..");
		  }
       
   }

   @Given("^I input QA Engineer and Montreal, QC$")
   public void i_input_QA_Engineer_and_Montreal_QC() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
	   //id="text-input-what"
	   driver.findElement(By.id("text-input-what")).sendKeys("QA Engineer");
	   //driver.findElement(By.id("text-input-where")).sendKeys("Montréal, QC");
   }

   @Given("^I click Find Jobs button$")
   public void i_click_Find_Jobs_button() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       driver.findElement(By.xpath("//*[@id=\"whatWhere\"]/form/div[3]/button")).click();
       Thread.sleep(1000);
   }

   @Given("^I choose one of the Software QA Engineer link$")
   public void i_choose_one_of_the_Software_QA_Engineer_link() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
      // driver.findElements(By.className("jobtitle turnstileLink")).get(job_ctr).click();
       driver.findElements(By.className("turnstileLink")).get(job_ctr).click();
       job_ctr++;
       Thread.sleep(1000);
   }

   @Given("^I click Apply Now button$")
   public void i_click_Apply_Now_button() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
      try { 
    	  	driver.findElement(By.id("indeed-apply-button")).click();
    	  }
      catch (Exception e) {
    	  try {
    		  System.out.println(e);
    		  driver.findElement(By.xpath("//*[@id=\"indeedApplyButtonContainer\"]/span/div[1]/button")).click();
    		 
    	  }
    	  catch(Exception e1) {
    		  try {
    			  System.out.print(e1);
    			  driver.findElement(By.className("jobsearch-IndeedApplyButton")).click();
    		  
    		  }
    		  catch(Exception e2) {
    			  System.out.print(e2);
    			  Thread.sleep(20000);
    		  }
    	  }
      }
   }

   @Given("^I input My name$")
   public void i_input_My_name() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
	  int x=0;
	  while(x<10) {
	   try{
		   driver.findElement(By.id("input-applicant.name")).sendKeys("YiWei Sun");
		  
		   break;
	   }
	   catch(Exception e) {
		   //System.out.print(e);
		   try{
			   driver.findElement(By.name("applicant.name")).sendKeys("YiWei Sun");
			   break;
		   }
		   catch(Exception e1) {
			   Thread.sleep(1000);
			   x++;	
		   }
		   	   
	   }
	   
	  }
	  if(x==10) {
		  System.out.println("The input name box does not show up..");
	  }
   }

   @Given("^I input My phone$")
   public void i_input_My_phone() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
	   int x=0;
		  while(x<10) {
			  try{
				  driver.findElement(By.id("input-applicant.phoneNumber")).sendKeys("514-482-5915");
				  break;
			  }
			  catch(Exception e) {
				  Thread.sleep(1000);
				  x++;
				  System.out.println(e);
				  System.out.println("try to  find the phonenumber element again..");
			  }
		  }
		  if(x==10) {
			  System.out.println("Could not find the phoneNumber element/n");
		  }
   }

   @Given("^I input My Email$")
   public void i_input_My_Email() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
	  int x=0;
	  while(x<10) {
		  try{
			  driver.findElement(By.id("input-applicant.email")).sendKeys("yiweis@gmail.com");
		  }
		  catch(Exception e) {
			  x++;
			  Thread.sleep(1000);
		  }
	  }
	  if(x==10) {
		  
	  }
	  }

   @When("^I Click Browse button$")
   public void i_Click_Browse_button() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
      
   }

   @When("^I input the QA_Engr resume file name$")
   public void i_input_the_QA_Engr_resume_file_name() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
      WebElement get_resume =driver.findElement(By.id("ia-FilePicker-resume"));
     
      // enter the file path onto the file-selection input field
      get_resume.sendKeys("/home/yiwei/Downloads/RESUME/QA/Software_QA_Engineer_Resume.pdf");

      // check the "I accept the terms of service" check box
      //driver.findElement(By.id("terms")).click();

      // click the "UploadFile" button
      //driver.findElement(By.name("send")).click();
      
   }

   @When("^I click open button$")
   public void i_click_open_button() throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       
   }

   @When("I click continue button")
   public void i_click_continue_button()  throws Throwable {
       // Write code here that turns the phrase above into concrete actions
       driver.findElement(By.id("form-action-continue")).click();
   }
   @Then("The Continue button shows up")
   public void the_Continue_button_shows_up() throws Throwable{
       // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.id("form-action-continue")).click();
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