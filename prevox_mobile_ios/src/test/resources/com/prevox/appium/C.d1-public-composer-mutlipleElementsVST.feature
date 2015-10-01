@Smoke4PublicMutipleElementVST
Feature: Composing the text and sharing the message to your friends and followers Using Multiple Elements
  
  In order to test Three Elements Composing Text, Sticker, Video
  As a Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation
  
  VideoTool = V
  TextTool  = T
  StickerTool = S

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Background: 

  Scenario Outline: Using Composer, TextTool, Sticker, Video
    Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePage" with "yublPrivate"
    And I click on "Menu"
    When I tap on "Profile" with name
    And I get the value of "profilebeforefeeds"
    And I tap on "profileBackButton" with name
    When I tap on "Public" with name
    And I click on "composer"

    Examples: 
      | mobileDevice |
      | iPhone 6     |

  Scenario: VideoTool
    ### Text Tool ###
    When I tap on "cameraTool" with name
    And I tap on "gallery" with name for duration
    When I tap on "Videos" from Table
    And I Select a "video" from videoGallery
    And I tap on "playButton" with name for duration
    And I tap on "Choose" with name for duration
    And I tap on "bigPlayButton" with name for duration
    And I tap on "confirmButton" with name for duration
    And I tap on "doneButton" with name

  ### Sticker Tool ###
  Scenario: StickerTool
   When I click on "stickerTool"
    And I click on "sticker"
    And I tap on "doneButton" with name

  Scenario: TextTool
    ### Text Tool ###
    When I click on "TextToolElement"
    And I enter "textTool" as "composingPublicText"
    And I tap on "doneButton" with name

  Scenario: ShareWithEveryone
    And I tap on "nextButton" with name
    When I tap on "shareWithEveryone" with name
    And Check I am on "homePublicPage" with "yublPublic"
    And I swipe on recentConversation
    When I click on "Menu"
    And I tap on "Profile" with name
    And I swipe on recentConversation
    And I get the value of "profileAfterfeeds" and assert the values
    And I tap on "profileBackButton" with name
    Then Check I am on "homePublicPage" with "yublPublic"
