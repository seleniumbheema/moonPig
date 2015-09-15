package com.prevox.appium;

import java.io.IOException;

import com.prevox.appium.util.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class composer_conversation_step 


{
	webConnector connector = new webConnector();
	
	
	 
	 @And("^I compare \"([^\"]*)\" with \"([^\"]*)\"$")
	 public void screenshot_compare(String resultPath, String sourcePath) throws InterruptedException, IOException
	 {
		 System.out.println("I compare "+ resultPath+" with "+ sourcePath);
		 connector.screenshot_compare(resultPath, sourcePath);
	 }
	 
	 
	 @And("^I check \"([^\"]*)\" with \"([^\"]*)\" on receiverPage for element$")
		public void I_check_composedText_with_Yubltext(String xpath, String text) {
			System.out.println("I check " + xpath + " with " + text
					+ " on receiverPage for element");
			connector.list_conversationsassert_Equals_eightelement(xpath, text);
		}
	 
	 @And("^I enter \"([^\"]*)\" as \"([^\"]*)\" for conversation$")
	 public void I_enter_text_for_conversation(String xpath, String text)
	 {
		 System.out.println("I enter "+xpath+" as "+text+" for conversation");
		 connector.IosUIAutomation_input(xpath, text);
	 }

	 @And("^I click on \"([^\"]*)\" on receiverPage$")
	 public void I_click_on_receiverpage(String object)
		{
			System.out.println("I click on "+ object+" receiverpage");
			connector.list_conversations_click(object);
		}	
	 
	 
 
	 public void I_check_miniComposer(String object1, String object2)
		{
			System.out.println("I check "+ object1+" and "+ object2+" of miniComposer");
			connector.dimensions_withx_y_Coordinate(object1, object2);

		}	
	 @And("^I check \"([^\"]*)\" and \"([^\"]*)\" of Composer$")
	 public void I_check_Composer(String object1, String object2)
		{
			System.out.println("I check "+ object1+" and "+ object2+" of Composer");
			connector.dimensions_withx_y_Coordinate(object1, object2);

		}	
	 
	 @Then("^I check \"([^\"]*)\" with \"([^\"]*)\" and \"([^\"]*)\" with \"([^\"]*)\" of Composer$")
	 public void I_check_composer_with_miniComposer(String object1, String object2, String object3, String object4)
		{
			System.out.println("I check "+ object1+" with "+ object2+" and "+object3+" with "+object4+" of Composer");
			connector.assert_dimension_withx_y_Coordinate(object1, object2, object3, object4);

		}
	 
	 
}
