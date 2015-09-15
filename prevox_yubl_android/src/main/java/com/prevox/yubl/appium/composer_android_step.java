package com.prevox.yubl.appium;

import org.openqa.selenium.By;

import com.prevox.yubl.appium.util.composer_android_page;
import com.prevox.yubl.appium.util.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class composer_android_step {

	
	webConnector connector = new webConnector();
	composer_android_page composer = new composer_android_page();
	
	
	@And("^Check I am on \"([^\"]*)\" with \"([^\"]*)\"$")
	public void Check_I_am(String object, String text)
	{
		System.out.println("Check I am on "+object+" with "+text);
		connector.assert_equals_xPath(object, text);
	}
	
	@And("^I Check for \"([^\"]*)\" with \"([^\"]*)\"$")
	public void I_Check(String object, String text)
	{
		System.out.println("I Check for "+object+" with "+text);
		connector.assert_equals_xPath(object, text);
	}
	
	
	@And("^I click on \"([^\"]*)\" with xpath$")
	public void I_click_on_xpath(String object)
	{
		System.out.println("I click on "+ object+" with xpath");
		connector.click_Xpath(object);
	}
	
	@And("^I check \"([^\"]*)\" with \"([^\"]*)\" on receiverPage$")
	public void I_check_composedText_with_Yubltext(String xpath, String text) {
		System.out.println("I check " + xpath + " with " + text
				+ " on receiverPage");
		//connector.list_conversationsassert_Equals_thirdelement(xpath, text);
	}
	@And("^Select \"([^\"]*)\" from \"([^\"]*)\"$")
	public void Select_the_conversation(String object, String checkBox)
	{
		System.out.println("Select "+object+" from "+checkBox);
		composer.list_newRecentConversation(object, checkBox);
		
	}
	@And("^I check for \"([^\"]*)\" and clickonExactUserName$")
	public void check_for_exactUserName(String text)
	{
		System.out.println("I check for "+text+" and click on ExactUserName");
		connector.exact_UserName(text);
	}
	
	@Then("^I click on backButton using keyCode$")
	public void I_click_keyCode()
	{
		System.out.println("I click on backButton using keyCode");
		connector.click_keyCodes();
	}
}
