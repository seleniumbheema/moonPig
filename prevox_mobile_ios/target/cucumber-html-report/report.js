$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/resources/com/prevox/appium/C.c-public-composer.feature");
formatter.feature({
  "id": "composing-the-text-and-sharing-the-message-to-public",
  "tags": [
    {
      "name": "@SmokePubliccomposer",
      "line": 1
    }
  ],
  "description": "\nIn order to compose the text\nAs a Mobile user\nI want to Login in to Yubl application \nSo that I can access the features of the composer, profile and conversation",
  "name": "Composing the text and sharing the message to Public",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer",
  "description": "",
  "name": "Send feeds to Public using composer",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "#Developer : Anil Bheema",
      "line": 9
    },
    {
      "value": "#As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer",
      "line": 10
    },
    {
      "value": "#Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from",
      "line": 11
    },
    {
      "value": "#Object Repository(OR and Config-properties)",
      "line": 12
    }
  ]
});
formatter.step({
  "name": "I go to Yubl app on \"\u003cmobileDevice\u003e\"",
  "keyword": "Given ",
  "line": 14
});
formatter.examples({
  "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 17,
  "rows": [
    {
      "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer;;1",
      "cells": [
        "mobileDevice"
      ],
      "line": 18
    },
    {
      "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer;;2",
      "cells": [
        "iPhone 6"
      ],
      "line": 19
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer;;2",
  "tags": [
    {
      "name": "@SmokePubliccomposer",
      "line": 1
    }
  ],
  "description": "",
  "name": "Send feeds to Public using composer",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I go to Yubl app on \"iPhone 6\"",
  "keyword": "Given ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 6",
      "offset": 21
    }
  ],
  "location": "login_Step.I_go_to_Yubl(String)"
});
