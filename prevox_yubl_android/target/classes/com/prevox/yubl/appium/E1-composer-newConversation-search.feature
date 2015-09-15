@Smoke4IcomposerNewConversationSearch
Feature: Conversation "Upgrade" to Groups via Recents "Create New Conversation" - Android
  
  In order to compose by selecting the usernames from search
  As a Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Using create Newconceration select, usernames from Search and Send the Yubl to them
    #Given I go to Yubl app on "<mobileDevice>"
    And Check I am on "homePageYubl" with "yublHomeText"
    When I click on "createNewConversation" with xpath
    And I enter "firstUsertwoCharacters" as "userText1" with xpath
    And I check for "exactUsername1" and clickonExactUserName
    And I enter "secondUserTwoCharacters" as "userText2"
    And I check for "exactUsername2" and clickonExactUserName
    And I click on backButton using keyCode
    And I click on "createChat"
    And I click on "textTool" with xpath
    And I enter "textToolView" as "composingSearchText" with xpath
    And I click on "composerDoneButton"
    And I click on "composerSendButton"
    When I click on "recentYubl" with xpath
	And I Check for "YublRecentNewConversation" with "yublRecentNewConversationSearchText"
	And I click on backButton using keyCode

    Examples: 
      | mobileDevice |
      | Galaxy S5    |
