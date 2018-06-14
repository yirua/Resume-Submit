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
	   System.setProperty("webdriver.gecko.driver", "res/geckodriver.exe");

	   driver = new FirefoxDriver(); 
	   
   }

   @Given("^I open Arizona University website$")
   public void I_open_Arizona_University_website() throws Exception {
	  int x = 0;
	  while (x<10){
		  try{
			  driver.navigate().to("https://webapp4.asu.edu/catalog "); 
			  break;
		  }
		  catch (Exception e){
			  System.out.println(e);
			  x++;
			  System.out.println("waiting for 2 secs and try to navigate asu.edu/catalog again..");
			  Thread.sleep(2000);
		  }
		  
	  }
	  if (x==10){
		  System.out.println("can not access https://webapp4.asu.edu/catalog..");
	  }
	   	   
   }

   @Given("^I choose ASU online courses radio button$")
   public void I_choose_ASU_online_courses_radio_button()throws Exception {
		driver.findElement(By.id("radio-online")).click();
       
   }

   @Given("^I choose Fall (\\d+)$")
   public void I_choose_Fall(int arg1)throws Exception {
	   driver.findElement(By.id("term")).sendKeys("2187"); 
       
   }

   @Given("^I input Eng$")
   public void I_input_Eng() throws Exception{
	   driver.findElement(By.id("subjectEntry")).sendKeys("ENG");
       
   }

   @Given("^I input (\\d+)$")
   public void I_input(int arg1)throws Exception {
	   driver.findElement(By.id("catNbr")).sendKeys("101");
       
   }

   @When("^I Click Search button$")
   public void I_Click_Search_button() throws Exception{
	   
	   	driver.findElement(By.id("go_and_search")).click();
	   	Thread.sleep(10000);	       
   }

   @And("^I click the add button$")
   public void I_click_the_add_button() throws Exception{
	   Thread.sleep(2000);	
	   String add_btn = "//*[@class=\"btn  btn-add-class\"]";
       int x =0;
       while (x<10){
    	   try{
    		   if ((driver.findElement(By.xpath(add_btn))).isDisplayed())
    		   {
    			   break;
    		   }
    		   
    	   }
    	   catch ( Exception e){
    		   System.out.println(e);
    	   }
    	   finally{
    		   x++;
    		   System.out.println("sleeping for 2 secs and try to find the add button again..");
    		   Thread.sleep(2000);
    	   }
       }	   

       if (x==10){
    	   System.out.print("The Add button is not Enabled after 20 secs loading, You can not add the course");
       }
       driver.findElement(By.xpath(add_btn)).click();
       
   }
   @Then("^The login page shows up$")
   public void The_login_page_shows_up() throws Exception{
	   int x=0;
	   while (x<10){
			try{
				if (driver.findElement(By.id("login_submit")).isEnabled()){
			    	   System.out.print("The login page shows up");
			    	   break;
			       } 
			}
			catch (Exception e){
				System.out.println(e);
			}
			finally{
				x++;
				System.out.println("waiting for 2 secs to check the login_submit button showing up..");
				Thread.sleep(2000);
			}
	   }
	   
	   if (x==10){
		   System.out.println("The login page does not show up after 20 secs waiting..");
	   }
	   
   }

   @Given("^I choose ASU In-Person & iCourses radio button$")
   public void I_choose_ASU_In_Person_iCourses_radio_button() {
	   driver.findElement(By.id("radio-campus")).click();
   }

   @Given("^I input DSC$")
   public void I_input_DSC() {
       // Express the Regexp above with the code you wish you had
	   driver.findElement(By.id("subjectEntry")).sendKeys("DSC");
   }

   @Given("^I choose session C$")
   public void I_choose_session_C() {
       // Express the Regexp above with the code you wish you had
	   driver.findElement(By.id("session-button")).click();
	   driver.findElement(By.id("sessionC")).click();
   }

   @When("^I click Search button$")
   public void I_click_Search_button()throws Exception {
		driver.findElement(By.id("go_and_search")).click();
	   	Thread.sleep(5000);	        
   }

   @Then("^I check seats opening$")
   public void I_check_seats_opening()throws Exception {
	   String seats_open="";
	   int x=0;
	   while(x<20){
		   try{
			  // seats_open = driver.findElement(By.xpath("//*[@id=\"informal\"]/td[11]/div")).getText();  
			   seats_open = driver.findElement(By.xpath("//*[@id=\"informal\"]/td[11]/div")).getText();  
 
			   //availableSeatsColumnValue
			   if (!seats_open.equalsIgnoreCase("")){
				   break;
			   }	
		   }
		   catch(Exception e){
			   System.out.println(e);
		   }
		   x++;
		   System.out.println("sleeping two secs to try again checking seats_open");
		   Thread.sleep(2000);
	   }
	   if (x==20){
		   System.err.println("seats_open can not be found after 40 secs..");
	   }
	   else{
		   System.out.println("There are " + seats_open +" seats open for session C");
	   }
   }
   @Given("^I input Squire$")
   public void I_input_Squire()throws Exception {
       // Express the Regexp above with the code you wish you had //keyword 
	   driver.findElement(By.id("keyword")).sendKeys("Squire");
   }

   @When("^I check instructorListColumnValue for Squire$")
   public void I_check_instructorListColumnValue_for_Squire()throws Exception {
       // Express the Regexp above with the code you wish you had
       List<WebElement>  instructorList = new ArrayList<WebElement>();
       instructorList = driver.findElements(By.className("instructorListColumnValue"));
       
       int ctr = 0;
       for (int i=0;i<instructorList.size();i++) {
    	   
    	   //str1.toLowerCase().contains(str2.toLowerCase())
    	   if (instructorList.get(i).getText().toLowerCase().contains("squire")){
    		   ctr++;
    	   } 
       }
       System.out.println("There are "+ ctr + " courses by Prof.Squire");
   }


@Then("^I check availableSeatsColumnValue for seats opening$")
   public void I_check_availableSeatsColumnValue_for_seats_opening()throws Exception {
       // Express the Regexp above with the code you wish you had
	   List <WebElement> avlSeats = new ArrayList <WebElement>();
	   avlSeats = driver.findElements(By.className("availableSeatsColumnValue"));
	   List<WebElement>  instructorList = new ArrayList<WebElement>();
       instructorList = driver.findElements(By.className("instructorListColumnValue"));
       
	   int ctr = 0;
       for (int i=0;i<avlSeats.size();i++) {  
    	   
    	   if (avlSeats.get(i).getText().toLowerCase().equals("0")){
    		   continue;
    	   } 
    	   else if((instructorList.get(i).getText().toLowerCase().contains("squire"))){
    		   ctr++;
    	   }
       }
       System.out.println("There are "+ ctr + " courses by Prof.Squire that have open seats");
       
   }
   @Then("^I close the browser$")
   public void I_close_the_browser() throws Exception{
       
       driver.close();
   }
   
 
}