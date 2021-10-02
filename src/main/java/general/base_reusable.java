package general;

import static io.restassured.RestAssured.given;

 
 
import io.restassured.response.Response;

 



public class base_reusable {
 
	String url;
	String vechicle_details;
	String one_vechicle_detail;	
	public  Response response;
	public  Response datasetid;
	public  Response vechicle_details_respose;
	String datasetId="datasetId";
	 
	String[] vechicles_array;
	private String datasetId_value;
	
	  
	public  String getdatasetid(String dataid){
		 try{
			 url="http://api.coxauto-interview.com/api/datasetId";
		 datasetid = given().when().get(url);
		  datasetId_value=datasetid.jsonPath().getString(dataid);
		 }
	catch (Exception e){
		 datasetId_value=""; 		 	 
		 }
		 return datasetId_value;
	}
	public  String getallvechicle_details(String arg2,String arg3) ///will get new_deckid id for the newly 
	{
		
	try{
		if (arg3.equals("datasetid")){			 
			url="http://api.coxauto-interview.com/api/"+datasetId_value+"/vehicles";
		}
		else{
			url="http://api.coxauto-interview.com/api/"+""+"/vehicles";
		}	
	
		
	 datasetid = given().when().get(url);
	 vechicle_details=datasetid.jsonPath().getString(arg2);
	}
	catch (Exception e){
		return vechicle_details=""; 		 	 
		 }
		 return vechicle_details;
		 
	}
	//public String get_json_value(String str){
	//	vechicle_details=datasetid.jsonPath().getString(str);
		//return vechicle_details;
//	}
	 public  int response_code(){
		 return datasetid.getStatusCode();
		}
	 public void print_all_details(){
		 try {
		 vechicles_array=vechicle_details.replace("[", "").replace("]", "").split(",");
		  for(String value:vechicles_array){
			 String url="http://api.coxauto-interview.com/api/"+datasetId_value+"/vehicles/"+Integer.parseInt(value.trim());				
				Response datasetid=given().when().get(url);
				response_code();
				System.out.println(value);
				System.out.println(url);	 
				System.out.println(datasetid);
		  }
		 }
		  catch(Exception e){
			  
			  System.out.println(e.getStackTrace());
		  }
		 }
		 

	  
	  
	 	
 }

