package com.moonpig.utill;

public class LoginPage extends WebConnector
{

	public void doLogin(String xpathObject, String text)
	{
		input_xpath(xpathObject, text);
	}
	public void signin(String xpathObject) 
	{
		Click(xpathObject);
	}
	public void homePagetitle(String text)
	{
		assert_Equals_Title(text);
	}
	
}
