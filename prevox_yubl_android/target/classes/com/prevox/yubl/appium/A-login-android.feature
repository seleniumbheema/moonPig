@Smoke1Login
Feature: Logging in to the application and Sharing your information to stakeholders in Android Device
  
  In order to login
  As a Android Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Logining application with userName
    Given I go to Yubl app on "<mobileDevice>"
    And I click on "loginButton"
    And I enter "userName" as "<userNameText>"
    And I enter "passWord" as "<passwordText>"
    And I click on "nextButton"
    Then I logged in "Successfully" with "yublHomeText"

    Examples: 
      | mobileDevice | userNameText  | passwordText  |
      | Galaxy S5    | userNameText1 | passwordText1 |
