package com.prevox.appium.util;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class composer_page {

	webConnector connector = new webConnector();
	WebDriver driver = null;
	
	 //UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIATableView[1]/UIATableCell[
	public void list_photos(String object)
	{
		List<WebElement> photos = connector.list_webElements(object);
		photos.get(photos.size()-2).click();
		
	}
	public void list_conversation(String object)
	{
		connector.Touch_action_webelements(object);
		
	}
	public void list_photos_gallery(String object)
	{
		List<WebElement> photos = connector.list_webElements(object);
		photos.get(photos.size()-3).click();
		
	}
	
	public void list_videos_gallery(String object)
	{
		List<WebElement> videos = connector.list_webElements(object);
		videos.get(videos.size()-1).click();
		
	}
	
}




