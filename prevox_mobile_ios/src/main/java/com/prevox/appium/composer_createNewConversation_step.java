package com.prevox.appium;

import com.prevox.appium.util.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;

public class composer_createNewConversation_step {
	
	webConnector connector = new webConnector();
	
	
	
	@When("^I Select \"([^\"]*)\" from friendsList with UIAutomator$")
	public void Check_whether_app_installed_or_not(String automatorElement) throws InterruptedException {
		System.out.println("Select "+ automatorElement+" from friendList with UIAutomator");
		connector.IosUIAutomation_click(automatorElement);
		Thread.sleep(10000);
	}
	
	
	@And("^I Select \"([^\"]*)\" from \"([^\"]*)\" on serachResults$")
	public void Search_Results(String Element, String text) throws InterruptedException {
		System.out.println("Select "+ Element+" from "+text +" on serachResults");
		connector.Tablecell_click_username(Element, text);
		Thread.sleep(10000);
	}
	
	@And("^I click on \"([^\"]*)\" with name$")
	public void I_click_on_name(String object)
	{
		System.out.println("I click on "+ object+" with name");
		connector.Click_name(object);
	}
}
