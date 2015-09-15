$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("B.d-composer-createNewConversation.feature");
formatter.feature({
  "id": "composing-in-conversation,-using-text-tool-using-single-element",
  "tags": [
    {
      "name": "@SmokeCreateNewConversation",
      "line": 1
    }
  ],
  "description": "\nIn order to composing in conversation in textTool\nAs a Mobile user\nI want to Login in to Yubl application \nSo that I can access the features of the composer, profile and conversation",
  "name": "Composing in conversation, Using text Tool using single element",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "composing-in-conversation,-using-text-tool-using-single-element;using-composer,-compose-some-text-on-text-tool-in-minicomposer;;2",
  "tags": [
    {
      "name": "@SmokeCreateNewConversation",
      "line": 1
    }
  ],
  "description": "",
  "name": "Using Composer, compose some text on Text tool in miniComposer",
  "keyword": "Scenario Outline",
  "line": 20,
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
  "name": "I click on \"createNewConversation\"",
  "keyword": "And ",
  "line": 16
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
  "duration": 30821928000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027Anils-MacBook-Pro.local\u0027, ip: \u0027169.254.141.25\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: driver.version: IOSDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:593)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:240)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:126)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:153)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\n\tat io.appium.java_client.ios.IOSDriver.\u003cinit\u003e(IOSDriver.java:23)\n\tat com.prevox.appium.util.webConnector.openApplication(webConnector.java:96)\n\tat com.prevox.appium.login_Step.I_go_to_Yubl(login_Step.java:43)\n\tat ✽.Given I go to Yubl app on \"iPhone 6\"(B.d-composer-createNewConversation.feature:14)\nCaused by: org.apache.http.NoHttpResponseException: 127.0.0.1:4723 failed to respond\n\tat org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:143)\n\tat org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:57)\n\tat org.apache.http.impl.io.AbstractMessageParser.parse(AbstractMessageParser.java:260)\n\tat org.apache.http.impl.DefaultBHttpClientConnection.receiveResponseHeader(DefaultBHttpClientConnection.java:161)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:606)\n\tat org.apache.http.impl.conn.CPoolProxy.invoke(CPoolProxy.java:138)\n\tat com.sun.proxy.$Proxy14.receiveResponseHeader(Unknown Source)\n\tat org.apache.http.protocol.HttpRequestExecutor.doReceiveResponse(HttpRequestExecutor.java:271)\n\tat org.apache.http.protocol.HttpRequestExecutor.execute(HttpRequestExecutor.java:123)\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:254)\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:195)\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:86)\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:108)\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:186)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:233)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:572)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:240)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:126)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:153)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\n\tat io.appium.java_client.ios.IOSDriver.\u003cinit\u003e(IOSDriver.java:23)\n\tat com.prevox.appium.util.webConnector.openApplication(webConnector.java:96)\n\tat com.prevox.appium.login_Step.I_go_to_Yubl(login_Step.java:43)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:606)\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:297)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n"
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
      "val": "createNewConversation",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "composing-in-conversation,-using-text-tool-using-single-element;select-three-random-users;;2",
  "tags": [
    {
      "name": "@SmokeCreateNewConversation",
      "line": 1
    }
  ],
  "description": "",
  "name": "Select Three random Users",
  "keyword": "Scenario Outline",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "I Select \"firstUserName\" from friendsList with UIAutomator",
  "keyword": "When ",
  "line": 23,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "firstUserName",
      "offset": 10
    }
  ],
  "location": "composer_createNewConversation_step.Check_whether_app_installed_or_not(String)"
});
formatter.result({
  "duration": 10003597000,
  "status": "passed"
});
formatter.scenario({
  "id": "composing-in-conversation,-using-text-tool-using-single-element;select-three-random-users;;3",
  "tags": [
    {
      "name": "@SmokeCreateNewConversation",
      "line": 1
    }
  ],
  "description": "",
  "name": "Select Three random Users",
  "keyword": "Scenario Outline",
  "line": 28,
  "type": "scenario"
});
formatter.step({
  "name": "I Select \"secondUserName\" from friendsList with UIAutomator",
  "keyword": "When ",
  "line": 23,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "secondUserName",
      "offset": 10
    }
  ],
  "location": "composer_createNewConversation_step.Check_whether_app_installed_or_not(String)"
});
formatter.result({
  "duration": 10004005000,
  "status": "passed"
});
formatter.scenario({
  "id": "composing-in-conversation,-using-text-tool-using-single-element;select-three-random-users;;4",
  "tags": [
    {
      "name": "@SmokeCreateNewConversation",
      "line": 1
    }
  ],
  "description": "",
  "name": "Select Three random Users",
  "keyword": "Scenario Outline",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I Select \"thirdUserName\" from friendsList with UIAutomator",
  "keyword": "When ",
  "line": 23,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "thirdUserName",
      "offset": 10
    }
  ],
  "location": "composer_createNewConversation_step.Check_whether_app_installed_or_not(String)"
});
formatter.result({
  "duration": 10005621000,
  "status": "passed"
});
formatter.scenario({
  "id": "composing-in-conversation,-using-text-tool-using-single-element;creating-and-delivering-yubl",
  "description": "",
  "name": "Creating and Delivering Yubl",
  "keyword": "Scenario",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "I click on \"createChat\" with UIAutomator",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "I click on \"textToolComposer\"",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "I enter \"miniComposing\" as \"CreateNewConversationText\"",
  "keyword": "And ",
  "line": 34
});
formatter.step({
  "name": "I click on \"sendComposed\"",
  "keyword": "And ",
  "line": 35
});
formatter.step({
  "name": "I check \"actualNewlyComposedText\" with \"CreateNewConversationText\"",
  "keyword": "Then ",
  "line": 36
});
formatter.step({
  "name": "I click on \"backButton\"",
  "keyword": "And ",
  "line": 37
});
formatter.match({
  "arguments": [
    {
      "val": "createChat",
      "offset": 12
    }
  ],
  "location": "composer_step.I_click_on_automator(String)"
});
formatter.result({
  "duration": 1216000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "textToolComposer",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 4723000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "miniComposing",
      "offset": 9
    },
    {
      "val": "CreateNewConversationText",
      "offset": 28
    }
  ],
  "location": "login_Step.I_enter(String,String)"
});
formatter.result({
  "duration": 1005693000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sendComposed",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 1213000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "actualNewlyComposedText",
      "offset": 9
    },
    {
      "val": "CreateNewConversationText",
      "offset": 40
    }
  ],
  "location": "composer_step.assert_Equals_Text(String,String)"
});
formatter.result({
  "duration": 1023000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "backButton",
      "offset": 12
    }
  ],
  "location": "login_Step.I_click_on(String)"
});
formatter.result({
  "duration": 957000,
  "status": "passed"
});
});tion": 837000,
  "status": "passed"
});
});