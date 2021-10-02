Feature: getting the list of vechiles and datasetId using different combination

Scenario: 1 get list of all the vechiles
	Given provided the valid API  
	When A user perform get request to get "datasetId"
	Then A user perform get request to get "vehicleIds" using "datasetid"
	Then Verify the response code is 200
	
Scenario: 3 Get 500 when you not pass the datasetId  details
	Given provided the valid API  
	When A user perform get request to get "datasetId"
	Then A user perform get request to get "vehicleIds" not using "datasetid"
	Then Verify the response code is 404
 
Scenario: 2 Get list of all vechclie details
	Given provided the valid API  
	When A user perform get request to get "datasetId"
	Then A user perform get request to get "vehicleIds" using "datasetid"
	Then Verify the sigle vechle pulled using datasetid and vehicleid
	Then Verify the response code is 200
	 
	


	