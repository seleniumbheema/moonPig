package com.prevox.appium.util;

import java.awt.image.BufferedImage;
import java.awt.image.DataBuffer;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.apache.commons.io.FileUtils;

import io.appium.java_client.TouchAction;
import io.appium.java_client.ios.IOSDriver;

public class webConnector 
{
	
	
	public static Properties OR = null;
	public static Properties CONFIG = null;
	public static IOSDriver driver = null;
	public static DesiredCapabilities capabilities = null;
	public static 	HashMap<String, Double> captureCameraCodes = new HashMap<String, Double>();
/*	public int profilebeforefeedsValue = (Integer) null;
	public int profileafterfeedsValue = (Integer) null;
*/	
	
	//Constructor
	public webConnector()
	{
		if(OR == null)
		{
			try 
			{
				//Initilization of OR property file
				OR = new Properties();
				FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/prevox/appium/config/OR.properties");
				OR.load(fs);
				
				//Initilizaition of CONFIG property file
				CONFIG = new Properties();
				fs = new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/prevox/appium/config/"+OR.getProperty("testEnv")+"_config.properties");
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
		if(DeviceType.equals("iPhone 5s sliver testphone"))
		{
			capabilities = new DesiredCapabilities();
			capabilities.setCapability("appium-version", "1.0");
			capabilities.setCapability("platformName", "iOS");
			capabilities.setCapability("platformVersion", "8.1");
			capabilities.setCapability("deviceName", "iPhone 5s sliver testphone");
			File app = new File(System.getProperty("user.dir")+"//Yubl.app");
			capabilities.setCapability("app", app.getAbsolutePath());
			driver = new IOSDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
			
		}
		//Stimulator iphone 6 and version 8.3
		else if(DeviceType.equals("iPhone 6"))
		{
			capabilities = new DesiredCapabilities();
			capabilities.setCapability("appium-version", "1.0");
			capabilities.setCapability("platformName", "iOS");
			capabilities.setCapability("platformVersion", "8.3");
			capabilities.setCapability("deviceName", "iPhone 6");
			File app = new File(System.getProperty("user.dir")+"//Yubl.app");
			capabilities.setCapability("app", app.getAbsolutePath());
			driver = new IOSDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
			
		}
		
		else if(DeviceType.equals("Bheema iPhone6 Test"))
		{
			capabilities = new DesiredCapabilities();
			capabilities.setCapability("appium-version", "1.0");
			capabilities.setCapability("platformName", "iOS");
			capabilities.setCapability("platformVersion", "8.1.1");
			capabilities.setCapability("deviceName", "Bheema iPhone6 Test");
			File app = new File(System.getProperty("user.dir")+"//Yubl.app");
			capabilities.setCapability("app", app.getAbsolutePath());
			driver = new IOSDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
			
		}
		
		else if(DeviceType.equals("iPhone 5c Bheem"))
		{
			capabilities = new DesiredCapabilities();
			capabilities.setCapability("appium-version", "1.0");
			capabilities.setCapability("platformName", "iOS");
			capabilities.setCapability("platformVersion", "8.3");
			capabilities.setCapability("deviceName", "iPhone 5c Bheem");
			File app = new File(System.getProperty("user.dir")+"//Yubl.app");
			capabilities.setCapability("app", app.getAbsolutePath());
			driver = new IOSDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		}
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	//close_the_applicaiton
	public boolean close()
	{
		try{
			driver.quit ();
			return true;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}
	
	

	//Click_Xpath
	public boolean Click(String xPathType)
	{
		try
		{
			driver.findElement(By.xpath(OR.getProperty(xPathType))).click();
			return true;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}
	
	//Click_classname
	public boolean ClickClassName(String xPathType)
	{
		try
		{
			driver.findElement(By.className(OR.getProperty(xPathType))).click();
			return true;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}
	
	//Click_name
		public boolean Click_name(String xPathType)
		{
			try
			{
				driver.findElement(By.name(OR.getProperty(xPathType))).click();
				return true;
			}
			catch (Exception e)
			{
				e.printStackTrace();
				return false;
			}
		}
	
	//AssertTrue- List of Conversations with expectedText
		public boolean list_conversations_click(String xpathType)
		{
			try{
				List<WebElement> UIATableCell = driver.findElements(By.className("UIATableCell")); 
				List<WebElement> UIAStaticText = UIATableCell.get(UIATableCell.size()-1).findElements(By.className(OR.getProperty(xpathType)));
				UIAStaticText.get(UIAStaticText.size()-2).click();
				return true;
			}catch(Exception e){
				e.printStackTrace();
				return false;
			}
		}
	//sendkeys_Enter_Xpath
	public boolean sendKeys_Enter(String xPathType)
	{
		try
		{
			driver.findElement(By.xpath(OR.getProperty(xPathType))).sendKeys(Keys.ENTER);
			return true;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}
	
	
	//Click_IOSUIAUtomationXpath
	public boolean IosUIAutomation_click(String xPathType)
	{
		try
		{
			driver.findElementByIosUIAutomation(OR.getProperty(xPathType)).click();
			return true;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}
	
	//input_IOSUIAUtomationXpath
		public boolean IosUIAutomation_input(String xPathType, String text)
		{
			try
			{
				driver.findElementByIosUIAutomation(OR.getProperty(xPathType)).sendKeys(CONFIG.getProperty(text));
				return true;
			}
			catch (Exception e)
			{
				e.printStackTrace();
				return false;
			}
		}
	
	
	//Input_Xpath
	public boolean send_input(String xpathType, String text)
	{
		try
		{
			driver.findElement(By.xpath(OR.getProperty(xpathType))).sendKeys(CONFIG.getProperty(text));
			return true;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}
	
	
	// List_webelements
	public List<WebElement> list_webElements(String xpatType)
	{
			return driver.findElements(By.xpath(OR.getProperty(xpatType)));
	}
	
	//Java_Script_Keycodes
	//to get x and y co-ordinates, go to Appium Inspector, click on precise tap, tap on the element you need
	public static void Java_script_keycode(String x, String y)
	{
		try
		{
			captureCameraCodes.put("tapCount", new Double("1.0")); //no of time you want to tap, in this case one time
			captureCameraCodes.put("touchCount", new Double("1.0")); //
			captureCameraCodes.put("duration", new Double("0.1"));
			captureCameraCodes.put("x", new Double(CONFIG.getProperty(x)));
			captureCameraCodes.put("y", new Double(CONFIG.getProperty(y)));
			JavascriptExecutor js = (JavascriptExecutor)driver;
			js.executeScript("mobile: tap", captureCameraCodes);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	//Java_Script_Keycodes
	public static void Java_script_keycode_onsec(String x, String y)
	{
		try
		{
			captureCameraCodes.put("tapCount", new Double("1.0"));
			captureCameraCodes.put("touchCount", new Double("1.0"));
			captureCameraCodes.put("duration", new Double("1.0"));
			captureCameraCodes.put("x", new Double(CONFIG.getProperty(x)));
			captureCameraCodes.put("y", new Double(CONFIG.getProperty(y)));
			JavascriptExecutor js = (JavascriptExecutor)driver;
			js.executeScript("mobile: tap", captureCameraCodes);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	
	//hideKeyboard
	
	public boolean hideKeyboard()
	{
		try
		{
			driver.hideKeyboard();
			return true;
		}
		catch(Exception e)
		{
			e.printStackTrace();	
			return false;
		}
	}
	
	//Touch_Action_WebElement_X_Y
	public boolean Touch_action_webelement(String xPathType)
	{
		try
		{
			TouchAction act = new TouchAction(driver);
			WebElement element = driver.findElement(By.xpath(OR.getProperty(xPathType)));
			act.press(element).release().perform();
			return true;
		}
		catch(Exception e)
		{
			e.printStackTrace();	
			return false;
		}
	}
	
	public boolean Touch_action_webelements(String xPathType)
	{
		try
		{
			TouchAction act = new TouchAction(driver);
			List<WebElement> elements = driver.findElements(By.xpath(OR.getProperty(xPathType)));
			WebElement element = elements.get(elements.size()-1);
			act.press(element).release().perform();
			return true;
		}
		catch(Exception e)
		{
			e.printStackTrace();	
			return false;
		}
	}
	
	//Java_Script_Keycodes_video
	public static void Java_script_keycode_video(String x, String y, String duration)
	{
		try
		{
			captureCameraCodes.put("tapCount", new Double("1.0"));
			captureCameraCodes.put("touchCount", new Double("1.0"));
			captureCameraCodes.put("duration", new Double(CONFIG.getProperty(duration)));
			captureCameraCodes.put("x", new Double(CONFIG.getProperty(x)));
			captureCameraCodes.put("y", new Double(CONFIG.getProperty(y)));
			JavascriptExecutor js = (JavascriptExecutor)driver;
			js.executeScript("mobile: tap", captureCameraCodes);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	//removeapp
	public boolean removeApp(String xpathType)
	{
		try
		{
			driver.removeApp(OR.getProperty(xpathType));
			return true;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}
	public boolean Appinstalled(String BID)
	{
		try {
			boolean IsappInstalled = driver.isAppInstalled(OR.getProperty(BID));
			System.out.println("App is installed or not --> " + IsappInstalled);
			Assert.assertTrue("App not installed", IsappInstalled);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	//AssertEqual- Get Yubl
	//AssertTrue- GetText with expected text
	public boolean assert_Equals_Text(String xpathType, String text)
	{
		try{
			
			//new WebDriverWait(driver,10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath(OR.getProperty(Xpath))));
			Assert.assertEquals(driver.findElement(By.xpath(OR.getProperty(xpathType))).getText(), CONFIG.getProperty(text));
			return true;
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
			return false;
		}
	}

	//AssertTrue- Getclass with expected text
	public boolean assert_Equals_Class(String xpathType, String text)
	{
		try{
			
			//new WebDriverWait(driver,10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath(OR.getProperty(Xpath))));
			Assert.assertEquals(driver.findElement(By.xpath(OR.getProperty(xpathType))).getClass(), CONFIG.getProperty(text));
			return true;
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("Assert xpath element in OR properties and Class Equals executing false results");
			return false;
		}
	}
	
	public boolean isElementPresent(String xpathType)
	{
		int count = driver.findElements(By.xpath(OR.getProperty(xpathType))).size();
		if(count == 0)
			return false;
		else 
				return true;
	}

	
	//AssertTrue- List of Conversations with expectedText
	public boolean list_conversationsassert_Equals(String xpathType, String text)
	{
		try{
			List<WebElement> UIATableCell = driver.findElements(By.className("UIATableCell")); 
			List<WebElement> UIAStaticText = UIATableCell.get(UIATableCell.size()-1).findElements(By.className(OR.getProperty(xpathType)));
			String lastElement = UIAStaticText.get(UIAStaticText.size()-3).getText(); 
			
			Assert.assertEquals(lastElement, CONFIG.getProperty(text));
			return true;
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
			return false;
		}
	}
	
	
	//AssertTrue- List of Conversations with expectedText
	public boolean list_conversationsassert_Equals_firstelement(String text)
	{
		try{
			List<WebElement> UIATableCell = driver.findElements(By.xpath("//UIATableCell/UIAStaticText[1]")); 
			for(WebElement cell: UIATableCell)
			{
				String myelement = cell.getText();
				Assert.assertEquals(myelement, CONFIG.getProperty(text));
				
			}
			return true;
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
			return false;
		}
	}
	
	
	//AssertTrue- List of Conversations with expectedText
	public boolean list_conversationsassert_Equals_thirdelement(String xpathType, String text)
	{
		try{
			List<WebElement> UIATableCell = driver.findElements(By.className("UIATableCell")); 
			List<WebElement> UIAStaticText = UIATableCell.get(UIATableCell.size()-1).findElements(By.className(OR.getProperty(xpathType)));
			String lastElement = UIAStaticText.get(UIAStaticText.size()-4).getText(); 
			
			Assert.assertEquals(lastElement, CONFIG.getProperty(text));
			return true;
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
			return false;
		}
	}
	
	//AssertTrue- List of Conversations with expectedText
		public boolean list_conversationsassert_Equals_sixelement(String xpathType, String text)
		{
			try{
				List<WebElement> UIATableCell = driver.findElements(By.className("UIATableCell")); 
				List<WebElement> UIAStaticText = UIATableCell.get(UIATableCell.size()-1).findElements(By.className(OR.getProperty(xpathType)));
				String lastElement = UIAStaticText.get(UIAStaticText.size()-6).getText(); 
				
				Assert.assertEquals(lastElement, CONFIG.getProperty(text));
				return true;
			}catch(Exception e){
				e.printStackTrace();
				System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
				return false;
			}
		}
		
		//AssertTrue- List of Conversations with expectedText
		public boolean list_conversationsassert_Equals_seventhElement(String xpathType, String text)
		{
			try{
				List<WebElement> UIATableCell = driver.findElements(By.className("UIATableCell")); 
				List<WebElement> UIAStaticText = UIATableCell.get(UIATableCell.size()-1).findElements(By.className(OR.getProperty(xpathType)));
				String lastElement = UIAStaticText.get(UIAStaticText.size()-7).getText(); 
				
				Assert.assertEquals(lastElement, CONFIG.getProperty(text));
				return true;
			}catch(Exception e){
				e.printStackTrace();
				System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
				return false;
			}
		}
		
	//Dimensions with x and y coordinates
	public boolean dimensions_withx_y_Coordinate(String xpathType1, String xpathType2)
	{
		try{
			int height = driver.findElement(By.xpath(OR.getProperty(xpathType1))).getSize().getHeight();
			int width = driver.findElement(By.xpath(OR.getProperty(xpathType2))).getSize().getWidth();
			System.out.println("Height--> "+height+" <---> Width--> "+width);
			return true;
		}catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}
	
	//Dimensions with x and y coordinates
		public boolean dimensions_withx_y_Coordinate_duplicate(String xpathType1, String xpathType2)
		{
			try{
				int height = driver.findElement(By.xpath(OR.getProperty(xpathType1))).getSize().getHeight();
				int width = driver.findElement(By.xpath(OR.getProperty(xpathType2))).getSize().getWidth();
				System.out.println("Height--> "+height+" <---> Width--> "+width);
				return true;
			}catch(Exception e){
				e.printStackTrace();
				return false;
			}
		}
	
	//Assertions with x and y coordinates
	public void assert_dimension_withx_y_Coordinate(String xpathType1, String xpathType2, String xpathType3, String xpathType4)
	{
		try{
			int height = driver.findElement(By.xpath(OR.getProperty(xpathType1))).getSize().getHeight();
			int width = driver.findElement(By.xpath(OR.getProperty(xpathType2))).getSize().getWidth();
			//System.out.println("xCoordinate-->"+height+"yCoordinate-->"+width);
			
			int height1 = driver.findElement(By.xpath(OR.getProperty(xpathType3))).getSize().getHeight();
			int width1 = driver.findElement(By.xpath(OR.getProperty(xpathType4))).getSize().getWidth();
			System.out.println("xCoordinate-->"+height1+"yCoordinate-->"+width1);
			String actualResult = null;
			if (height != height1)
				actualResult = "Success";
			else 
				actualResult = "Failure";
			
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
		}
		
	}
	
	//AssertTrue- List of Conversations with expectedText
	public boolean list_conversationsassert_Equals_eightelement(String xpathType, String text)
	{
		try{
			List<WebElement> UIATableCell = driver.findElements(By.className("UIATableCell")); 
			List<WebElement> UIAStaticText = UIATableCell.get(UIATableCell.size()-1).findElements(By.className(OR.getProperty(xpathType)));
			String lastElement = UIAStaticText.get(UIAStaticText.size()-8).getText(); 
			Assert.assertEquals(lastElement, CONFIG.getProperty(text));
			return true;
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
			return false;
		}
	}
	
	//Profile_public_used
	
	public boolean profilebefore(String xpathType)
	{
		try{
			List<WebElement> profilebeforeFeeds = driver.findElements(By.xpath(OR.getProperty(xpathType)));
			int profilebeforefeedsValue = profilebeforeFeeds.size();
			System.out.println("profilebeforefeeds--> "+profilebeforefeedsValue);
			return true;
			}
		catch(Exception e){
			e.printStackTrace();
			System.out.println("Profile Before element not found");
			return false;
		}
	}
	
	public boolean profileAfterAssertion(String xpathType)
	{
		try{
			List<WebElement> profilebeforeFeeds = driver.findElements(By.xpath(OR.getProperty(xpathType)));
			int profileafterfeedsValue =profilebeforeFeeds.size();
			System.out.println("profilebeforefeeds--> "+profileafterfeedsValue);
			return true;
			}
		catch(Exception e){
			e.printStackTrace();
			System.out.println("Profile Before element not found");
			return false;
		}
	}
	
	//AssertTrue- List of Conversations with expectedText
	public boolean Tablecell_click_username(String xpathType, String text)
	{
		try{
			List<WebElement> cells = driver.findElements(By.xpath(OR.getProperty(xpathType)));
			for(WebElement cell : cells)
			{
					System.out.println(cell.getText());
					if(cell.getText().equals(CONFIG.getProperty(text)))
					{
						cell.click();
					}
			}
			return true;
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("Assert xpath element in OR properties and Text Equals executing false results");
			return false;
		}
	}
	
	//swipping- hashMap
	public boolean hashMap_swipe_up()
	{
		try{
			WebElement element=driver.findElement(By.className("UIATableCell"));
			JavascriptExecutor js = (JavascriptExecutor) driver;
			HashMap scrollObject = new HashMap();
			scrollObject.put("direction", "up");
			scrollObject.put("element", ((RemoteWebElement) element).getId());
			js.executeScript("mobile: scroll", scrollObject);
			return true;
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("Swiping the element has failed");
			return false;
		}
	}
	
	
	//Screenshot
	public boolean screenShot(String screenShotPath)
	{
	    driver =  (IOSDriver) new Augmenter().augment(driver);
	    //Get the screenshot
	    File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	    System.out.println("Screenshot completed");
	    try {

		    File testScreenShot = new File(CONFIG.getProperty(screenShotPath));
		    //Copy the file to screenshot folder
		    FileUtils.copyFile(scrFile, testScreenShot);
		    return true;
	    }catch (IOException e) 
	    {
	    e.printStackTrace();
	    return false;
	    }
		
	}
	
	
	public boolean screenshot_compare(String screenShotResultPath, String screenShotSourceFilePath) throws InterruptedException, IOException
	{
		driver = (IOSDriver) new Augmenter().augment(driver);
		
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		Thread.sleep(3000);
		
		FileUtils.copyFile(scrFile, new File(OR.getProperty(screenShotResultPath)));

		File fileInput = new File(CONFIG.getProperty(screenShotSourceFilePath));
		File fileOutPut = new File(OR.getProperty(screenShotResultPath));

		BufferedImage bufileInput = ImageIO.read(fileInput);
		DataBuffer dafileInput = bufileInput.getData().getDataBuffer();

		int sizefileInput = dafileInput.getSize();
		BufferedImage bufileOutPut = ImageIO.read(fileOutPut);
		DataBuffer dafileOutPut = bufileOutPut.getData().getDataBuffer();
		int sizefileOutPut = dafileOutPut.getSize();
		Boolean matchFlag = true;

		if (sizefileInput == sizefileOutPut) {
			for (int j = 0; j < sizefileInput; j++) {
				if (dafileInput.getElem(j) != dafileOutPut.getElem(j)) {
					matchFlag = false;
					break;
				}
			}
		} else
			matchFlag = false;
		Assert.assertTrue("Images are not same", matchFlag);
		return false;
			          
	}
	
}
