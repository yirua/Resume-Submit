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
  "status": "passed"
});
formatter.step({
  "name": "I input My phone",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_input_My_phone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input My Email",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.i_input_My_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input the QA_Engr resume file name",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.i_input_the_QA_Engr_resume_file_name()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"ia-FilePicker-resume\"}\n  (Session info: chrome\u003d69.0.3497.81)\n  (Driver info: chromedriver\u003d2.42.591071 (0b695ff80972cc1a65a5cd643186d2ae582cd4ac),platform\u003dLinux 4.15.0-34-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T15:15:03.216Z\u0027\nSystem info: host: \u0027yiwei-Aspire-A315-21\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-34-generic\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591071 (0b695ff80972cc..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:36761}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.81, webStorageEnabled: true}\nSession ID: b281f2ceb19e8cfdc5c8d843e5190005\n*** Element info: {Using\u003did, value\u003dia-FilePicker-resume}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat Indeed_QA_Engr_Submit.stepdefinition.i_input_the_QA_Engr_resume_file_name(stepdefinition.java:180)\n\tat ✽.I input the QA_Engr resume file name(src/test/java/Indeed_QA_Engr_Submit/outline.feature:35)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click continue button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.i_click_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Continue button shows up",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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