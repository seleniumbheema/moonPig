@Smoke1Landing
Feature: Open Moonpig URL in Mozilla Browser and Search for Greeting Cards
  
  In order to access MoonPig GreetingCards
  As a user of the app
  I want to search for the greetingCards

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Landing page of MoonPig
    Given I go to "moonpigURL" on "<Browser>"
    And I verify the moonPigtitle with "expectedTitle"
    When I click "Search" on searchpage

    Examples: 
      | Browser | greetingCards |
      | mozilla | wedding       |

  Scenario Outline: search Results
    Given I enter "searchBox" as "<greetingCards>"
    When I click on "searchButton"
    And I check the results
    Then I click on "closeSearch" with xpath

    Examples: 
      | greetingCards |
      | wedding       |
      | birthday      |
      | sorry         |
      | anniversary   |
      
      Scenario: Close the browser
      Given I close the browser
