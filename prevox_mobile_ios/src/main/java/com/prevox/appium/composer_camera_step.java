package com.prevox.appium;

import com.prevox.appium.util.composer_page;
import com.prevox.appium.util.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;

public class composer_camera_step {
	
	
	 webConnector connector = new webConnector();
	 composer_page composer = new composer_page();
	 
	 @When("^I capture the picture with \"([^\"]*)\" and \"([^\"]*)\"$")
	 public void I_capture_the_picture(String x, String y)
	 {
		System.out.println("I capture the picture with "+x+" and "+y);
		connector.Java_script_keycode(x, y);
	 }
	@When("^I select a firstperson with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void I_select_firstperson(String x, String y)
	{
		System.out.println("I select a firstperson with "+x+" and "+y);
		connector.Java_script_keycode_onsec(x, y);
	}
	 @When("^I capture the video with \"([^\"]*)\" and \"([^\"]*)\" for \"([^\"]*)\"$")
	 public void I_capture_the_video(String x, String y, String duration)
	 {
		System.out.println("I capture the picture with "+x+" and "+y +" for "+duration);
		connector.Java_script_keycode_video(x, y, duration);
	 }
	 @And("^Select a \"([^\"]*)\" from gallery$")
	 	public void Select_the_photo(String object)
	 	{
		 System.out.println("Select a "+object+ " from gallery");
		 composer.list_photos(object);
	 	}
	 @And("^Select a \"([^\"]*)\" from photogallery$")
	 	public void Select_the_photo_gallery(String object)
	 	{
		 System.out.println("Select a "+object+ " from photoGallery");
		 composer.list_photos_gallery(object);
	 	}
	 
	 @And("^Select a \"([^\"]*)\" from conversations$")
	 	public void Select_the_conversation(String object)
	 	{
		 System.out.println("Select a "+object+ " from photoGallery");
		 composer.list_conversation(object);
	 	}
	 @When("^I select \"([^\"]*)\" from conversation$")
		public void Select_a_person(String object)
	 	{
		 System.out.println("Select a "+object+ " from conversation");
		 composer.list_photos(object);
	 	}
	 @And("^Select a \"([^\"]*)\" from videogallery$")
	 	public void Select_the_video(String object)
	 	{
		 System.out.println("Select a "+object+ " from videogallery");
		 composer.list_photos(object);
	 	}
}
