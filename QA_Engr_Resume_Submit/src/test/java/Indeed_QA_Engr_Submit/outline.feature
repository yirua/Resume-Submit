#Author: YiWei Sun 
#Email: yiweis@gmail.com
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

Feature: Scenario Indeed Submit Resume
 	 
	Scenario: Search QA Engineer position Exists In Canada
		Given I have open the browser
		Given I open Indeed.ca
		Given I input QA Engineer and Montreal, QC
		Given I click Find Jobs button
		Given I choose one of the Software QA Engineer link
		Given I click Apply Now button
		Given I input My name		
		Given I input My phone
		Given I input My Email		
		#When I Click Browse button
		When I input the QA_Engr resume file name
		And I click continue button
		Then The Continue button shows up
		Then I click the Apply button
		Then I close the browser
		
#As a QA Engineer, I would like to apply the opening jobs in US
#	Scenario: Search QA Engineer position Exists In US
#		Given I have open the browser
#		Given I open Indeed.com
#		Given I input QA Engineer and Us
#		Given I click Find Jobs button
#		Given I choose one of the Software QA Engineer link
#		Given I click Apply Now button
#		Given I input My name		
#		Given I input My phone
#		Given I input My Email		
#		When I Click Browse button
#		And I input the QA_Engr resume file name
#		And I click open button
#		Then The Continue button shows up
#		Then I click the Apply button
#		Then I close the browser
		
#Search Data Analyst jobs in Canada 
#	Scenario: Search Data Analyst in Canada
#	Given I have open the browser
#		Given I open Indeed.com
#		Given I input Data Analyst and Montreal
#		Given I click Find Jobs button
#		Given I click one of the data analyst job's link
#		Given I click Apply Now button
#		Given I input My name		
#		Given I input My phone
#		Given I input My Email		
#		When I Click Browse button
#		And I input the Data Analyst resume file name
#		And I click open button
#		Then The Continue button shows up
#		Then I click the Apply button
#		Then I close the browser

	#Search Data Analyst jobs in us
#Scenario: Search Data Analyst in US	
#	Given I have open the browser
#		Given I open Indeed.com
#		Given I input Data Analyst and US
#		Given I click Find Jobs button
#		Given I click one of the data analyst job's link
#		Given I click Apply Now button
#		Given I input My name		
#  	Given I input My phone
#		Given I input My Email		
#		When I Click Browse button
#		And I input the Data Analyst resume file name
#		And I click open button
#		Then The Continue button shows up
#		Then I click the Apply button
#		Then I close the browser
		