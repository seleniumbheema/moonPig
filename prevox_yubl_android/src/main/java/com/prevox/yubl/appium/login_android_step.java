
package com.prevox.yubl.appium;

import java.net.MalformedURLException;

import com.prevox.yubl.appium.util.login_android_page;
import com.prevox.yubl.appium.util.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * Hello world!
 *
 */
public class login_android_step 
{
	webConnector connector = new webConnector();
	login_android_page login_connector = new login_android_page();
	
	
//	 Given I go to Yubl app on "<mobileDevice>"
//	    And I click on "loginButton"
//	    And I enter "userName" as "<usernameText>"
//	    And I enter "passWord" as "<passwordText>"
//	    And I click on "nextButton"
//	    Then I logged in "Successfully"
    
    
	@Given("^I go to Yubl app on \"([^\"]*)\"$")
	public void I_go_to_Yubl(String DeviceType) throws MalformedURLException, InterruptedException
	{
		System.out.println("I go to Yubl on "+DeviceType);
		connector.openApplication(DeviceType);
		Thread.sleep(5000);
	}
	@And("^I click on \"([^\"]*)\"$")
	public void I_click_on(String object) throws InterruptedException
	{
		System.out.println("I click on "+ object);
		connector.click_ID(object);
		Thread.sleep(5000);
	}	
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object, String text)
	{
		System.out.println("I enter "+object+" as "+text);
		connector.send_input(object, text);
	}
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\" with xpath$")
	public void I_enter_xpath(String object, String text)
	{
		System.out.println("I enter "+object+" as "+text+"with xPath");
		connector.send_input_xpath(object, text);
	}
	
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\" with automator$")
	public void I_enter_with_automator(String object, String text)
	{
		System.out.println("I enter "+object+" as "+text +" with automator");
		connector.AndroidUIAutomator(object, text);
	}
	
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\" with className$")
	public void I_enter_with_className(String object, String text)
	{
		System.out.println("I enter "+object+" as "+text +" with className");
		connector.send_input_className(object, text);
	}
	
	@Then("^I logged in \"([^\"]*)\" with \"([^\"]*)\"$")
	public void I_logged(String element, String text)
	{
		System.out.println("I logged in "+element+"with"+text);
	//	connector.assert_equals(element, text);
	}
	@Then("^I close the application$")
	public void I_close()
	{
		System.out.println("I close the application");
		connector.quit();
		
	}
//	 @Then("^I remove the \"([^\"]*)\"$")
//	 public void I_remove_app(String bundleID)
//	 {
//		 System.out.println("I remove the "+bundleID);
//		 connector.removeApp(bundleID);
//	 }
}
