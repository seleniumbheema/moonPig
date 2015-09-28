$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C.c-public-composer-video_gallery.feature");
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
formatter.scenario({
  "id": "composing-the-text-and-sharing-the-message-to-your-friends-and-followers;using-composer,-upload-picture-from-gallery-and-send-to-first-person-in-your-conversation;;2",
  "tags": [
    {
      "name": "@Smoke4PubliccomposerVideoGallery",
      "line": 1
    }
  ],
  "description": "",
  "name": "Using Composer, upload picture from Gallery and send to first person in your conversation",
  "keyword": "Scenario Outline",
  "line": 45,
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
  "name": "I tap on \"confirmButton\" with name for duration",
  "keyword": "And ",
  "line": 29,
  "comments": [
    {
      "value": "#And I tap on \"bigPlayButton\" with name for duration",
      "line": 28
    }
  ]
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
  "name": "I click on \"Menu\"",
  "keyword": "When ",
  "line": 34
});
formatter.step({
  "name": "I tap on \"Profile\" with name",
  "keyword": "And ",
  "line": 35
});
formatter.step({
  "name": "I swipe on recentConversation",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "I get the value of \"profileAfterfeeds\"",
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
      "val": "iPhone 6",
      "offset": 21
    }
  ],
  "location": "login_Step.I_go_to_Yubl(String)"
});
formatter.result({
  "duration": 26915825000,
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
  "duration": 482337000,
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
  "duration": 595547000,
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
  "duration": 973261000,
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
  "duration": 3038262000,
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
  "duration": 407659000,
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
  "duration": 739210000,
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
  "duration": 1754934000,
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
  "duration": 840521000,
  "status": "passed"
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
  "duration": 516440000,
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
  "duration": 2056778000,
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
  "duration": 1021581000,
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
  "duration": 11022984000,
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
  "duration": 10459878000,
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
  "duration": 10908548000,
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
  "duration": 693753000,
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
  "duration": 720269000,
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
  "duration": 772570000,
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
  "duration": 1142158000,
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
  "duration": 1404271000,
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
  "duration": 989635000,
  "status": "passed"
});
formatter.match({
  "location": "public_composer_step.I_swipe()"
});
formatter.result({
  "duration": 452464000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profileAfterfeeds",
      "offset": 20
    }
  ],
  "location": "public_composer_step.I_get_the_value_of(String)"
});
formatter.result({
  "duration": 1428842000,
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
  "duration": 434142000,
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
  "duration": 1554163000,
  "status": "passed"
});
});