package com.moonpig.utill;

public class SearchPage extends WebConnector{
	
	public void searchpageButton(String xPathObject){
		
		isElementPresent(xPathObject);
	}
	
	public void sendData(String xpathObject, String text)
	{
		input_xpath(xpathObject, text);
	}
}
