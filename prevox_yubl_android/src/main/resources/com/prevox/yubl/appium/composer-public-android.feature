@Smoke3composerPublic
Feature: Composing the text and sharing the message to your friends and followers in android device
  
  In order to compose the text in public
  As a Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Using Composer, compose some text on Text tool in Public
    Given I go to Yubl app on "<mobileDevice>"
    #Given Check whether app is "installed"
    #And I check whether app is installed with "bundleID"
    #And Check I am on "homePageYubl" with "yublHomeText"
    And I click on "Public" with xpath
    And I click on "composer"
    And I click on "textTool" with xpath
    And I enter "textToolView" as "composingText" with xpath
    And I click on "composerDoneButton"
    And I click on "composerSendButton"

    Examples: 
      | mobileDevice |
      | Galaxy S5    |
