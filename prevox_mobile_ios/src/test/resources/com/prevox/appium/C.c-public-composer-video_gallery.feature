@Smoke4PubliccomposerVideoGallery
Feature: Composing the text and sharing the message to your friends and followers
  
  In order to entering a Camera, taking a photo, upload picture from Gallery
  As a Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Using Composer, upload video from Gallery and Share with everyone
    Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePage" with "yublPrivate"
    And I click on "Menu"
    When I tap on "Profile" with name
    And I get the value of "profilebeforefeeds"
    And I tap on "profileBackButton" with name
    When I tap on "Public" with name
    And I click on "composer"
    When I tap on "cameraTool" with name
    And I tap on "gallery" with name for duration
    When I tap on "Videos" from Table
    And I Select a "video" from videoGallery
    And I tap on "playButton" with name for duration
    And I tap on "Choose" with name for duration
    And I tap on "bigPlayButton" with name for duration
    And I tap on "confirmButton" with name for duration
    And I click on "doneButtons"
    And I tap on "nextButton" with name
    When I tap on "shareWithEveryone" with name
    And Check I am on "homePublicPage" with "yublPublic"
    And I swipe on recentConversation
    When I click on "Menu"
    And I tap on "Profile" with name
    And I get the value of "profileAfterfeeds" and assert the values
    And I tap on "profileBackButton" with name
    Then Check I am on "homePublicPage" with "yublPublic"

    Examples: 
      | mobileDevice | xCoordinate        | yCoordinate        |
      | iPhone 6     | iPhone6xCoordinate | iphone6yCoordinate |