$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/resources/com/prevox/appium/C.d1-public-composer-mutlipleElementsVST.feature");
formatter.feature({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements",
  "tags": [
    {
      "name": "@Smoke4PublicMutipleElementVST",
      "line": 1
    }
  ],
  "description": "\nIn order to test Three Elements Composing Text, Sticker, Video\nAs a Mobile user\nI want to Login in to Yubl application \nSo that I can access the features of the composer, profile and conversation\n\nVideoTool \u003d V\nTextTool  \u003d T\nStickerTool \u003d S",
  "name": "Composing the text and sharing the message to your friends and followers Using Multiple Elements",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements;using-composer,-texttool,-sticker,-video",
  "description": "",
  "name": "Using Composer, TextTool, Sticker, Video",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I go to Yubl app on \"\u003cmobileDevice\u003e\"",
  "keyword": "Given ",
  "line": 20
});
formatter.step({
  "name": "Check I am on \"homePage\" with \"yublPrivate\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 26
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 27
});
formatter.examples({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements;using-composer,-texttool,-sticker,-video;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 29,
  "rows": [
    {
      "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements;using-composer,-texttool,-sticker,-video;;1",
      "cells": [
        "mobileDevice"
      ],
      "line": 30
    },
    {
      "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements;using-composer,-texttool,-sticker,-video;;2",
      "cells": [
        "iPhone 6"
      ],
      "line": 31
    }
  ]
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 17,
  "type": "background",
  "comments": [
    {
      "value": "#Developer : Anil Bheema",
      "line": 13
    },
    {
      "value": "#As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer",
      "line": 14
    },
    {
      "value": "#Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from",
      "line": 15
    },
    {
      "value": "#Object Repository(OR and Config-properties)",
      "line": 16
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements;using-composer,-texttool,-sticker,-video;;2",
  "tags": [
    {
      "name": "@Smoke4PublicMutipleElementVST",
      "line": 1
    }
  ],
  "description": "",
  "name": "Using Composer, TextTool, Sticker, Video",
  "keyword": "Scenario Outline",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "I go to Yubl app on \"iPhone 6\"",
  "keyword": "Given ",
  "line": 20,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Check I am on \"homePage\" with \"yublPrivate\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 26
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 27
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
  "duration": 28990281000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "homePage",
      "offset": 15
    },
    {
      "val": "yublPrivate",
      "offset": 31
    }
  ],
  "location": "composer_step.Check_I_am_on_homepage_with_Yubltext(String,String)"
});
formatter.result({
  "duration": 480545000,
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
  "duration": 672903000,
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
  "duration": 982009000,
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
  "duration": 3505968000,
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
  "duration": 415219000,
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
  "duration": 752711000,
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
  "duration": 1793152000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 17,
  "type": "background",
  "comments": [
    {
      "value": "#Developer : Anil Bheema",
      "line": 13
    },
    {
      "value": "#As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer",
      "line": 14
    },
    {
      "value": "#Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from",
      "line": 15
    },
    {
      "value": "#Object Repository(OR and Config-properties)",
      "line": 16
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements;videotool",
  "description": "",
  "name": "VideoTool",
  "keyword": "Scenario",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "I tap on \"cameraTool\" with name",
  "keyword": "When ",
  "line": 35,
  "comments": [
    {
      "value": "### Text Tool ###",
      "line": 34
    }
  ]
});
formatter.step({
  "name": "I tap on \"gallery\" with name for duration",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "I tap on \"Videos\" from Table",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "I Select a \"video\" from videoGallery",
  "keyword": "And ",
  "line": 38
});
formatter.step({
  "name": "I tap on \"playButton\" with name for duration",
  "keyword": "And ",
  "line": 39
});
formatter.step({
  "name": "I tap on \"Choose\" with name for duration",
  "keyword": "And ",
  "line": 40
});
formatter.step({
  "name": "I tap on \"bigPlayButton\" with name for duration",
  "keyword": "And ",
  "line": 41
});
formatter.step({
  "name": "I tap on \"confirmButton\" with name for duration",
  "keyword": "And ",
  "line": 42
});
formatter.step({
  "name": "I tap on \"doneButton\" with name",
  "keyword": "And ",
  "line": 43
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
  "duration": 839319000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gallery",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name_duration(String)"
});
formatter.result({
  "duration": 10442429000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Videos",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_tap_on_Table(String)"
});
formatter.result({
  "duration": 924390000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "video",
      "offset": 12
    }
  ],
  "location": "composer_camera_step.Select_the_video_gallery(String)"
});
formatter.result({
  "duration": 1551378000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "playButton",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name_duration(String)"
});
formatter.result({
  "duration": 11436517000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Choose",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name_duration(String)"
});
formatter.result({
  "duration": 10828766000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bigPlayButton",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name_duration(String)"
});
formatter.result({
  "duration": 20269436000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "confirmButton",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name_duration(String)"
});
formatter.result({
  "duration": 10463382000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doneButton",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 386117000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 17,
  "type": "background",
  "comments": [
    {
      "value": "#Developer : Anil Bheema",
      "line": 13
    },
    {
      "value": "#As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer",
      "line": 14
    },
    {
      "value": "#Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from",
      "line": 15
    },
    {
      "value": "#Object Repository(OR and Config-properties)",
      "line": 16
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements;stickertool",
  "description": "",
  "name": "StickerTool",
  "keyword": "Scenario",
  "line": 46,
  "type": "scenario",
  "comments": [
    {
      "value": "### Sticker Tool ###",
      "line": 45
    }
  ]
});
formatter.step({
  "name": "I click on \"stickerTool\"",
  "keyword": "When ",
  "line": 47
});
formatter.step({
  "name": "I click on \"sticker\"",
  "keyword": "And ",
  "line": 48
});
formatter.step({
  "name": "I tap on \"doneButton\" with name",
  "keyword": "And ",
  "line": 49
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
  "duration": 1493227000,
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
  "duration": 10814654000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doneButton",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 427962000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 17,
  "type": "background",
  "comments": [
    {
      "value": "#Developer : Anil Bheema",
      "line": 13
    },
    {
      "value": "#As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer",
      "line": 14
    },
    {
      "value": "#Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from",
      "line": 15
    },
    {
      "value": "#Object Repository(OR and Config-properties)",
      "line": 16
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements;texttool",
  "description": "",
  "name": "TextTool",
  "keyword": "Scenario",
  "line": 51,
  "type": "scenario"
});
formatter.step({
  "name": "I click on \"TextToolElement\"",
  "keyword": "When ",
  "line": 53,
  "comments": [
    {
      "value": "### Text Tool ###",
      "line": 52
    }
  ]
});
formatter.step({
  "name": "I enter \"textTool\" as \"composingPublicText\"",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "I tap on \"doneButton\" with name",
  "keyword": "And ",
  "line": 55
});
formatter.match({
  "arguments": [
    {
      "val": "TextToolElement",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 9643485000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "textTool",
      "offset": 9
    },
    {
      "val": "composingPublicText",
      "offset": 23
    }
  ],
  "location": "login_Step.I_enter(String,String)"
});
formatter.result({
  "duration": 33567597000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doneButton",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_click_on_name(String)"
});
formatter.result({
  "duration": 458089000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 17,
  "type": "background",
  "comments": [
    {
      "value": "#Developer : Anil Bheema",
      "line": 13
    },
    {
      "value": "#As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer",
      "line": 14
    },
    {
      "value": "#Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from",
      "line": 15
    },
    {
      "value": "#Object Repository(OR and Config-properties)",
      "line": 16
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers-using-multiple-elements;sharewitheveryone",
  "description": "",
  "name": "ShareWithEveryone",
  "keyword": "Scenario",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "I tap on \"nextButton\" with name",
  "keyword": "And ",
  "line": 58
});
formatter.step({
  "name": "I tap on \"shareWithEveryone\" with name",
  "keyword": "When ",
  "line": 59
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "And ",
  "line": 60
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 61
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 62
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 63
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 64
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\" and assert the values",
  "keyword": "And ",
  "line": 65
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 66
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "Then ",
  "line": 67
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
  "duration": 1087969000,
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
  "duration": 1259707000,
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
  "duration": 1536746000,
  "status": "passed"
});
formatter.match({
  "location": "public_composer_step.I_swipe()"
});
formatter.result({
  "duration": 319789000,
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
  "duration": 2673917000,
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
  "duration": 1028880000,
  "status": "passed"
});
formatter.match({
  "location": "public_composer_step.I_swipe()"
});
formatter.result({
  "duration": 474804000,
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
  "duration": 1762875000,
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
  "duration": 451526000,
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
  "duration": 3753478000,
  "status": "passed"
});
});