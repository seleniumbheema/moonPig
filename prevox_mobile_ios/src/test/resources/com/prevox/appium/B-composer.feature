@Smoke2composer
Feature: Composing the text and sharing the message to your friends and followers
  
  In order to compose the text
  As a Mobile user
  I want to Login in to Yubl application, and tap on Public
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Using Composer, compose some text on Text tool
    Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePage" with "yublPrivate"
    And I click on "composer"
    And I enter "textTool" as "composingText"
    And I click on "Done"
    And I click on "nextButton"
    And I click on "firstPersonConversation" of conversation
    And I click on "sendToChat"
    And Check I am on "homePage" with "yublHome"
    And I click on "firstPersonhompage"
    And I check "yublConversationText" with "composingText" on receiverPage
    And I click on "backButton"
    Then I close the application

    Examples: 
      | mobileDevice |
      | iPhone 6     |
