package com.prevox.appium.util;

public class login_page 
{
	
	webConnector connector = new webConnector();
	
	public void doLogin(String xpath, String text)
	{
		connector.send_input(xpath, text);
	}
	
	public void sendInput_UIautomator(String xpath, String text)
	{
		connector.IosUIAutomation_input(xpath, text);
	}
	
}
