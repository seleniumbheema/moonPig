package com.prevox.appium;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.deps.com.thoughtworks.xstream.core.Caching;

//Runner Class

@RunWith(Cucumber.class)
@Cucumber.Options(format={"html:ouput"},features= "/Users/BheemaA/Documents/workspace/maven/prevox_mobile_ios/src/test/resources/com/prevox/appium",
				tags = {"@SmokeCreateNewConversation"})
public class Runner 
{

}
