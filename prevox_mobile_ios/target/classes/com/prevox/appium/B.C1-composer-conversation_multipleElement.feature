@SmokecomposerConversationMutipleElements
Feature: Composing in conversation, Using text Tool using Mutliple element
  
  In order to composing in conversation with textTool, buttonTool
  As a Mobile user
  As a Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Using Composer, compose some text on Text tool and Sticker in miniComposer with Mutiple Elementes
    Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePage" with "yublHome"
    And I take a "homeSourceScreenShot"
    And I compare "homeOutputScreenShot" with "homeSourceScreenShot"
    And I click on "firstPersonhompage"
    And I click on "textToolComposer"
    And I enter "miniComposing" as "miniComposingText"
    And I check "xMiniCoordinate" and "yMiniCoordinate" of miniComposer
    And I click on "stickerTool"
    And I click on "sticker"
    And I click on "doneButton"
    Then I check "xComposerCoordinate" with "xMiniCoordinate" and "yComposerCoordinate" with "yMiniCoordinate" of Composer
    And I click on "sendButton"
    Then I check "actualComposedText" with "miniComposingText" on receiverPage

    Examples: 
      | mobileDevice |
      | iPhone 6     |

  Scenario: Using Composing in conversation- with Texttool and buttonTool textBasic
    Given I click on "textToolComposer"
    And I enter "miniComposing" as "miniComposingText"
    And I check "xMiniCoordinate" and "yMiniCoordinate" of miniComposer
    When I click on "buttonTool"
    And I click on "textbasicButton"
    And I enter "textBasic" as "textbasicText"
    And I click on "doneButton"
    Then I check "xComposerCoordinate" with "xMiniCoordinate" and "yComposerCoordinate" with "yMiniCoordinate" of Composer
    And I click on "sendButton"
    Then I check "actualComposedText" with "miniComposingText" on receiverPage for miniComposer and textBasic
	Then I check "actualtextbasicText" with "textbasicText" on receiverPage for textBasic
	
  Scenario: Using Composing in conversation- with Sticker and Sticker
    Given I click on "stickerTool"
    And I click on "sticker1"
    And I check "xMiniCoordinate" and "yMiniCoordinate" of miniComposer
    And I click on "sticker2"
    And I click on "doneButtons"
    Then I check "xComposerCoordinate" with "xMiniCoordinate" and "yComposerCoordinate" with "yMiniCoordinate" of Composer
    Then I click on "sendButton"

  Scenario: Using Composing in conversation- with Sticker and button Vote
    Given I click on "stickerTool"
    And I click on "sticker1"
    And I check "xMiniCoordinate" and "yMiniCoordinate" of miniComposer
    When I click on "buttonTool"
    And I click on "voteButton"
    And I click on "doneButtons"
    Then I check "xComposerCoordinate" with "xMiniCoordinate" and "yComposerCoordinate" with "yMiniCoordinate" of Composer
    And I click on "sendVote"

  Scenario: Using Composing in conversation - with Button and Button
    Given I click on "buttonTool"
    And I click on "voteButton"
    And I check "xMiniCoordinate" and "yMiniCoordinate" of miniComposer
    And I click on "textbasicButton"
    And I enter "textBasic" as "textbasicText"
    And I click on "doneButtons"
    Then I check "xComposerCoordinate" with "xMiniCoordinate" and "yComposerCoordinate" with "yMiniCoordinate" of Composer
    And I click on "sendButton"
    Then I check "actualtextbasicText" with "textbasicText" on receiverPage for textBasic
