@Smoke1Login
Feature: Logging in to the application and Sharing your information to stakeholders
  
  In order to login
  As a Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Logining application
    Given I go to Yubl app on "<mobileDevice>"
    And I tap on "loginButton" with name
    And I enter "userName" as "<usernameText>"
    And I enter "passWord" as "<passwordText>"
    # And I click with "xNextcoordinate" and "yNextcoordinate"
    And I tap on "nextButton" with name
    Then I logged in "Successfully" to "yublPublic"

    #And Click on "loginButton"
    #Then I logged in "Successfully"
    Examples: 
      | mobileDevice | usernameText  | passwordText  |
      | iPhone 6     | usernameText1 | passwordText1 |
