package com.prevox.yubl.appium.util;

import org.openqa.selenium.By;

import io.appium.java_client.android.AndroidDriver;


public class login_android_page {

	
	webConnector connector = new webConnector();
	public static AndroidDriver driver = null;
	
	
	
	public void doLogin(String xpath, String text)
	{
		connector.send_input(xpath, text);
/*		 try{
	            boolean b = driver.getPageSource().contains(text);
	            return b;
	        }
	        catch(Exception e){
	            return false;
	        }*/
	}
}

