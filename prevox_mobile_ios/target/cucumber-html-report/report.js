$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/resources/com/prevox/appium/C.c-public-composer-video_gallery.feature");
formatter.feature({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers",
  "tags": [
    {
      "name": "@Smoke4PubliccomposerVideoGallery",
      "line": 1
    }
  ],
  "description": "\nIn order to entering a Camera, taking a photo, upload picture from Gallery\nAs a Mobile user\nI want to Login in to Yubl application \nSo that I can access the features of the composer, profile and conversation",
  "name": "Composing the text and sharing the message to your friends and followers",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-gallery-and-share-with-everyone",
  "description": "",
  "name": "Using Composer, upload video from Gallery and Share with everyone",
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
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I tap on \"cameraTool\" with name",
  "keyword": "When ",
  "line": 22
});
formatter.step({
  "name": "I tap on \"gallery\" with name",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "I tap on \"Videos\" from Table",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "I Select a \"video\" from videoGallery",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I tap on \"playButton\" with name for duration",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I tap on \"Choose\" with name for duration",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "I tap on \"bigPlayButton\" with name for duration",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "I tap on \"confirmButton\" with name for duration",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I click on \"doneButtons\"",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "I tap on \"nextButton\" with name",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I tap on \"shareWithEveryone\" with name",
  "keyword": "When ",
  "line": 32
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 34
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\" and assert the values",
  "keyword": "And ",
  "line": 37
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 38
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "Then ",
  "line": 39
});
formatter.examples({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-gallery-and-share-with-everyone;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 41,
  "rows": [
    {
      "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-gallery-and-share-with-everyone;;1",
      "cells": [
        "mobileDevice",
        "xCoordinate",
        "yCoordinate"
      ],
      "line": 42
    },
    {
      "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-gallery-and-share-with-everyone;;2",
      "cells": [
        "Bheema iPhone6 Test",
        "iPhone6xCoordinate",
        "iphone6yCoordinate"
      ],
      "line": 43
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-gallery-and-share-with-everyone;;2",
  "tags": [
    {
      "name": "@Smoke4PubliccomposerVideoGallery",
      "line": 1
    }
  ],
  "description": "",
  "name": "Using Composer, upload video from Gallery and Share with everyone",
  "keyword": "Scenario Outline",
  "line": 43,
  "type": "scenario"
});
formatter.step({
  "name": "I go to Yubl app on \"Bheema iPhone6 Test\"",
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
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I tap on \"cameraTool\" with name",
  "keyword": "When ",
  "line": 22
});
formatter.step({
  "name": "I tap on \"gallery\" with name",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "I tap on \"Videos\" from Table",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "I Select a \"video\" from videoGallery",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I tap on \"playButton\" with name for duration",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I tap on \"Choose\" with name for duration",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "I tap on \"bigPlayButton\" with name for duration",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "I tap on \"confirmButton\" with name for duration",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I click on \"doneButtons\"",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "I tap on \"nextButton\" with name",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I tap on \"shareWithEveryone\" with name",
  "keyword": "When ",
  "line": 32
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 34
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\" and assert the values",
  "keyword": "And ",
  "line": 37
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 38
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "Then ",
  "line": 39
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
  "duration": 884903000,
  "status": "failed",
  "error_message": "org.openqa.selenium.SessionNotCreatedException: A new session could not be created. (Original error: Could not find a device to launch. You requested \u0027Bheema iPhone6 Test (8.1.1 Simulator)\u0027, but the available devices were: [\"iPad 2 (8.3 Simulator) [DA515FB2-B893-4916-AD01-CA21AB0494DE]\",\"iPad Air (8.3 Simulator) [6FAF8007-1288-478A-8535-A3A3980238BA]\",\"iPad Retina (8.3 Simulator) [33C484A2-D78B-4508-8BAB-4B424EC56002]\",\"iPhone 4s (8.3 Simulator) [AA80AEEF-431F-419B-ACAB-7433F556D3A8]\",\"iPhone 5 (8.3 Simulator) [DE5D0163-5DB6-4A33-90AD-51736EC9409E]\",\"iPhone 5s (8.3 Simulator) [B02F134E-3BFF-4580-839F-75EA9F458EB6]\",\"iPhone 6 (8.3 Simulator) [FDB1A976-241F-4072-8F49-3B7D11B734A1]\",\"iPhone 6 Plus (8.3 Simulator) [E5A2B598-DCC8-4E32-98A7-097F60796967]\"]) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 653 milliseconds\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027Anils-MacBook-Pro.local\u0027, ip: \u0027169.254.73.228\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:240)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:126)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:153)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\n\tat io.appium.java_client.ios.IOSDriver.\u003cinit\u003e(IOSDriver.java:23)\n\tat com.prevox.appium.util.webConnector.openApplication(webConnector.java:115)\n\tat com.prevox.appium.login_Step.I_go_to_Yubl(login_Step.java:43)\n\tat ✽.Given I go to Yubl app on \"Bheema iPhone6 Test\"(test/resources/com/prevox/appium/C.c-public-composer-video_gallery.feature:14)\n"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "gallery",
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
      "val": "Videos",
      "offset": 10
    }
  ],
  "location": "public_composer_step.I_tap_on_Table(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
      "val": "doneButtons",
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
      "val": "nextButton",
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
      "val": "shareWithEveryone",
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
  "status": "skipped"
});
formatter.match({
  "location": "public_composer_step.I_swipe()"
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
      "val": "profileAfterfeeds",
      "offset": 20
    }
  ],
  "location": "public_composer_step.I_get_assertion(String)"
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
  "status": "skipped"
});
formatter.uri("test/resources/com/prevox/appium/C.c1-public-composer-video_live.feature");
formatter.feature({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers",
  "tags": [
    {
      "name": "@Smoke4PubliccomposerVideoLive",
      "line": 1
    }
  ],
  "description": "\nIn order to entering a Camera, taking a photo, upload picture from Gallery\nAs a Mobile user\nI want to Login in to Yubl application \nSo that I can access the features of the composer, profile and conversation",
  "name": "Composing the text and sharing the message to your friends and followers",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-camera",
  "description": "",
  "name": "Using Composer, upload video from Front Live Camera",
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
  "name": "Check I am on \"homePage\" with \"yublHome\"",
  "keyword": "And ",
  "line": 15,
  "comments": [
    {
      "value": "# Given I go to Yubl app on \"\u003cmobileDevice\u003e\"",
      "line": 14
    }
  ]
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I tap on \"cameraTool\" with name",
  "keyword": "When ",
  "line": 22
});
formatter.step({
  "name": "I capture the video with \"\u003cxCoordinate\u003e\" and \"\u003cyCoordinate\u003e\" for \"minimumVideoDuration\"",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "I tap on \"bigPlayButton\" with name for duration",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I click on \"doneButtons\"",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I tap on \"nextButton\" with name",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I tap on \"shareWithEveryone\" with name",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\" and assert the values",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "Then ",
  "line": 34
});
formatter.examples({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-camera;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 36,
  "rows": [
    {
      "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-camera;;1",
      "cells": [
        "mobileDevice",
        "xCoordinate",
        "yCoordinate"
      ],
      "line": 37
    },
    {
      "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-camera;;2",
      "cells": [
        "Bheema iPhone6 Test",
        "iPhone6xCoordinate",
        "iphone6yCoordinate"
      ],
      "line": 38
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-camera;;2",
  "tags": [
    {
      "name": "@Smoke4PubliccomposerVideoLive",
      "line": 1
    }
  ],
  "description": "",
  "name": "Using Composer, upload video from Front Live Camera",
  "keyword": "Scenario Outline",
  "line": 38,
  "type": "scenario"
});
formatter.step({
  "name": "Check I am on \"homePage\" with \"yublHome\"",
  "keyword": "And ",
  "line": 15,
  "comments": [
    {
      "value": "# Given I go to Yubl app on \"\u003cmobileDevice\u003e\"",
      "line": 14
    }
  ]
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I tap on \"cameraTool\" with name",
  "keyword": "When ",
  "line": 22
});
formatter.step({
  "name": "I capture the video with \"iPhone6xCoordinate\" and \"iphone6yCoordinate\" for \"minimumVideoDuration\"",
  "keyword": "And ",
  "line": 23,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "I tap on \"bigPlayButton\" with name for duration",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I click on \"doneButtons\"",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I tap on \"nextButton\" with name",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I tap on \"shareWithEveryone\" with name",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\" and assert the values",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "Then ",
  "line": 34
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
  "duration": 2650000,
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
  "duration": 515000,
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
  "duration": 574000,
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
  "duration": 468000,
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
  "duration": 496000,
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
  "duration": 449000,
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
  "duration": 590000,
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
  "duration": 450000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone6xCoordinate",
      "offset": 26
    },
    {
      "val": "iphone6yCoordinate",
      "offset": 51
    },
    {
      "val": "minimumVideoDuration",
      "offset": 76
    }
  ],
  "location": "composer_camera_step.I_capture_the_video(String,String,String)"
});
formatter.result({
  "duration": 769000,
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
  "duration": 10004158000,
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
  "duration": 909000,
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
  "duration": 813000,
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
  "duration": 615000,
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
  "duration": 663000,
  "status": "passed"
});
formatter.match({
  "location": "public_composer_step.I_swipe()"
});
formatter.result({
  "duration": 731000,
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
  "duration": 583000,
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
  "duration": 573000,
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
  "duration": 594000,
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
  "duration": 515000,
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
  "duration": 761000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-backcamera",
  "tags": [
    {
      "name": "@Smoke4PubliccomposerVideoLiveBackCamera",
      "line": 41
    }
  ],
  "description": "",
  "name": "Using Composer, upload video from Front Live BackCamera",
  "keyword": "Scenario Outline",
  "line": 42,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "#iPhone 6",
      "line": 40
    }
  ]
});
formatter.step({
  "name": "Check I am on \"homePage\" with \"yublHome\"",
  "keyword": "And ",
  "line": 44,
  "comments": [
    {
      "value": "# Given I go to Yubl app on \"\u003cmobileDevice\u003e\"",
      "line": 43
    }
  ]
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 46
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 48
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 49
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 50
});
formatter.step({
  "name": "I tap on \"cameraTool\" with name",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "I tap on \"backCamera\" with name",
  "keyword": "And ",
  "line": 52
});
formatter.step({
  "name": "I capture the video with \"\u003cxCoordinate\u003e\" and \"\u003cyCoordinate\u003e\" for \"minimumVideoDuration\"",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "I tap on \"bigPlayButton\" with name for duration",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "I click on \"doneButtons\"",
  "keyword": "And ",
  "line": 55
});
formatter.step({
  "name": "I tap on \"nextButton\" with name",
  "keyword": "And ",
  "line": 56
});
formatter.step({
  "name": "I tap on \"shareWithEveryone\" with name",
  "keyword": "When ",
  "line": 57
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "And ",
  "line": 58
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 59
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 60
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 61
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\" and assert the values",
  "keyword": "And ",
  "line": 62
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 63
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "Then ",
  "line": 64
});
formatter.examples({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-backcamera;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 66,
  "rows": [
    {
      "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-backcamera;;1",
      "cells": [
        "mobileDevice",
        "xCoordinate",
        "yCoordinate"
      ],
      "line": 67
    },
    {
      "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-backcamera;;2",
      "cells": [
        "Bheema iPhone6 Test",
        "iPhone6xCoordinate",
        "iphone6yCoordinate"
      ],
      "line": 68
    }
  ]
});
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-video-from-front-live-backcamera;;2",
  "tags": [
    {
      "name": "@Smoke4PubliccomposerVideoLive",
      "line": 1
    },
    {
      "name": "@Smoke4PubliccomposerVideoLiveBackCamera",
      "line": 41
    }
  ],
  "description": "",
  "name": "Using Composer, upload video from Front Live BackCamera",
  "keyword": "Scenario Outline",
  "line": 68,
  "type": "scenario"
});
formatter.step({
  "name": "Check I am on \"homePage\" with \"yublHome\"",
  "keyword": "And ",
  "line": 44,
  "comments": [
    {
      "value": "# Given I go to Yubl app on \"\u003cmobileDevice\u003e\"",
      "line": 43
    }
  ]
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "When ",
  "line": 46
});
formatter.step({
  "name": "I get the value of \"profilebeforefeeds\"",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 48
});
formatter.step({
  "name": "I tap on \"Public\" with name",
  "keyword": "When ",
  "line": 49
});
formatter.step({
  "name": "I click on \"composer\"",
  "keyword": "And ",
  "line": 50
});
formatter.step({
  "name": "I tap on \"cameraTool\" with name",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "I tap on \"backCamera\" with name",
  "keyword": "And ",
  "line": 52
});
formatter.step({
  "name": "I capture the video with \"iPhone6xCoordinate\" and \"iphone6yCoordinate\" for \"minimumVideoDuration\"",
  "keyword": "And ",
  "line": 53,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "I tap on \"bigPlayButton\" with name for duration",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "I click on \"doneButtons\"",
  "keyword": "And ",
  "line": 55
});
formatter.step({
  "name": "I tap on \"nextButton\" with name",
  "keyword": "And ",
  "line": 56
});
formatter.step({
  "name": "I tap on \"shareWithEveryone\" with name",
  "keyword": "When ",
  "line": 57
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "And ",
  "line": 58
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 59
});
formatter.step({
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 60
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 61
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\" and assert the values",
  "keyword": "And ",
  "line": 62
});
formatter.step({
  "name": "I tap on \"profileBackButton\" with name",
  "keyword": "And ",
  "line": 63
});
formatter.step({
  "name": "Check I am on \"homePublicPage\" with \"yublPublic\"",
  "keyword": "Then ",
  "line": 64
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
  "duration": 638000,
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
  "duration": 593000,
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
  "duration": 587000,
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
  "duration": 573000,
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
  "duration": 622000,
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
  "duration": 593000,
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
  "duration": 604000,
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
  "duration": 575000,
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
  "duration": 472000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone6xCoordinate",
      "offset": 26
    },
    {
      "val": "iphone6yCoordinate",
      "offset": 51
    },
    {
      "val": "minimumVideoDuration",
      "offset": 76
    }
  ],
  "location": "composer_camera_step.I_capture_the_video(String,String,String)"
});
formatter.result({
  "duration": 519000,
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
  "duration": 10003778000,
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
  "duration": 941000,
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
  "duration": 829000,
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
  "duration": 619000,
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
  "duration": 780000,
  "status": "passed"
});
formatter.match({
  "location": "public_composer_step.I_swipe()"
});
formatter.result({
  "duration": 626000,
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
  "duration": 553000,
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
  "duration": 907000,
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
  "duration": 558000,
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
  "duration": 696000,
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
  "duration": 508000,
  "status": "passed"
});
});