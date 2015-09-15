package com.prevox.appium;

import com.prevox.appium.util.webConnector;

import cucumber.api.java.en.And;

public class composer_minicomposer_convesation_step {

	
		webConnector connector = new webConnector();
		
		
		 @And("^I take a \"([^\"]*)\"$")
		 public void take_screenshot(String screenShotPath)
		 {
			 System.out.println("I take a "+ screenShotPath);
			 connector.screenShot(screenShotPath);
		 }
}
