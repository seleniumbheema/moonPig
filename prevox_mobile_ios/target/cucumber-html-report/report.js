$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/resources/com/prevox/appium/C.a1-public-composer-camera-live.feature");
formatter.feature({
  "id": "composing-the-text-and-sharing-the-message-to-public",
  "tags": [
    {
      "name": "@SmokePubliccomposerCamereLive",
      "line": 1
    }
  ],
  "description": "\nIn order to compose the text\nAs a Mobile user\nI want to Login in to Yubl application, and tap on Public\nSo that I can access the features of the composer, profile and conversation",
  "name": "Composing the text and sharing the message to Public",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--camera---live-back-camera",
  "tags": [
    {
      "name": "@SmokePubliccomposerCamereLiveBackCamera",
      "line": 43
    }
  ],
  "description": "",
  "name": "Send feeds to Public using composer- Camera - Live Back Camera",
  "keyword": "Scenario Outline",
  "line": 44,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I go to Yubl app on \"\u003cmobileDevice\u003e\"",
  "keyword": "Given ",
  "line": 46
});
formatter.step({
  "name": "Check I am on \"homePage\" with \"yublHome\"",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 48
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 49
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 50
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 51
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 52
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "I tap on \"cameraTool\" with name",
  "keyword": "When ",
  "line": 54
});
formatter.step({
  "name": "I tap on \"backCamera\" with name",
  "keyword": "And ",
  "line": 55
});
formatter.step({
  "name": "I capture the picture with \"\u003cxCoordinate\u003e\" and \"\u003cyCoordinate\u003e\"",
  "keyword": "And ",
  "line": 56
});
formatter.step({
  "name": "I tap on \"reTake\" with name",
  "keyword": "And ",
  "line": 57
});
formatter.step({
  "name": "I capture the picture with \"\u003cxCoordinate\u003e\" and \"\u003cyCoordinate\u003e\"",
  "keyword": "And ",
  "line": 58
});
formatter.step({
  "name": "I click on \"doneButtons\"",
  "keyword": "And ",
  "line": 59
});
formatter.step({
  "name": "I tap on \"nextButton\" with name",
  "keyword": "And ",
  "line": 60
});
formatter.step({
  "name": "I tap on \"shareWithEveryone\" with name",
  "keyword": "When ",
  "line": 61
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "And ",
  "line": 62
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 63
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 64
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 65
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\" and assert the values",
  "keyword": "And ",
  "line": 66
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 67
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "Then ",
  "line": 68
});
formatter.examples({
  "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--camera---live-back-camera;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 70,
  "rows": [
    {
      "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--camera---live-back-camera;;1",
      "cells": [
        "mobileDevice",
        "xCoordinate",
        "yCoordinate"
      ],
      "line": 71
    },
    {
      "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--camera---live-back-camera;;2",
      "cells": [
        "Bheema iPhone6 Test",
        "iPhone6xCoordinate",
        "iphone6yCoordinate"
      ],
      "line": 72
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-public;send-feeds-to-public-using-composer--camera---live-back-camera;;2",
  "tags": [
    {
      "name": "@SmokePubliccomposerCamereLive",
      "line": 1
    },
    {
      "name": "@SmokePubliccomposerCamereLiveBackCamera",
      "line": 43
    }
  ],
  "description": "",
  "name": "Send feeds to Public using composer- Camera - Live Back Camera",
  "keyword": "Scenario Outline",
  "line": 72,
  "type": "scenario"
});
formatter.step({
  "name": "I go to Yubl app on \"Bheema iPhone6 Test\"",
  "keyword": "Given ",
  "line": 46,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Check I am on \"homePage\" with \"yublHome\"",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 48
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 49
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 50
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 51
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 52
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "I tap on \"cameraTool\" with name",
  "keyword": "When ",
  "line": 54
});
formatter.step({
  "name": "I tap on \"backCamera\" with name",
  "keyword": "And ",
  "line": 55
});
formatter.step({
  "name": "I capture the picture with \"iPhone6xCoordinate\" and \"iphone6yCoordinate\"",
  "keyword": "And ",
  "line": 56,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "I tap on \"reTake\" with name",
  "keyword": "And ",
  "line": 57
});
formatter.step({
  "name": "I capture the picture with \"iPhone6xCoordinate\" and \"iphone6yCoordinate\"",
  "keyword": "And ",
  "line": 58,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "I click on \"doneButtons\"",
  "keyword": "And ",
  "line": 59
});
formatter.step({
  "name": "I tap on \"nextButton\" with name",
  "keyword": "And ",
  "line": 60
});
formatter.step({
  "name": "I tap on \"shareWithEveryone\" with name",
  "keyword": "When ",
  "line": 61
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "And ",
  "line": 62
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 63
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 64
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 65
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\" and assert the values",
  "keyword": "And ",
  "line": 66
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 67
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "Then ",
  "line": 68
});
formatter.match({
  "arguments": [
    {
      "val": "Bheema iPhone6 Test",
      "offset": 21
    }
  ],
  "location": "login_Step.I_go_to_Yubl(String)"
});
formatter.result({
  "duration": 28566402000,
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
  "duration": 3746686000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 3976669000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profile",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 2268028000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profilebeforefeeds",
      "offset": 20
    }
  ],
  "location": "public_composer_step.I_get_the_value_of(String)"
});
formatter.result({
  "duration": 2575642000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profileBackButton",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 2316079000,
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
  "duration": 2334659000,
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
  "duration": 6175909000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cameraTool",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 2481980000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "backCamera",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 2335836000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone6xCoordinate",
      "offset": 28
    },
    {
      "val": "iphone6yCoordinate",
      "offset": 53
    }
  ],
  "location": "composer_camera_step.I_capture_the_picture(String,String)"
});
formatter.result({
  "duration": 1162017000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reTake",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 2488527000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone6xCoordinate",
      "offset": 28
    },
    {
      "val": "iphone6yCoordinate",
      "offset": 53
    }
  ],
  "location": "composer_camera_step.I_capture_the_picture(String,String)"
});
formatter.result({
  "duration": 1140672000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doneButtons",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 4130657000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nextButton",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 2327489000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shareWithEveryone",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 2336412000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "homePublicPage",
      "offset": 15
    },
    {
      "val": "yublPublic",
      "offset": 37
    }
  ],
  "location": "composer_step.Check_I_am_on_homepage_with_Yubltext(String,String)"
});
formatter.result({
  "duration": 4795311000,
  "status": "passed"
});
formatter.match({
  "location": "public_composer_step.I_swipe()"
});
formatter.result({
  "duration": 2480380000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 5941696000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profile",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 2759351000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profileAfterfeeds",
      "offset": 20
    }
  ],
  "location": "public_composer_step.I_get_assertion(String)"
});
formatter.result({
  "duration": 2479247000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profileBackButton",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 2268542000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "homePublicPage",
      "offset": 15
    },
    {
      "val": "yublPublic",
      "offset": 37
    }
  ],
  "location": "composer_step.Check_I_am_on_homepage_with_Yubltext(String,String)"
});
formatter.result({
  "duration": 4814590000,
  "status": "passed"
});
});