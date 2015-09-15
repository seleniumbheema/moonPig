@SmokecomposerConversationTextTool
Feature: Composing in conversation, Using text Tool using single element
  
  In order to composing in conversation in textTool
  As a Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Using Composer, compose some text on Text tool in miniComposer
    Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePage" with "yublHome"
    And I take a "homeSourceScreenShot"
    And I compare "homeOutputScreenShot" with "homeSourceScreenShot"
    And I click on "firstPersonhompage"
    And I click on "textToolComposer"
    And I enter "miniComposing" as "miniComposingText"
    And I click on "sendComposed"
    Then I check "actualComposedText" with "miniComposingText" on receiverPage

    Examples: 
      | mobileDevice |
      | iPhone 6     |

  Scenario: Using composing in converstion-stickers
    Given I click on "stickerTool"
    And I click on "sticker"
    And I click on "sendSticker"

  Scenario Outline: Using Composing in conversation-buttonTool
    Given I click on "buttonTool"
    And I click on "<Buttons>"
    And I click on "doneButton"
    And I click on "sendVote"

    Examples: 
      | Buttons        |
      | voteButton     |
      | callButtonCall |

  Scenario: Using Composing in conversation-buttonTool- textBasic
    Given I click on "buttonTool"
    And I click on "textbasicButton"
    And I enter "textbasic" as "textbasicText" for conversation
    And I click on "doneButton"
    And I click on "sendVote"

  Scenario: Using Composing in conversation-buttonTool- textLinked
    Given I click on "buttonTool"
    And I click on "textLinkedButton"
    And I enter "textLinked" as "textLinkedText"
    And I enter "textLinked1" as "textLinkedText1"
    And I click on "doneButtonTextLinked"
    And I click on "sendVote"
    Then I check "actualtextLinked" with "textLinkedText" on receiverPage for element

  Scenario Outline: Using Composing in conversation- button Tool- SimpleLocations
    Given I click on "buttonTool"
    And I click on "simpleLocationButton"
    And I enter "searchLocation" as "<locationText>"
    And I click on "searchBarResult"
    When I check the "actualLocation" with "<locationText>"
    And I click on "simpleLocationDone"
    And I click on "doneButton"
    When I click on "sendLocation"
    And I click on "sentLocation" on receiverPage
    Then I check "actualLocatinText" with "<locationText>" on receiverPage
    And I click on "closeButton"

    Examples: 
      | locationText   |
      | LondonText     |
      | ManchesterText |

  Scenario Outline: Using Composing in conversation - button Tool - Im here
    Given I click on "buttonTool"
    And I click on "ImhereLocationButton"
    And I click on "locationHere"
    #  When I check the "actualImhereLocation" with "<locationText>"
    And I click on "LocationcancelButton"
    And I click on "doneButton"
    When I click on "sendLocation"

    Examples: 
      | locationText        |
      | IMhereLabelLocation |
