@Smoke4SearchPage
Feature: We are getting a number of errors on UAT/Staging, the state of the DB is probably bad but do not blitz the db please
  
  In order to search in ObjectiveManager
  As a Admin of app
  I want to Search results in each tab

  #Developer : Anil Bheema Dated : 21 April 2015
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  
  Scenario Outline: Searching all tabs returning right results ObjectiveManager
  	Given Click "Search" on searchpage
	And Click on "<Tabs>"
    And Send on "<SearchBox>" as "<SearchText>"
    And Click on "searchSubmit"
    And Verify "<actualResult>" with "<expectedResults>"
    
    @Regression
    Examples: 
      | Tabs             | SearchBox      | SearchText      | actualResult       | expectedResults    |
      | People           | personName     | peopleSearch    | peopleActResult    | peopleExpResult    |
      | Clients          | businessBrand  | clientsSearch   | clientActResult    | clientExpResult    |
      | Plans            | businessPlan   | plansSearch     | planActResult      | planExpResult      |
      | AllObjectivesTab | objectivesPlan | objectiveSearch | objectiveActResult | objectiveExpResult |