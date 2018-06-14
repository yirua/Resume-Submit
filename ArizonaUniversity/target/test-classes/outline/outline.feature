

#Author: yiweis@gmail.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template  
# As an online undergraduate student, I want to add an English 101 course to my schedule for Fall 2018 so that I can stay on track for graduating next year. 
 Feature: Scenario Outline
 
 
 	 
	Scenario: Search Functionality Exists
		Given I have open the browser
		Given I open Arizona University website
		Given I choose ASU online courses radio button
		Given I choose Fall 2018
		Given I input Eng		
		Given I input 101
		When I Click Search button
		And I click the add button
		Then The login page shows up
		Then I close the browser
		
#As a Tempe undergraduate student, I want to see how many seats are still open for DSC 101 in Fall 2018 Session C
	Scenario: Search seats availability
		Given I have open the browser
		Given I open Arizona University website
		Given I choose ASU In-Person & iCourses radio button
		Given I choose Fall 2018
		Given I input DSC		
		Given I input 101
		Given I choose session C
		When I click Search button
		Then I check seats opening
		Then I close the browser
		
#As a prospective student, I want to see how many classes Professor Squire 
#is teaching in Fall 2018 so that I can try to see if there is one I can enroll into  
	Scenario: Search classes by Prof. Squire In-Person & iCourses
	Given I have open the browser
		Given I open Arizona University website
		Given I choose ASU In-Person & iCourses radio button
		Given I choose Fall 2018
		Given I input Squire			
		When I click Search button
		When I check instructorListColumnValue for Squire
		Then I check availableSeatsColumnValue for seats opening
		Then I close the browser
		
	Scenario: Search classes by Prof. Squire On line
		Given I have open the browser
		Given I open Arizona University website
		Given I choose ASU online courses radio button
		Given I choose Fall 2018
		Given I input Squire			
		When I click Search button	
				
		And I check instructorListColumnValue for Squire
		Then I check availableSeatsColumnValue for seats opening
		Then I close the browser	