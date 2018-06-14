$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Indeed_QA_Engr_Submit/outline.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: YiWei Sun"
    },
    {
      "line": 2,
      "value": "#Email: yiweis@gmail.com"
    },
    {
      "line": 3,
      "value": "#Keywords Summary :"
    },
    {
      "line": 4,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 5,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 6,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 7,
      "value": "#When: Some key actions"
    },
    {
      "line": 8,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 9,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 10,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 11,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 12,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 13,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 14,
      "value": "#| (Data Tables)"
    },
    {
      "line": 15,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 16,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 17,
      "value": "#\"\""
    },
    {
      "line": 18,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "# As an online undergraduate student, I want to add an English 101 course to my schedule for Fall 2018 so that I can stay on track for graduating next year."
    }
  ],
  "line": 22,
  "name": "Scenario Indeed Submit Resume",
  "description": "",
  "id": "scenario-indeed-submit-resume",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 24,
  "name": "Search QA Engineer position Exists In Canada",
  "description": "",
  "id": "scenario-indeed-submit-resume;search-qa-engineer-position-exists-in-canada",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I open Indeed.ca",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I input QA Engineer and Montreal, QC",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click Find Jobs button",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I choose one of the Software QA Engineer link",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click Apply Now button",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I input My name",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I input My phone",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I input My Email",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I Click Browse button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I input the QA_Engr resume file name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click open button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The Continue button shows up",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click the Apply button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.I_have_open_the_browser()"
});
formatter.result({
  "duration": 1551426261,
  "error_message": "java.lang.IllegalStateException: The driver is not executable: /home/yiwei/eclipse_workspace/QA_Engr_Resume_Submit/res/geckodriver\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:140)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:131)\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:42)\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:143)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:335)\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:168)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\n\tat Indeed_QA_Engr_Submit.stepdefinition.I_have_open_the_browser(stepdefinition.java:25)\n\tat ✽.Given I have open the browser(src/test/java/Indeed_QA_Engr_Submit/outline.feature:25)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepdefinition.I_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 41,
      "value": "#As a QA Engineer, I would like to apply the opening jobs in US"
    }
  ],
  "line": 42,
  "name": "Search QA Engineer position Exists In US",
  "description": "",
  "id": "scenario-indeed-submit-resume;search-qa-engineer-position-exists-in-us",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I open Indeed.com",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I input QA Engineer and Us",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I click Find Jobs button",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I choose one of the Software QA Engineer link",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I click Apply Now button",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I input My name",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I input My phone",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I input My Email",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I Click Browse button",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I input the QA_Engr resume file name",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click open button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "The Continue button shows up",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I click the Apply button",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.I_have_open_the_browser()"
});
formatter.result({
  "duration": 4768821,
  "error_message": "java.lang.IllegalStateException: The driver is not executable: /home/yiwei/eclipse_workspace/QA_Engr_Resume_Submit/res/geckodriver\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:140)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:131)\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:42)\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:143)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:335)\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:168)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\n\tat Indeed_QA_Engr_Submit.stepdefinition.I_have_open_the_browser(stepdefinition.java:25)\n\tat ✽.Given I have open the browser(src/test/java/Indeed_QA_Engr_Submit/outline.feature:43)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepdefinition.I_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 59,
      "value": "#Search Data Analyst jobs in Canada"
    }
  ],
  "line": 60,
  "name": "Search Data Analyst in Canada",
  "description": "",
  "id": "scenario-indeed-submit-resume;search-data-analyst-in-canada",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I open Indeed.com",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I input Data Analyst and Montreal",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "I click Find Jobs button",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I click one of the data analyst job\u0027s link",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I click Apply Now button",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I input My name",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I input My phone",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I input My Email",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I Click Browse button",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I input the Data Analyst resume file name",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click open button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "The Continue button shows up",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I click the Apply button",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.I_have_open_the_browser()"
});
formatter.result({
  "duration": 1734263,
  "error_message": "java.lang.IllegalStateException: The driver is not executable: /home/yiwei/eclipse_workspace/QA_Engr_Resume_Submit/res/geckodriver\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:140)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:131)\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:42)\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:143)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:335)\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:168)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\n\tat Indeed_QA_Engr_Submit.stepdefinition.I_have_open_the_browser(stepdefinition.java:25)\n\tat ✽.Given I have open the browser(src/test/java/Indeed_QA_Engr_Submit/outline.feature:61)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepdefinition.I_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 76,
      "value": "#Search Data Analyst jobs in us"
    }
  ],
  "line": 77,
  "name": "Search Data Analyst in US",
  "description": "",
  "id": "scenario-indeed-submit-resume;search-data-analyst-in-us",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I open Indeed.com",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "I input Data Analyst and US",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "I click Find Jobs button",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "I click one of the data analyst job\u0027s link",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "I click Apply Now button",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "I input My name",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I input My phone",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I input My Email",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I Click Browse button",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I input the Data Analyst resume file name",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click open button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "The Continue button shows up",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I click the Apply button",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.I_have_open_the_browser()"
});
formatter.result({
  "duration": 9508401,
  "error_message": "java.lang.IllegalStateException: The driver is not executable: /home/yiwei/eclipse_workspace/QA_Engr_Resume_Submit/res/geckodriver\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:140)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:131)\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:42)\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:143)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:335)\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:168)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\n\tat Indeed_QA_Engr_Submit.stepdefinition.I_have_open_the_browser(stepdefinition.java:25)\n\tat ✽.Given I have open the browser(src/test/java/Indeed_QA_Engr_Submit/outline.feature:78)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepdefinition.I_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});