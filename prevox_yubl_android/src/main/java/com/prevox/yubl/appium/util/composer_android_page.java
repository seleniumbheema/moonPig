package com.prevox.yubl.appium.util;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class composer_android_page {
	
	
	webConnector connector = new webConnector();
	
	public void list_newRecentConversation(String object, String checkBox)
	{
		 connector.list_webElements_three_className(object, checkBox);
		
	}
	
	
		
	
	
	

}
