@SmokeCreateNewConversation
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
    And I click on "createNewConversation"

    Examples: 
      | mobileDevice |
      | iPhone 6     |

  Scenario Outline: Select Three random Users
    When I Select "<randomThreeUsers>" from friendsList with UIAutomator

    Examples: 
      | randomThreeUsers |
      | firstUserName    |
      | secondUserName   |
      | thirdUserName    |

  Scenario: Creating and Delivering Yubl
    And I click on "createChat" with UIAutomator
    And I click on "textToolComposer"
    And I enter "miniComposing" as "CreateNewConversationText"
    And I click on "sendComposed"
    Then I check "actualNewlyComposedText" with "CreateNewConversationText"
    And I click on "backButton" 
