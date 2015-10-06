package com.moonpig.bdd;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;


//Runner Class
//Developer : Anil Bheema Dated : 20 April 2015

@RunWith(Cucumber.class)

@Cucumber.Options(features= "/Users/BheemaA/Documents/workspace/maven/moonping_greetingCards/src/test/resources/com/moonpig/bdd/",	
				  tags={"@Smoke1Landing"},
				  format={"html:ouput"})
public class Runner {
	

}


//, @Smoke2HomepageAccount