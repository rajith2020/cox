package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features= "."  
		,glue={"StepDef"}///Path of test definition  
		,format={"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}
		 ,monochrome = true// display the console out put in a roper way
		,strict = true //Will check if any step definition is missed in step definition file
		,dryRun = false //will check the mapping feature file and step definition file
		//,tags={"@regression,@sanity	"}	//differentiate the run like regression and sanity and also can do parallel  execution    
		)// Hooks is special script functions that run before or after for test cases
 
public class TestRunner {

}
