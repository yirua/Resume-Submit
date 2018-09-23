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
  "name": "I input My information",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.i_input_My_information()"
});
