package com.prevox.appium;

import com.prevox.appium.util.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class composer_step {
	
	
	
	webConnector connector = new webConnector();
	
	
	@And("^I check whether app is installed with \"([^\"]*)\"$")
	public void Check_whether_app_installed_or_not(String Bid) {
		System.out.println("I Check whether app is " + Bid);
		connector.Appinstalled(Bid);
	}

	@And("^Check I am on \"([^\"]*)\" with \"([^\"]*)\"$")
	public void Check_I_am_on_homepage_with_Yubltext(String xpath, String text) {
		System.out.println("Check I am on " + xpath + " with " + text);
		connector.assert_Equals_Text(xpath, text);
	}

	@And("^I check the \"(.*?)\" with \"(.*?)\"$")
	public void i_check_the_with(String xpath, String text) throws Throwable {
		System.out.println("I Check the " + xpath + " with " + text);
		connector.assert_Equals_Text(xpath, text);
	}

	@And("^I click on \"([^\"]*)\" of conversation$")
	public void I_click_on(String object) {
		System.out.println("I click on " + object + " of conversation");
		connector.Touch_action_webelement(object);
	}

	@And("^I check \"([^\"]*)\" with \"([^\"]*)\" on receiverPage$")
	public void I_check_composedText_with_Yubltext(String xpath, String text) {
		System.out.println("I check " + xpath + " with " + text
				+ " on receiverPage");
		connector.list_conversationsassert_Equals_thirdelement(xpath, text);
	}
	
	@And("^I check \"([^\"]*)\" with \"([^\"]*)\"$")
	public void assert_Equals_Text(String xpath, String text) {
		System.out.println("I check " + xpath + " with " + text);
		connector.assert_Equals_Text(xpath, text);
	}
	
	@And("^I check \"([^\"]*)\" with \"([^\"]*)\" on receiverPage for textBasic$")
	public void I_check_composedText_with_Yubltext_textBasic(String xpath, String text) {
		System.out.println("I check " + xpath + " with " + text
				+ " on receiverPage for textBasic");
		connector.list_conversationsassert_Equals_sixelement(xpath, text);
	}
	
	@And("^I check \"([^\"]*)\" with \"([^\"]*)\" on receiverPage for miniComposer and textBasic$")
	public void I_check_composedText_with_Yubltext_textBasic_miniComposer(String xpath, String text) {
		System.out.println("I check " + xpath + " with " + text
				+ " on receiverPage for miniComposer and textBasic");
		connector.list_conversationsassert_Equals_seventhElement(xpath, text);
	}
	

	@Then("^I click on \"([^\"]*)\" from conversation$")
	public void I_click_on_backbutton(String object) {
		System.out.println("I click on " + object + " from conversation");
		connector.IosUIAutomation_click(object);
	}
	
	@And("^I click on \"([^\"]*)\" with UIAutomator$")
	public void I_click_on_automator(String object) {
		System.out.println("I click on " + object + " UIAutomator");
		connector.IosUIAutomation_click(object);
	}
	
	 
}
