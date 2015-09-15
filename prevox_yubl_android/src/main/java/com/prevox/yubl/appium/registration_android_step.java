package com.prevox.yubl.appium;

import com.prevox.yubl.appium.util.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class registration_android_step {

	webConnector connector = new webConnector();
	
	@Then("^I should see \"([^\"]*)\"$")
	public void I_should_see(String xpathText)
	{
		System.out.println("I should see "+xpathText);
		connector.nafCode(xpathText);
	}
}
