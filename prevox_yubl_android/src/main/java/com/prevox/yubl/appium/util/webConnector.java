package com.prevox.yubl.appium.util;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidKeyCode;
import io.appium.java_client.ios.IOSDriver;

import java.io.File;
import java.io.FileInputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.github.javafaker.Faker;

public class webConnector {
	
	
	public static Properties OR  = null;
	public static Properties CONFIG  = null;
	public static DesiredCapabilities capabilities = null;
	public static AndroidDriver driver = null;
	public static Logger APPLICATION_LOGS = Logger.getLogger("devpinoyLogger");
	public static Faker faker = null;
	
	//Constructor
		public webConnector()
		{
			if(OR == null)
			{
				try 
				{
					//Initilization of OR property file
					OR = new Properties();
					FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/prevox/yubl/appium/config/OR.properties");
					OR.load(fs);
					
					//Initilizaition of CONFIG property file
					CONFIG = new Properties();
					fs = new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/prevox/yubl/appium/config/staging_android_config.properties");
					CONFIG.load(fs);
					
					System.out.println(OR.getProperty("loginButton"));
					System.out.println(CONFIG.getProperty("usernameText1"));
					
				} 
				catch (Exception e) 
				{
					System.out.println("error in initialization");
				
				}
			}
		}
		
		
		//open_Application
		public void openApplication(String DeviceType) throws MalformedURLException
		{
			if(DeviceType.equals("Galaxy S5"))
			{
				DesiredCapabilities capabilities = new DesiredCapabilities();
				capabilities.setCapability(CapabilityType.BROWSER_NAME, "");
				capabilities.setCapability("deviceName", "Galaxy S5");
				capabilities.setCapability("platformName", "Android");
				capabilities.setCapability("platformVersion", "5.0");
				File app = new File(System.getProperty("user.dir")+"//Yubl.apk");
				capabilities.setCapability("app", app.getAbsolutePath());
				driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
				driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
				
			}
			
			else if(DeviceType.equals("Nexus 5"))
			{
				DesiredCapabilities capabilities = new DesiredCapabilities();
				capabilities.setCapability(CapabilityType.BROWSER_NAME, "");
				capabilities.setCapability("deviceName", "Nexus 5");
				capabilities.setCapability("platformName", "Android");
				capabilities.setCapability("platformVersion", "5.0.1");
				File app = new File(System.getProperty("user.dir")+"//Yubl.apk");
				capabilities.setCapability("app", app.getAbsolutePath());
				driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
				driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
				
			}
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}
		
		 /** Actions **/
		//-------------------------------------------------------------------------------------------------------------------------------	 
			 /**
			  * Clicks on a specified element.
			  * @param element
			 * @throws Exception 
			  */
		
		//close the Application
		public void quit()
		{
			try{
				if(driver!=null)
					driver.quit();
			}
			catch(NoSuchMethodError  method)
			{
				method.printStackTrace();
			}
		}
		
		//Click _Xpath
			 public void click_Xpath(String element)   
			 { 
				 try {				 	
						 driver.findElement(By.xpath(OR.getProperty(element))).click();
					} catch (NoSuchElementException err) {
						
						err.printStackTrace();
						 APPLICATION_LOGS.debug(element + " notfound ");
					}
			 }
			 
			 //SendKeyCodes
			 public void click_keyCodes()   
			 { 
				 try {				 	
					 driver.sendKeyEvent(AndroidKeyCode.BACK);
					} catch (NoSuchElementException err) {
						
						err.printStackTrace();
						 APPLICATION_LOGS.debug( "BackButton notfound ");
					}
			 }
			 
			 
		//Click_ID	 
			 public void click_ID(String element)   
			 { 
				 try {				 	
						 driver.findElement(By.id(OR.getProperty(element))).click();
					} catch (NoSuchElementException err) {
						
						err.printStackTrace();
						 APPLICATION_LOGS.debug(element + " notfound ");
					}
			 }
			 
			 
				//Click_ClassName 
					 public void click_claseName(String element)   
					 { 
						 try {				 	
								 driver.findElement(By.className(OR.getProperty(element))).click();
							} catch (NoSuchElementException err) {
								
								err.printStackTrace();
								 APPLICATION_LOGS.debug(element + " notfound ");
							}
					 }
					 
			 
			 //Send_text
			 public void send_input(String element, String text)
			 {
				 try 
				 {
					driver.findElement(By.id(OR.getProperty(element))).sendKeys(CONFIG.getProperty(text));
				 } 
				 catch (NoSuchElementException err) {
					err.printStackTrace();
					APPLICATION_LOGS.debug(element + " not found ");
				}
			 }
			 //Send_text_xpath
			 
