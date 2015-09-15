$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/prevox/yubl/appium/login-android.feature");
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
  "id": "logging-in-to-the-application-and-sharing-your-information-to-stakeholders-in-android-device;logining-application;;2",
  "tags": [
    {
      "name": "@Smoke1Login",
      "line": 1
    }
  ],
  "description": "",
  "name": "Logining application",
  "keyword": "Scenario Outline",
  "line": 25,
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
  "name": "I enter \"userName\" as \"usernameText1\"",
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
  "duration": 31508477000,
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
  "duration": 1646614000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userName",
      "offset": 9
    },
    {
      "val": "usernameText1",
      "offset": 23
    }
  ],
  "location": "login_android_step.I_enter(String,String)"
});
formatter.result({
  "duration": 6507604000,
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
  "duration": 5841275000,
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
  "duration": 695535000,
  "status": "passed"
});
});