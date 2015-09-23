@SmokePubliccomposerCamereLive
Feature: Composing the text and sharing the message to Public
  
  In order to compose the text
  As a Mobile user
  I want to Login in to Yubl application, and tap on Public
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Send feeds to Public using composer- Camera - Live
    Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePage" with "yublHome"
    And I click on "Menu"
    When I tap on "Profile" with name
    And I get the value of "profilebeforefeeds"
    And I tap on "profileBackButton" with name
    When I tap on "Public" with name
    And I click on "composer"
    When I tap on "cameraTool" with name
    And I capture the picture with "<xCoordinate>" and "<yCoordinate>"
    And I tap on "reTake" with name
    And I capture the picture with "<xCoordinate>" and "<yCoordinate>"
    And I click on "doneButtons"
    And I tap on "nextButton" with name]
    When I tap on "shareWithEveryone" with name
    And Check I am on "homePublicPage" with "yublPublic"
    And I swipe on recentConversation
    When I click on "Menu"
    And I tap on "Profile" with name
    And I get the value of "profileAfterfeeds"
    And I tap on "profileBackButton" with name
    Then Check I am on "homePublicPage" with "yublPublic"

    #And I check yublPublicConversation with "stickerText" on publicfeeds
    Examples: 
      | mobileDevice        | xCoordinate        | yCoordinate        |
      | Bheema iPhone6 Test | iPhone6xCoordinate | iphone6yCoordinate |
      
      
    @SmokePubliccomposerCamereLiveBackCamera  
    Scenario Outline: Send feeds to Public using composer- Camera - Live Back Camera
      
    Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePage" with "yublHome"
    And I click on "Menu"
    When I tap on "Profile" with name
    And I get the value of "profilebeforefeeds"
    And I tap on "profileBackButton" with name
    When I tap on "Public" with name
    And I click on "composer"
    When I tap on "cameraTool" with name
    And I tap on "backCamera" with name
    And I capture the picture with "<xCoordinate>" and "<yCoordinate>"
    And I tap on "reTake" with name
    And I capture the picture with "<xCoordinate>" and "<yCoordinate>"
    And I click on "doneButtons"
    And I tap on "nextButton" with name
    When I tap on "shareWithEveryone" with name
    And Check I am on "homePublicPage" with "yublPublic"
    And I swipe on recentConversation
    When I click on "Menu"
    And I tap on "Profile" with name
    And I get the value of "profileAfterfeeds"
    And I tap on "profileBackButton" with name
    Then Check I am on "homePublicPage" with "yublPublic"

    Examples: 
      | mobileDevice        | xCoordinate        | yCoordinate        |
      | Bheema iPhone6 Test | iPhone6xCoordinate | iphone6yCoordinate |
