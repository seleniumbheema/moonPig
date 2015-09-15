package com.prevox.yubl.appium;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.deps.com.thoughtworks.xstream.core.Caching;

//Runner Class
@RunWith(Cucumber.class)
@Cucumber.Options(format={"html:ouput"},features= "/Users/BheemaA/Documents/workspace/maven/prevox_yubl_android/src/main/resources/com/prevox/yubl/appium",
tags = {"@Smoke1Login,@Smoke4composerRecentNewConversation, @Smoke4IcomposerNewConversationSearch"})
public class Runner 
{

}
