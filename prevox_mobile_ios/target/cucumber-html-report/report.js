$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/resources/com/prevox/appium/C.c-public-composer-sticker.feature");
formatter.feature({
  "id": "composing-the-text-and-sharing-the-message-to-public",
  "tags": [
    {
      "name": "@SmokePubliccomposer",
      "line": 1
    }
  ],
  "description": "\nIn order to compose the text\nAs a Mobile user\nI want to Login in to Yubl application, and tap on Public\nSo that I can access the features of the composer, profile and conversation",
  "name": "Composing the text and sharing the message to Public",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--sticker",
  "description": "",
  "name": "Send feeds to Public using composer- Sticker",
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
formatter.step({
  "name": "Check I am on \"homePage\" with \"yublHome\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click on \"stickerTool\"",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "I click on \"sticker\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I click on \"recursiveSticker\"",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I click on \"sendSticker\"",
  "keyword": "And ",
  "line": 21
});
formatter.examples({
  "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--sticker;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 23,
  "rows": [
    {
      "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--sticker;;1",
      "cells": [
        "mobileDevice"
      ],
      "line": 24
    },
    {
      "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--sticker;;2",
      "cells": [
        "iPhone 6"
      ],
      "line": 25
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--sticker;;2",
  "tags": [
    {
      "name": "@SmokePubliccomposer",
      "line": 1
    }
  ],
  "description": "",
  "name": "Send feeds to Public using composer- Sticker",
  "keyword": "Scenario Outline",
  "line": 25,
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
formatter.step({
  "name": "Check I am on \"homePage\" with \"yublHome\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click on \"stickerTool\"",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "I click on \"sticker\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I click on \"recursiveSticker\"",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I click on \"sendSticker\"",
  "keyword": "And ",
  "line": 21
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
formatter.result({
  "duration": 28221456000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "homePage",
      "offset": 15
    },
    {
      "val": "yublHome",
      "offset": 31
    }
  ],
  "location": "composer_step.Check_I_am_on_homepage_with_Yubltext(String,String)"
});
formatter.result({
  "duration": 627937000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Public",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 380545000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "composer",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 2670087000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stickerTool",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 3238954000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sticker",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 9562722000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recursiveSticker",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 8357720000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sendSticker",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 15716344000,
  "status": "passed"
});
});