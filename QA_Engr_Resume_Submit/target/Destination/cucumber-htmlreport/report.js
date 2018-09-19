$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Indeed_QA_Engr_Submit/outline.feature");
formatter.feature({
  "name": "Scenario Indeed Submit Resume",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search QA Engineer position Exists In Canada",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.I_have_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open Indeed.ca",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_open_Indeed_ca()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input QA Engineer and Montreal, QC",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_input_QA_Engineer_and_Montreal_QC()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Find Jobs button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_click_Find_Jobs_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose one of the Software QA Engineer link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_choose_one_of_the_Software_QA_Engineer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Apply Now button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_click_Apply_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input My name",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_input_My_name()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: Given css selector expression \"#\" is invalid: InvalidSelectorError: \u0027#\u0027 is not a valid selector: \"#\"\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027yiwei-Aspire-A315-21\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-34-generic\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 62.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.22.0, moz:headless: false, moz:processID: 14932, moz:profile: /tmp/rust_mozprofile.2qdnVA..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 4.15.0-34-generic, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 2612e3cc-6e67-45ef-ab61-47f4bc4bea2a\n*** Element info: {Using\u003did, value\u003d}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat Indeed_QA_Engr_Submit.stepdefinition.i_input_My_name(stepdefinition.java:80)\n\tat ✽.I input My name(src/test/java/Indeed_QA_Engr_Submit/outline.feature:31)\n",
  "status": "failed"
});
formatter.step({
  "name": "I input My phone",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_input_My_phone()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input My Email",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_input_My_Email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Browse button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.i_Click_Browse_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input the QA_Engr resume file name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.i_input_the_QA_Engr_resume_file_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click open button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.i_click_open_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Continue button shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.the_Continue_button_shows_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Apply button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.i_click_the_Apply_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.I_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});