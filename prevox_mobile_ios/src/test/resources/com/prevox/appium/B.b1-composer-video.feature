@Smoke3composerVideoLive
Feature: Composing the text and sharing the message to your friends and followers
  
  In order to entering a Camera, taking a photo, upload picture from Gallery
  As a Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Using Composer, upload picture from Gallery and send to first person in your conversation
    Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePage" with "yublHome"
    And I click on "composer"
    And I click on "cameraTool"
    And I capture the video with "<xCoordinate>" and "<yCoordinate>" for "minimumVideoDuration"
    And I click on "playButton" for duration
    And I click on "cameraDone"
    And I click on "nextPhotoButton"
    When I click on "firstPersonConversation" of conversation
    And I click on "sendToChat"
    And Check I am on "homePage" with "yublHome"
    And I click on "firstPersonhompage"
    And I click on "backButton"
    Then Check I am on "homePage" with "yublHome"

    Examples: 
      | mobileDevice        | xCoordinate        | yCoordinate        |
      | Bheema iPhone6 Test | iPhone6xCoordinate | iphone6yCoordinate |
