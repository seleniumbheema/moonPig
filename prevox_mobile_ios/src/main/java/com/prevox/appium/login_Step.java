package com.prevox.appium;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.prevox.appium.util.login_page;
import com.prevox.appium.util.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.ios.IOSDriver;

/**
 * Developer - Anil Bheema
 *  */
public class login_Step {


	
	webConnector connector = new webConnector();
	login_page login_connector = new login_page();
	
	
//    Given I go to Yubl app on "<mobileDevice>"
//    And I enter "userName" as "usernameText"
//    And I enter "passWord" as "passwordText"
//    And Click on "loginButton"
//    Then I logged in "Successfully"
    
    
	
	@Given("^I go to Yubl app on \"([^\"]*)\"$")
	public void I_go_to_Yubl(String DeviceType) throws MalformedURLException, InterruptedException
	{
		System.out.println("I go to Yubl on "+DeviceType);
		connector.openApplication(DeviceType);
		Thread.sleep(20000);
	}
	@And("^I click on \"([^\"]*)\"$")
	public void I_click_on(String object)
	{
		System.out.println("I click on "+ object);
		connector.Click(object);
	}	
	@And("^I click with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void I_click_with(String x, String y)
	{
		System.out.println("I click with "+ x + " and "+y);
		//connector.sendKeys_Enter(object);
		//connector.IosUIAutomation_click(object);
		//connector.Touch_action_webelement(object);
		connector.Java_script_keycode(x, y);
	}
	@And("^I click on \"([^\"]*)\" for duration$")
	public void I_click_on_duration(String object) throws InterruptedException
	{
		System.out.println("I click on "+ object + " for duration");
		connector.Click(object);
		Thread.sleep(5000);
	}
	
	@And("^I click on \"([^\"]*)\" and wait$")
	public void I_click_on_wait(String object) throws InterruptedException
	{
		System.out.println("I click on "+ object+" wait");
		connector.Click(object);
		Thread.sleep(10000);
	}
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object, String text) throws InterruptedException
	{
		System.out.println("I enter "+object+" as "+text);
		login_connector.doLogin(object, text);
		Thread.sleep(1000);
	}
	@Then("^I logged in \"([^\"]*)\" to \"([^\"]*)\"$")
	public void I_logged(String object, String text)
	{
		System.out.println("I logged in "+object+" to "+ text);
		connector.assert_Equals_Text(object, text);
	}
	 @Then("^I remove the \"([^\"]*)\"$")
	 public void I_remove_app(String bundleID)
	 {
		 System.out.println("I remove the "+bundleID);
		 connector.removeApp(bundleID);
	 }
	 @Then("^I close the application$")
	 public void I_close()
	 {
		 System.out.println("I close the application");
		 connector.close();
	 }
	
}
