@SmokePubliccomposerCamereGallery
Feature: Composing the text and sharing the message to Public
  
  In order to compose the text
  As a Mobile user
  I want to Login in to Yubl application, and tap on Public
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Send feeds to Public using composer- camera gallery
    Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePage" with "yublPrivate"
    And I click on "Menu"
    When I tap on "Profile" with name
    And I get the value of "profilebeforefeeds"
    And I tap on "profileBackButton" with name
    When I tap on "Public" with name
    And I click on "composer"
    When I tap on "cameraTool" with name
    #### Deal with UIAAlert ####
    And I tap on "gallery" with name
    #### Deal with UIAAlert ####
    And I tap on "cameraRoll" with name
    And I Select a "photo" from photoGallery
    And I tap on "confirm" with name
    And I tap on "nextButton" with name
    When I tap on "shareWithEveryone" with name
    And Check I am on "homePublicPage" with "yublPublic"
    When I click on "Menu"
    And I tap on "Profile" with name
    And I swipe on recentConversation
    And I get the value of "profileAfterfeeds" and assert the values
    And I tap on "profileBackButton" with name
    Then Check I am on "homePublicPage" with "yublPublic"

    Examples: 
      | mobileDevice |
      | iPhone 6     |