			 public void send_input_xpath(String element, String text)
			 {
				 try 
				 {
					driver.findElement(By.xpath(OR.getProperty(element))).sendKeys(CONFIG.getProperty(text));
				 } 
				 catch (NoSuchElementException err) {
					err.printStackTrace();
					APPLICATION_LOGS.debug(element + " not found ");
				}
			 }
			 
			 //Send_text
			 public void send_input_className(String element, String text)
			 {
				 try 
				 {
					driver.findElement(By.className(OR.getProperty(element))).sendKeys(CONFIG.getProperty(text));
				 } 
				 catch (NoSuchElementException err) {
					err.printStackTrace();
					APPLICATION_LOGS.debug(element + " not found ");
				}
			 }
			 
			 //Send_androidAutomator
			 public void AndroidUIAutomator(String element, String text)
			 {
				 try 
				 {
					driver.findElementByAndroidUIAutomator(OR.getProperty(element)).sendKeys(CONFIG.getProperty(text));
				 } 
				 catch (NoSuchElementException err) {
					err.printStackTrace();
					APPLICATION_LOGS.debug(element + " not found ");
				}
			 }
			 //Assert
			 public void assert_equals(String text, String element)
			 {
				 try 
				 {
				 Assert.assertEquals(driver.findElement(By.id(OR.getProperty(element))).getText(), CONFIG.getProperty(text));
				 } 
				 catch (NoSuchElementException err) {
						err.printStackTrace();
						APPLICATION_LOGS.debug(element + " not found ");
					}
			 }
			
			 //Assert
			 public void assert_equals_xPath(String element, String text)
			 {
				 try 
				 {
					 System.out.println(driver.findElement(By.xpath(OR.getProperty(element))).isEnabled());
				 Assert.assertEquals(driver.findElement(By.xpath(OR.getProperty(element))).getText(), CONFIG.getProperty(text));
				 } 
				 catch (NoSuchElementException err) {
						err.printStackTrace();
						APPLICATION_LOGS.debug(element + " not found ");
					}
				 
			 }
			 
			 //javaFaker
			 public void nafCode(String xpathText)
			 {
				 try{
					boolean nafExits =  driver.findElement(By.id(xpathText)).isEnabled();
					System.out.println(nafExits);
				 }
				 catch (NoSuchElementException err) {
						err.printStackTrace();
						APPLICATION_LOGS.debug(xpathText + " not found ");
					}
			 }
			 
				// List_webelements
				public List<WebElement> list_webElements(String xpatType)
				{
						return driver.findElements(By.xpath(OR.getProperty(xpatType)));
				}
				// List_webelementswtihClassName
				public void list_webElements_three_className(String xpathType, String checkBox)
				{
						 try {				 	
							 List<WebElement> viewNames = driver.findElements(By.xpath(OR.getProperty(xpathType)));
								viewNames.get(0).findElement(By.className(OR.getProperty(checkBox))).click();
								viewNames.get(1).findElement(By.className(OR.getProperty(checkBox))).click();
								viewNames.get(2).findElement(By.className(OR.getProperty(checkBox))).click();
							} catch (NoSuchElementException err) {
								
								err.printStackTrace();
								 APPLICATION_LOGS.debug(xpathType +" and "+ checkBox + " notfound ");
							}
				}
				
				public void exact_UserName(String text)
				{
					try{
						List<WebElement> listofUsers = driver.findElements(By.className("android.widget.LinearLayout"));
						WebElement username = listofUsers.get(0).findElement(By.id("com.yubl.yubl:id/text_view_username"));
						String usernameText = username.getText();
						System.out.println(username);
						if(usernameText.equals(CONFIG.getProperty(text)))
						{
							username.click();
						}
						else
						{
							System.out.println("not clickable");
						}
					}
					catch(NoSuchElementException err)
					{
						
					}
				}
}

