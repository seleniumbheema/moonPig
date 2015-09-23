package com.prevox.appium;

import com.prevox.appium.util.webConnector;

import cucumber.api.java.en.And;

public class public_composer_step {

	webConnector connector = new webConnector();
	
	@And("^I tap on \"([^\"]*)\" with name$")
	public void I_click_on_name(String object)
	{
		System.out.println("I tap on "+ object+" with name");
		connector.Click_name(object);
	}
	@And("^I hide the keyboard$")
	public void hide_keyBoard()
	{
		System.out.println("I hide the keyboard");
		connector.hideKeyboard();
	}
	@And("^I swipe on recentConversation$")
	public void I_swipe()
	{
		System.out.println("I swipe on recentConversation");
		connector.hashMap_swipe_up();
	}
	@And("^I get the value of \"([^\"]*)\"$")
	public void I_get_the_value_of(String object)
	{
		System.out.println("I get the value of "+object);
		connector.profilebefore(object);
	}
	
	@And("^I get the value of \"([^\"]*)\" and assert the values$")
	public void I_get_assertion(String object)
	{
		System.out.println("I get the value of "+object +" and assert the values");
		connector.profileAfterAssertion(object);
	}
	
}
