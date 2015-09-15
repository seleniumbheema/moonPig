@Smoke1Registration
Feature: Registration of the Page
  
  In order to login
  As a Android Mobile user
  I want to register as new user in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  Scenario Outline: RegistrationAndroid
    Given I go to Yubl app on "<mobileDevice>"
   # And I Check for "landingPage" with "createAccountText"
    And I click on "createAccount"
    And I enter "firstName" as "firstNameText"
    And I enter "lastName" as "lastNameText"
    And I enter "DOB" as "DOBText"
    And I enter "userName" as "<userNameText>"
    And I enter "passWord" as "<passWordText>"
    And I click on "nextButton"
    When I enter "phoneNumber" as "phoneNumberText"
    And I click on "phoneNextButton"

    Examples: 
      | mobileDevice | userNameText | passWordText |
      | Galaxy S5    | testerUser1  | testerPass1  |

    
    
    #DatePicker????
    Scenario: 
   	Given I Check for "landingPage" with "createAccountText"
   	And I click on "createAccount"
	When I enter "firstName" as "firstNameText"
	Then I should see "tick"
	