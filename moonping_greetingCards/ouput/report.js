$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A-login.feature");
formatter.feature({
  "id": "open-moonpig-url-in-mozilla-browser-and-search-for-greeting-cards",
  "tags": [
    {
      "name": "@Smoke1Landing",
      "line": 1
    }
  ],
  "description": "\nIn order to access MoonPig GreetingCards\nAs a user of the app\nI want to search for the greetingCards",
  "name": "Open Moonpig URL in Mozilla Browser and Search for Greeting Cards",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "open-moonpig-url-in-mozilla-browser-and-search-for-greeting-cards;landing-page-of-moonpig;;2",
  "tags": [
    {
      "name": "@Smoke1Landing",
      "line": 1
    }
  ],
  "description": "",
  "name": "Landing page of MoonPig",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"moonpigURL\" on \"mozilla\"",
  "keyword": "Given ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I verify the moonPigtitle with \"expectedTitle\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click \"Search\" on searchpage",
  "keyword": "When ",
  "line": 15
});
formatter.match({
  "arguments": [
    {
      "val": "moonpigURL",
      "offset": 9
    },
    {
      "val": "mozilla",
      "offset": 25
    }
  ],
  "location": "LoginTest_Step.I_go_to(String,String)"
});
formatter.result({
  "duration": 8111692000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "expectedTitle",
      "offset": 32
    }
  ],
  "location": "SearchPage_Step.Verify_results(String)"
});
formatter.result({
  "duration": 10063415000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 9
    }
  ],
  "location": "SearchPage_Step.Click_SearchPage(String)"
});
formatter.result({
  "duration": 161921000,
  "status": "passed"
});
formatter.scenario({
  "id": "open-moonpig-url-in-mozilla-browser-and-search-for-greeting-cards;search-results;;2",
  "tags": [
    {
      "name": "@Smoke1Landing",
      "line": 1
    }
  ],
  "description": "",
  "name": "search Results",
  "keyword": "Scenario Outline",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"searchBox\" as \"wedding\"",
  "keyword": "Given ",
  "line": 22,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"searchButton\"",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I check the results",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I click on \"closeSearch\" with xpath",
  "keyword": "Then ",
  "line": 25
});
formatter.match({
  "arguments": [
    {
      "val": "searchBox",
      "offset": 9
    },
    {
      "val": "wedding",
      "offset": 24
    }
  ],
  "location": "LoginTest_Step.I_enter(String,String)"
});
formatter.result({
  "duration": 285724000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 12
    }
  ],
  "location": "SearchPage_Step.Click(String)"
});
formatter.result({
  "duration": 663713000,
  "status": "passed"
});
formatter.match({
  "location": "SearchPage_Step.check_the_results()"
});
formatter.result({
  "duration": 2512638000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "closeSearch",
      "offset": 12
    }
  ],
  "location": "SearchPage_Step.Click_xpath(String)"
});
formatter.result({
  "duration": 10311164000,
  "status": "passed"
});
formatter.scenario({
  "id": "open-moonpig-url-in-mozilla-browser-and-search-for-greeting-cards;search-results;;3",
  "tags": [
    {
      "name": "@Smoke1Landing",
      "line": 1
    }
  ],
  "description": "",
  "name": "search Results",
  "keyword": "Scenario Outline",
  "line": 30,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"searchBox\" as \"birthday\"",
  "keyword": "Given ",
  "line": 22,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"searchButton\"",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I check the results",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I click on \"closeSearch\" with xpath",
  "keyword": "Then ",
  "line": 25
});
formatter.match({
  "arguments": [
    {
      "val": "searchBox",
      "offset": 9
    },
    {
      "val": "birthday",
      "offset": 24
    }
  ],
  "location": "LoginTest_Step.I_enter(String,String)"
});
formatter.result({
  "duration": 240001000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 12
    }
  ],
  "location": "SearchPage_Step.Click(String)"
});
formatter.result({
  "duration": 282593000,
  "status": "passed"
});
formatter.match({
  "location": "SearchPage_Step.check_the_results()"
});
formatter.result({
  "duration": 540159000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "closeSearch",
      "offset": 12
    }
  ],
  "location": "SearchPage_Step.Click_xpath(String)"
});
formatter.result({
  "duration": 10295850000,
  "status": "passed"
});
formatter.scenario({
  "id": "open-moonpig-url-in-mozilla-browser-and-search-for-greeting-cards;search-results;;4",
  "tags": [
    {
      "name": "@Smoke1Landing",
      "line": 1
    }
  ],
  "description": "",
  "name": "search Results",
  "keyword": "Scenario Outline",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"searchBox\" as \"sorry\"",
  "keyword": "Given ",
  "line": 22,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"searchButton\"",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I check the results",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I click on \"closeSearch\" with xpath",
  "keyword": "Then ",
  "line": 25
});
formatter.match({
  "arguments": [
    {
      "val": "searchBox",
      "offset": 9
    },
    {
      "val": "sorry",
      "offset": 24
    }
  ],
  "location": "LoginTest_Step.I_enter(String,String)"
});
formatter.result({
  "duration": 216368000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 12
    }
  ],
  "location": "SearchPage_Step.Click(String)"
});
formatter.result({
  "duration": 275859000,
  "status": "passed"
});
formatter.match({
  "location": "SearchPage_Step.check_the_results()"
});
formatter.result({
  "duration": 181397000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "closeSearch",
      "offset": 12
    }
  ],
  "location": "SearchPage_Step.Click_xpath(String)"
});
formatter.result({
  "duration": 10631420000,
  "status": "passed"
});
formatter.scenario({
  "id": "open-moonpig-url-in-mozilla-browser-and-search-for-greeting-cards;search-results;;5",
  "tags": [
    {
      "name": "@Smoke1Landing",
      "line": 1
    }
  ],
  "description": "",
  "name": "search Results",
  "keyword": "Scenario Outline",
  "line": 32,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"searchBox\" as \"anniversary\"",
  "keyword": "Given ",
  "line": 22,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"searchButton\"",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I check the results",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I click on \"closeSearch\" with xpath",
  "keyword": "Then ",
  "line": 25
});
formatter.match({
  "arguments": [
    {
      "val": "searchBox",
      "offset": 9
    },
    {
      "val": "anniversary",
      "offset": 24
    }
  ],
  "location": "LoginTest_Step.I_enter(String,String)"
});
formatter.result({
  "duration": 272077000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 12
    }
  ],
  "location": "SearchPage_Step.Click(String)"
});
formatter.result({
  "duration": 286480000,
  "status": "passed"
});
formatter.match({
  "location": "SearchPage_Step.check_the_results()"
});
formatter.result({
  "duration": 867269000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "closeSearch",
      "offset": 12
    }
  ],
  "location": "SearchPage_Step.Click_xpath(String)"
});
formatter.result({
  "duration": 10331884000,
  "status": "passed"
});
formatter.scenario({
  "id": "open-moonpig-url-in-mozilla-browser-and-search-for-greeting-cards;close-the-browser",
  "description": "",
  "name": "Close the browser",
  "keyword": "Scenario",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Given ",
  "line": 35
});
formatter.match({
  "location": "LoginTest_Step.close_the_browser()"
});
formatter.result({
  "duration": 7353000,
  "status": "passed"
});
});