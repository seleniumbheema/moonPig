package com.moonpig.bdd;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.moonpig.utill.SearchPage;
import com.moonpig.utill.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;


//Developer : Anil Bheema Dated : 05 October 2015

/* Step Definition- This is our Glue code where Keywords from Feature file will be treated as Annotations  containing Step 

Definitions, it’s a stateful class that matches steps from the feature description with their Parameters to 

states in our application. 

In src/main/java folder with same Package as feature file */





public class SearchPage_Step {

		WebConnector connector = WebConnector.getinstance();
		SearchPage searchpage_connector = new SearchPage();
	
	@Given("^I click \"([^\"]*)\" on searchpage$")
	public void Click_SearchPage(String xPathObject)
	{
		System.out.println("I Click "+xPathObject+" on searchpage");
		connector.Click_ID(xPathObject);
	}
	@And("^I click on \"([^\"]*)\"$")
	public void Click(String xPathObject)
	{
		System.out.println("I Click on "+xPathObject);
		connector.Click_ID(xPathObject);
	}
	
	@And("^I click on \"([^\"]*)\" with xpath$")
	public void Click_xpath(String xPathObject) throws InterruptedException
	{
		System.out.println("I Click on "+xPathObject+ " with xpath");
		connector.Click(xPathObject);
		Thread.sleep(10000);
	}
	
	
	@And("^Send on \"([^\"]*)\" as \"([^\"]*)\"$")
	public void Send_on(String object, String text){
		System.out.println("Send on "+object+" as "+text);
		searchpage_connector.sendData(object, text);
	}
	@And("^I verify the moonPigtitle with \"([^\"]*)\"$")
	public void Verify_results( String expectedResults ) throws InterruptedException
	{
		System.out.println("And I verify the moonPigtitle with "+ expectedResults);
		searchpage_connector.assert_Equals_Title( expectedResults);
		Thread.sleep(10000);
	}
	
	@And("^I check the results$")
	public void check_the_results() throws InterruptedException
	{
		System.out.println("And I check the results");
		connector.results_size();
	}
	
	
	
}
