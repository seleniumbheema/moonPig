/*In this layer, where actual selenium code will be written, Webconnector  class has got utility functions 
initialized property files and fire the selenium command. 

Generic Functions: all these function will be used in Step Layer by creating Constructor

Here I’ve implemented cucumber with page object model approach, it helps make code more readable, 
maintainable and reusuable.
*/
//Developer : Anil Bheema Dated : 16 April 2015

package com.moonpig.utill;

import java.awt.List;
import java.io.FileInputStream;
import java.util.NoSuchElementException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WebConnector
{
	public static Properties OR = null;
	public static Properties CONFIG = null;
	
	public static WebDriver driver = null;
	
	public static Logger APPLICATION_LOGS = Logger.getLogger("devpinoyLogger");
	  
	public static WebElement element = null;
	
	static WebDriver mozilla = null;
	static WebDriver chrome = null;
	static WebDriver safari = null;
	
	
	static WebConnector w;
	
	
	//Constructor- Same as Class name with out return type, used to initialize the objects
	public WebConnector()
	{
		//Intilization of Properties files
		if(OR == null )
		{
			try 
			{	
				OR = new Properties();
				FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"//src//main//java//com//moonpig//config//OR.properties");
				OR.load(fs);
				
				
				System.out.println(OR.getProperty("testEnv"));
				System.out.println(OR.getProperty("Search"));
				CONFIG = new Properties();
				
				fs = new FileInputStream(System.getProperty("user.dir")+"//src//main//java//com//moonpig//config//Staging_Config.properties");
				CONFIG.load(fs);
			} 
			catch (Exception e) {
				// TODO: handle exception
				System.out.println("Error in Intializing Property files");
			}
		}
	}
	
	//Browsers
			public synchronized static WebDriver openBrowser(String browserType)
			{
			
				/*try
					{*/
					
				
						if(browserType.equalsIgnoreCase("Mozilla") && mozilla == null)
						{
							/*
							 * To hide CSS and images:
							 * FirefoxProfile profile = new FirefoxProfile();
							profile.setPreference("permissions.default.stylesheet", 2);
							profile.setPreference("permissions.default.image", 2);*/

							ProfilesIni profile = new ProfilesIni();
							FirefoxProfile myprofile = profile.getProfile("bheemaA");
							myprofile.setPreference("reader.parse-on-load.enabled",false);
							driver = new FirefoxDriver(myprofile);
							mozilla = driver;
						}
						else if (browserType.equalsIgnoreCase("Mozilla") && mozilla != null) {
							driver = mozilla;
						}
						else if(browserType.equalsIgnoreCase("Chrome") && chrome == null){
							//TODO: Need to confirm Chrome in MAC
							System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/chromedriver/chromedriver.exe");
							driver = new ChromeDriver();
							chrome = driver;
						}
						else if(browserType.equalsIgnoreCase("Chrome") && chrome !=null)
						{
							driver = chrome;
						}
						else if(browserType.equals("IE"))
						{//TODO: Need to confirm IE9 in MAC-
							//with Selenium GRID, test this in Virtual Box
							System.setProperty("webdriver.ie.driver", System.getProperty("user.dir")+"/internetexplorer/ie.exe");
							driver = new ChromeDriver();
						}
						else if (browserType.equalsIgnoreCase("Safari") && safari == null)
						{
							// Process to do in Mac - https://blog.codecentric.de/en/2015/02/selenium-webdriver-safari-8/
							  SafariOptions options = new SafariOptions();
					    	 options.setUseCleanSession(true); 
					    	 
					    	 //if you wish safari to forget session everytime
					    	 //download safari webdriver extension from this URL http://selenium-release.storage.googleapis.com/index.html?path=2.45/
					    	 driver = new SafariDriver();
					    	 safari = driver;
							
						}
						else if(browserType.equalsIgnoreCase("Safari") && safari != null)
						{
							driver = safari;
						}
						driver.manage().window().maximize();
						driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
						driver.manage().deleteAllCookies();
				/*	}
					finally
					{  
						// https://docs.oracle.com/javase/tutorial/essential/exceptions/finally.html
						// http://hellotojavaworld.blogspot.co.uk/2010/11/runtimeaddshutdownhook.html?m=1
						Runtime.getRuntime().addShutdownHook(  
						new Thread(new BrowserCleanup()));
					}*/	
				return driver;
			}
			
			
	// shutdownhook ensures that the browser will automatically close when the test has finished, regardless of whether it has passed or failed.
				
