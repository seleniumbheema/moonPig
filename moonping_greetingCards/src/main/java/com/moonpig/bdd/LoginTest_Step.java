package com.moonpig.bdd;

import com.moonpig.utill.LoginPage;
import com.moonpig.utill.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


//Developer : Anil Bheema Dated : 05 October 2015

/* Step Definition- This is our Glue code where Keywords from Feature file will be treated as Annotations  containing Step 

Definitions, it’s a stateful class that matches steps from the feature description with their Parameters to 

states in our application. 

In src/main/java folder with same Package as feature file */



public class LoginTest_Step 

{

		WebConnector connector = WebConnector.getinstance();
		LoginPage login_connector = new LoginPage();
	
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_go_to(String URL, String browser)
	{
		System.out.println("--- CONTINUOS INTEGRATION----");
		System.out.println("I go to "+URL+" on "+browser);
		connector.openBrowser(browser);
		connector.Navigation(URL);
		
	}
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object, String text )
	{
		System.out.println("I enter "+object +" as "+text);
		connector.input_xpath(object, text);
	}
	@And("^Click on \"([^\"]*)\"$")
	public void Click_on(String object) throws InterruptedException
	{
		System.out.println("Click on "+object);
		login_connector.Click(object);
		Thread.sleep(3000);
	}
	@Then("^I logged in successfully with \"([^\"]*)\"$")
	public void I_logged(String expectedResult){
		System.out.println("I logged in "+expectedResult);
		login_connector.homePagetitle(expectedResult);
	}
	
	@Given("^I close the browser$")
	public void close_the_browser()
	{
		System.out.println("I close the Browser");
		connector.close();
		
	}
}
