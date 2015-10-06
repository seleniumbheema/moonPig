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
  "duration": 3063108000,
  "status": "failed",
  "error_message": "org.openqa.selenium.SessionNotCreatedException: A new session could not be created. (Original error: Could not find a device to launch. You requested \u0027iPhone (8.3 Simulator)\u0027, but the available devices were: [\"iPad 2 (9.0) [C09E4483-8058-4E09-9169-217F399E09D6]\",\"iPad Air (9.0) [4CC8789B-1C19-4D72-AD05-D2A7F829FDFE]\",\"iPad Air 2 (9.0) [5E408179-4721-453D-ACC2-CEB7407FCEEE]\",\"iPad Retina (9.0) [CC2641E7-736F-4FCE-91A4-DF4C0A7DED2C]\",\"iPhone 4s (9.0) [148EFC50-C717-4976-A843-0010AF0B1CAF]\",\"iPhone 5 (9.0) [446099DC-223E-4608-914A-DBC0380042E8]\",\"iPhone 5s (9.0) [6B92D76F-37B3-4F0C-B8D6-4EF05DB81548]\",\"iPhone 6 (9.0) [AF6762C8-F35E-431A-AA6B-47AD68F311D2]\",\"iPhone 6 (9.0) + Apple Watch - 38mm (2.0) [3AFA34DA-C8C7-4CF3-947E-821BC3889D77]\",\"iPhone 6 Plus (9.0) [9F14DACC-99AD-4874-B8D8-F6869E04DCDA]\",\"iPhone 6 Plus (9.0) + Apple Watch - 42mm (2.0) [81F5A7F9-6D88-4EEE-9389-58BDB86090DB]\",\"iPhone 6s (9.0) [5E2F9DE9-50EC-409F-908D-CC8AD842E05B]\",\"iPhone 6s Plus (9.0) [675C2032-FA50-46DD-A48E-97B015BBC4F9]\"]) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.66 seconds\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027Anils-MacBook-Pro.local\u0027, ip: \u0027169.254.78.79\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:240)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:126)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:153)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\n\tat io.appium.java_client.ios.IOSDriver.\u003cinit\u003e(IOSDriver.java:23)\n\tat com.prevox.appium.util.webConnector.openApplication(webConnector.java:102)\n\tat com.prevox.appium.login_Step.I_go_to_Yubl(login_Step.java:43)\n\tat ✽.Given I go to Yubl app on \"iPhone 6\"(test/resources/com/prevox/appium/C.d1-public-composer-mutlipleElementsVST.feature:20)\n"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 3250000,
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
  "duration": 10000771000,
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
  "duration": 887000,
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
  "duration": 388000,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\n\tat com.prevox.appium.util.webConnector.list_webElements(webConnector.java:273)\n\tat com.prevox.appium.util.composer_page.list_videos_gallery(composer_page.java:36)\n\tat com.prevox.appium.composer_camera_step.Select_the_video_gallery(composer_camera_step.java:50)\n\tat ✽.And I Select a \"video\" from videoGallery(test/resources/com/prevox/appium/C.d1-public-composer-mutlipleElementsVST.feature:38)\n"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 1173000,
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
  "duration": 836000,
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
  "duration": 2536000,
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
  "duration": 862000,
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
  "duration": 1001201000,
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
  "duration": 893000,
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
  "duration": 592000,
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
  "duration": 532000,
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
  "duration": 730000,
  "status": "passed"
});
formatter.match({
  "location": "public_composer_step.I_swipe()"
});
formatter.result({
  "duration": 633000,
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
  "duration": 814000,
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
  "duration": 588000,
  "status": "passed"
});
formatter.match({
  "location": "public_composer_step.I_swipe()"
});
formatter.result({
  "duration": 541000,
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
  "duration": 614000,
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
  "duration": 692000,
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
  "duration": 827000,
  "status": "passed"
});
});