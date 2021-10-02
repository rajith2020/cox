 package StepDef;
 import java.util.ArrayList;

import org.junit.Assert;
 
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import general.base_reusable;
import io.restassured.response.Response;

 
public class vechicles extends base_reusable    {
	
	String endpoint;	
	String url;	 

	static int numbe;
	public static Response draw_response;
	ArrayList<Integer> vech;
	 
	@Given("^provided the valid API$")
	public void provided_the_valid_API() throws Throwable {
		 
	     
	}
	@Then("^A user perform get request to get \"([^\"]*)\" using \"([^\"]*)\"$")
	public void A_user_perform_get_request_to_get_using(String arg1, String arg2){
		getallvechicle_details(arg1,arg2);
	}

	@When("^A user perform get request to get \"([^\"]*)\"$")
	public void A_user_perform_get_request_to_get(String dataid) throws Throwable {
		System.out.println(getdatasetid(dataid));
		 
	     
	}
	@Then("^A user perform get request to get \"([^\"]*)\" not using \"([^\"]*)\"$")
	public void A_user_perform_get_request_to_get_not_using(String arg1, String arg2) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		getallvechicle_details(arg1,"");
		
	}
	 
		 
  

	@Then("^Verify the response code is (\\d+)$")
	public void Verify_the_response_code_is(int arg1) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		 
		Assert.assertEquals(arg1,response_code());
	} 

	@Then("^Verify the sigle vechle pulled using datasetid and vehicleid$")
	public void Verify_the_sigle_vechle_pulled_using_datasetid_and_vehicleid() throws Throwable {
		 print_all_details();
		
	}


		 
	}

