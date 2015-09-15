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
}