/*			public static class BrowserCleanup implements Runnable 
			{
				public void run() 
				{
					APPLICATION_LOGS.debug("Closing the browser");
					close.quit_browser();
				}
			}*/
			
			
		// Singleton // get rid of mutiple browsers opening
			// when first time this getinstance is called w = new connector will be initialised, next time that will return old value w 
			public static WebConnector getinstance()
			{
				if(w == null)
				{
					w = new WebConnector();
				}
				return w;
				
			}
			
			
			public static void close()
			{
				driver.close();
			}
			
	//URL Navigate
			public void Navigation(String thisURL)
			{
				APPLICATION_LOGS.debug("navigation to " + CONFIG.getProperty(thisURL));
				driver.get(CONFIG.getProperty(thisURL));
			}
			
	//FindElement_xpath
			//FindElement_xpath
			public WebElement findElement_xpath(String xPath)
			{
				return driver.findElement(By.xpath(OR.getProperty(xPath)));
			}
			
			//results_size
			public boolean results_size()
			{
				try
				{
					//*[@id='productGrid']/div
					String results = driver.findElement(By.xpath("//*[@id='searchResultsText']/div/div/h2/strong")).getText();
					System.out.println("Retrieved Results - > " + results);
					driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
					return true;
				}
				catch (Exception e)
				{
					e.printStackTrace();
					return false;
				}	
			}
			
			
			
	//Click_Xpath
			public boolean Click(String xPath)
			{
				try
				{
					driver.findElement(By.xpath(OR.getProperty(xPath))).click();
					return true;
				}
				catch (Exception e)
				{
					e.printStackTrace();
					return false;
				}
			}
			//Click_ID		
			public boolean Click_ID(String ID)
			{
				try
				{
					driver.findElement(By.id(OR.getProperty(ID))).click();
					return true;
				}
				catch (Exception e)
				{
					e.printStackTrace();
					return false;
				}
			}
	//Click_Classname
			public boolean Click_className(String text)
			{
				try
				{
					driver.findElement(By.className(OR.getProperty(text))).click();
					return true;
				}
				catch (Exception e)
				{
					System.out.println("Click_className Element is not Found");
					e.printStackTrace();
					return false;
				}
			}
	//Click_LinkText
			public void Click_linkText(String text)
			{
				try
				{
					driver.findElement(By.linkText(OR.getProperty(text))).click();
					
				}
				catch (Exception e)
				{
					e.printStackTrace();
					APPLICATION_LOGS.debug("Click_className Element is not Found");
				}
			}
			
	
	//Input_Xpath
			public boolean input_xpath(String xpathType, String text)
			{
				try
				{
					driver.findElement(By.id(OR.getProperty(xpathType))).sendKeys(CONFIG.getProperty(text));
					return true;
				}
				catch(Exception e)
				{
					e.printStackTrace();
					return false;
				}
			}
	//GetText
			public boolean gettext_xpath(String xpathType)
			{
				try
				{
					driver.findElement(By.xpath(OR.getProperty(xpathType))).getText();
					return true;
				}
				catch(Exception e)
				{
					System.out.println("Gettext_Xpath Element is not found");
					e.printStackTrace();
					return false;
				}
			}
			//IsElementPresent
			public boolean isElementPresent(String xPath)
			{
				  try {
				        driver.findElement(By.xpath(xPath));
				    } catch (NoSuchElementException e) {
				        return false;
				    }
				    return true;
			}
			//-------------------------------------------------------------------------------------------------------------------------------	 
			 /**
			  * Finds a 'button' element containing a specified label using either
			  * src or title attribute value of an input tag.
			  * @param label
			  * @return
			  */
			/* protected WebElement button(String label) 
			 {
			  try 
			  {
			   return driver.findElement(By.xpath("//input[contains(@src,'" + label + "' or @value='" + label + "')]"));
			  } 
			  catch (NoSuchElementException err)
			  {
					  List<WebElement> buttons = driver.findElements(By.tagName("input"));
					  for(WebElement button : buttons) 
					  {
						  if(button.getAttribute("title").contains(label)) { return button; }
					  }
				  throw err;
			  }
			 }*/
	//AssertEqual- Get Title
			public void assert_Equals_Title(String text)
			{
				try{
					Assert.assertEquals("Title of the Page", CONFIG.getProperty(text), driver.getTitle());
				}catch(Exception e){
					System.out.println("Assert Equals executing false results");
				}
			}
		//AssertTrue- GetText with expected text
			public void assert_Equals_Text(String Xpath, String text)
			{
				try{
					
					new WebDriverWait(driver,10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath(OR.getProperty(Xpath))));
					
					Assert.assertEquals(driver.findElement(By.id(OR.getProperty(Xpath))).getText(), CONFIG.getProperty(text));
				}catch(Exception e){
					e.printStackTrace();
					System.out.println("Titke" + driver.getTitle());
					System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
				}
			}
			
			
			//AssertTrue- LinkText
			
			public void assert_Equals_LinkText(String Xpath, String text)
			{
				try{
					Assert.assertEquals(driver.findElement(By.linkText(OR.getProperty(Xpath))), CONFIG.getProperty(text));
				}catch(Exception e){
					System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
				}
			}
			
			
			//AssertTrue- GetText with anotherGettext
			public void assert_Equals_GetText(String Xpath_Actual, String Xpath_Expected)
			{
				try{
					Assert.assertEquals(driver.findElement(By.xpath(OR.getProperty(Xpath_Actual))).getText(), driver.findElement(By.xpath(OR.getProperty(Xpath_Expected))));
				}catch(Exception e){
					System.out.println("Assert Xpath's getTexts Equals executing false results");
				}
			}
			
	//By_ID_
			public void By_iD(String text){
				try {
					driver.findElement(By.id(OR.getProperty(text)));
				} catch (Exception e) {
					System.out.println("By_ID element is not found");
				}
			}
			
	//Select_Dropdown_List_ID
			public void Select_Dropdown_ID(String text, String text1)
			{
				try
				{
					WebElement dropDownListBox = driver.findElement(By.id(OR.getProperty(text)));
					Select clickThis = new Select(dropDownListBox);
					clickThis.selectByVisibleText(CONFIG.getProperty(text1));
					
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
			}
		//Select_Dropdown_List_Xpath
			public void Select_Dropdown_xPath(String xPath, String text1)
			{
				try
				{
					WebElement dropDownListBox = driver.findElement(By.xpath(OR.getProperty(xPath)));
					Select clickThis = new Select(dropDownListBox);
					clickThis.selectByVisibleText(CONFIG.getProperty(text1));
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
			}
	//Thread Sleep
			public void wait(int i) throws InterruptedException{
				
				Thread.sleep(i);
			}
}
