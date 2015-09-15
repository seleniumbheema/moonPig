@SmokePubliccomposer
Feature: Composing the text and sharing the message to Public
  
  In order to compose the text
  As a Mobile user
  I want to Login in to Yubl application 
  So that I can access the features of the composer, profile and conversation

  #Developer : Anil Bheema
  #As Industry Standards, this layer will be in src/test/resources folder with same package name as Step Definition layer
  #Writing BDD tests with Gerkin Syntax, Writing Possible input parameters in double quotes make it easy for cucumber to generate the glue code for the step files with the correct parameters from
  #Object Repository(OR and Config-properties)
  Scenario Outline: Send feeds to Public using composer
    Given I go to Yubl app on "<mobileDevice>"


    Examples: 
      | mobileDevice |
      | iPhone 6     |