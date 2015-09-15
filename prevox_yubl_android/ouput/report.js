$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A-login-android.feature");
formatter.feature({
  "id": "logging-in-to-the-application-and-sharing-your-information-to-stakeholders-in-android-device",
  "tags": [
    {
      "name": "@Smoke1Login",
      "line": 1
    }
  ],
  "description": "\nIn order to login\nAs a Android Mobile user\nI want to Login in to Yubl application \nSo that I can access the features of the composer, profile and conversation",
  "name": "Logging in to the application and Sharing your information to stakeholders in Android Device",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "logging-in-to-the-application-and-sharing-your-information-to-stakeholders-in-android-device;logining-application-with-username;;2",
  "tags": [
    {
      "name": "@Smoke1Login",
      "line": 1
    }
  ],
  "description": "",
  "name": "Logining application with userName",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "I go to Yubl app on \"Galaxy S5\"",
  "keyword": "Given ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I enter \"userName\" as \"userNameText1\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"passWord\" as \"passwordText1\"",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"nextButton\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I logged in \"Successfully\" with \"yublHomeText\"",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S5",
      "offset": 21
    }
  ],
  "location": "login_android_step.I_go_to_Yubl(String)"
});
formatter.result({
  "duration": 49159416000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "login_android_step.I_click_on(String)"
});
formatter.result({
  "duration": 5488424000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userName",
      "offset": 9
    },
    {
      "val": "userNameText1",
      "offset": 23
    }
  ],
  "location": "login_android_step.I_enter(String,String)"
});
formatter.result({
  "duration": 5274025000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passWord",
      "offset": 9
    },
    {
      "val": "passwordText1",
      "offset": 23
    }
  ],
  "location": "login_android_step.I_enter(String,String)"
});
formatter.result({
  "duration": 6588598000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nextButton",
      "offset": 12
    }
  ],
  "location": "login_android_step.I_click_on(String)"
});
formatter.result({
  "duration": 5845813000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully",
      "offset": 13
    },
    {
      "val": "yublHomeText",
      "offset": 33
    }
  ],
  "location": "login_android_step.I_logged(String,String)"
});
formatter.result({
  "duration": 216000,
  "status": "passed"
});
formatter.uri("E-composer-recents-newConversation.feature");
formatter.feature({
  "id": "conversation-\"upgrade\"-to-groups-via-recents-\"create-new-conversation\"---android",
  "tags": [
    {
      "name": "@Smoke4composerRecentNewConversation",
      "line": 1
    }
  ],
  "description": "\nIn order to compose the text in public\nAs a Mobile user\nI want to Login in to Yubl application \nSo that I can access the features of the composer, profile and conversation",
  "name": "Conversation \"Upgrade\" to Groups via Recents \"Create New Conversation\" - Android",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "conversation-\"upgrade\"-to-groups-via-recents-\"create-new-conversation\"---android;using-composer,-compose-some-text-on-text-tool-in-public;;2",
  "tags": [
    {
      "name": "@Smoke4composerRecentNewConversation",
      "line": 1
    }
  ],
  "description": "",
  "name": "Using Composer, compose some text on Text tool in Public",
  "keyword": "Scenario Outline",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "Check I am on \"homePageYubl\" with \"yublHomeText\"",
  "keyword": "And ",
  "line": 15,
  "comments": [
    {
      "value": "#Given I go to Yubl app on \"\u003cmobileDevice\u003e\"",
      "line": 14
    }
  ]
});
formatter.step({
  "name": "I click on \"createNewConversation\" with xpath",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "Select \"firstThreePersons\" from \"friendsList\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click on \"createChat\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I click on \"textTool\" with xpath",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I enter \"textToolView\" as \"composingText\" with xpath",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I click on \"composerDoneButton\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I click on \"composerSendButton\"",
  "keyword": "And ",
  "line": 22
});
formatter.match({
  "arguments": [
    {
      "val": "homePageYubl",
      "offset": 15
    },
    {
      "val": "yublHomeText",
      "offset": 35
    }
  ],
  "location": "composer_android_step.Check_I_am(String,String)"
});
formatter.result({
  "duration": 398767000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createNewConversation",
      "offset": 12
    }
  ],
  "location": "composer_android_step.I_click_on_xpath(String)"
});
formatter.result({
  "duration": 449341000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstThreePersons",
      "offset": 8
    },
    {
      "val": "friendsList",
      "offset": 33
    }
  ],
  "location": "composer_android_step.Select_the_conversation(String,String)"
});
formatter.result({
  "duration": 3590447000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createChat",
      "offset": 12
    }
  ],
  "location": "login_android_step.I_click_on(String)"
});
formatter.result({
  "duration": 6015221000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "textTool",
      "offset": 12
    }
  ],
  "location": "composer_android_step.I_click_on_xpath(String)"
});
formatter.result({
  "duration": 319840000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "textToolView",
      "offset": 9
    },
    {
      "val": "composingText",
      "offset": 27
    }
  ],
  "location": "login_android_step.I_enter_xpath(String,String)"
});
formatter.result({
  "duration": 7785452000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "composerDoneButton",
      "offset": 12
    }
  ],
  "location": "login_android_step.I_click_on(String)"
});
formatter.result({
  "duration": 5852450000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "composerSendButton",
      "offset": 12
    }
  ],
  "location": "login_android_step.I_click_on(String)"
});
formatter.result({
  "duration": 6572831000,
  "status": "passed"
});
formatter.uri("E1-composer-newConversation-search.feature");
formatter.feature({
  "id": "conversation-\"upgrade\"-to-groups-via-recents-\"create-new-conversation\"---android",
  "tags": [
    {
      "name": "@Smoke4IcomposerNewConversationSearch",
      "line": 1
    }
  ],
  "description": "\nIn order to compose by selecting the usernames from search\nAs a Mobile user\nI want to Login in to Yubl application \nSo that I can access the features of the composer, profile and conversation",
  "name": "Conversation \"Upgrade\" to Groups via Recents \"Create New Conversation\" - Android",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "conversation-\"upgrade\"-to-groups-via-recents-\"create-new-conversation\"---android;using-create-newconceration-select,-usernames-from-search-and-send-the-yubl-to-them;;2",
  "tags": [
    {
      "name": "@Smoke4IcomposerNewConversationSearch",
      "line": 1
    }
  ],
  "description": "",
  "name": "Using create Newconceration select, usernames from Search and Send the Yubl to them",
  "keyword": "Scenario Outline",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "Check I am on \"homePageYubl\" with \"yublHomeText\"",
  "keyword": "And ",
  "line": 15,
  "comments": [
    {
      "value": "#Given I go to Yubl app on \"\u003cmobileDevice\u003e\"",
      "line": 14
    }
  ]
});
formatter.step({
  "name": "I click on \"createNewConversation\" with xpath",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "I enter \"firstUsertwoCharacters\" as \"userText1\" with xpath",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I check for \"exactUsername1\" and clickonExactUserName",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I enter \"secondUserTwoCharacters\" as \"userText2\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I check for \"exactUsername2\" and clickonExactUserName",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I click on backButton using keyCode",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I click on \"createChat\"",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "I click on \"textTool\" with xpath",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "I enter \"textToolView\" as \"composingSearchText\" with xpath",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "I click on \"composerDoneButton\"",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I click on \"composerSendButton\"",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I click on \"recentYubl\" with xpath",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "I click on backButton using keyCode",
  "keyword": "And ",
  "line": 29,
  "comments": [
    {
      "value": "#And I Check for \"YublRecentNewConversation\" with \"yublRecentNewConversationSearchText\"",
      "line": 28
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "homePageYubl",
      "offset": 15
    },
    {
      "val": "yublHomeText",
      "offset": 35
    }
  ],
  "location": "composer_android_step.Check_I_am(String,String)"
});
formatter.result({
  "duration": 321168000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createNewConversation",
      "offset": 12
    }
  ],
  "location": "composer_android_step.I_click_on_xpath(String)"
});
formatter.result({
  "duration": 495452000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstUsertwoCharacters",
      "offset": 9
    },
    {
      "val": "userText1",
      "offset": 37
    }
  ],
  "location": "login_android_step.I_enter_xpath(String,String)"
});
formatter.result({
  "duration": 7170080000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactUsername1",
      "offset": 13
    }
  ],
  "location": "composer_android_step.check_for_exactUserName(String)"
});
formatter.result({
  "duration": 2774976000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secondUserTwoCharacters",
      "offset": 9
    },
    {
      "val": "userText2",
      "offset": 38
    }
  ],
  "location": "login_android_step.I_enter(String,String)"
});
formatter.result({
  "duration": 8041812000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exactUsername2",
      "offset": 13
    }
  ],
  "location": "composer_android_step.check_for_exactUserName(String)"
});
formatter.result({
  "duration": 3070492000,
  "status": "passed"
});
formatter.match({
  "location": "composer_android_step.I_click_keyCode()"
});
formatter.result({
  "duration": 699284000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createChat",
      "offset": 12
    }
  ],
  "location": "login_android_step.I_click_on(String)"
});
formatter.result({
  "duration": 5691156000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "textTool",
      "offset": 12
    }
  ],
  "location": "composer_android_step.I_click_on_xpath(String)"
});
formatter.result({
  "duration": 346532000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "textToolView",
      "offset": 9
    },
    {
      "val": "composingSearchText",
      "offset": 27
    }
  ],
  "location": "login_android_step.I_enter_xpath(String,String)"
});
formatter.result({
  "duration": 7496395000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "composerDoneButton",
      "offset": 12
    }
  ],
  "location": "login_android_step.I_click_on(String)"
});
formatter.result({
  "duration": 5932139000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "composerSendButton",
      "offset": 12
    }
  ],
  "location": "login_android_step.I_click_on(String)"
});
formatter.result({
  "duration": 6154399000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "recentYubl",
      "offset": 12
    }
  ],
  "location": "composer_android_step.I_click_on_xpath(String)"
});
formatter.result({
  "duration": 524603000,
  "status": "passed"
});
formatter.match({
  "location": "composer_android_step.I_click_keyCode()"
});
formatter.result({
  "duration": 1099920000,
  "status": "passed"
});
});