$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/Feature/Vehicle.feature");
formatter.feature({
  "line": 1,
  "name": "getting the list of vechiles and datasetId using different combination",
  "description": "",
  "id": "getting-the-list-of-vechiles-and-datasetid-using-different-combination",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "1 get list of all the vechiles",
  "description": "",
  "id": "getting-the-list-of-vechiles-and-datasetid-using-different-combination;1-get-list-of-all-the-vechiles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "provided the valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "A user perform get request to get \"datasetId\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "A user perform get request to get \"vehicleIds\" using \"datasetid\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "vechicles.provided_the_valid_API()"
});
formatter.result({
  "duration": 289572962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "datasetId",
      "offset": 35
    }
  ],
  "location": "vechicles.A_user_perform_get_request_to_get(String)"
});
formatter.result({
  "duration": 5859800114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vehicleIds",
      "offset": 35
    },
    {
      "val": "datasetid",
      "offset": 54
    }
  ],
  "location": "vechicles.A_user_perform_get_request_to_get_using(String,String)"
});
formatter.result({
  "duration": 295195066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "vechicles.Verify_the_response_code_is(int)"
});
formatter.result({
  "duration": 5223998,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "3 Get 500 when you not pass the datasetId  details",
  "description": "",
  "id": "getting-the-list-of-vechiles-and-datasetid-using-different-combination;3-get-500-when-you-not-pass-the-datasetid--details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "provided the valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "A user perform get request to get \"datasetId\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "A user perform get request to get \"vehicleIds\" not using \"datasetid\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify the response code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "vechicles.provided_the_valid_API()"
});
formatter.result({
  "duration": 55637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "datasetId",
      "offset": 35
    }
  ],
  "location": "vechicles.A_user_perform_get_request_to_get(String)"
});
formatter.result({
  "duration": 226081207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vehicleIds",
      "offset": 35
    },
    {
      "val": "datasetid",
      "offset": 58
    }
  ],
  "location": "vechicles.A_user_perform_get_request_to_get_not_using(String,String)"
});
formatter.result({
  "duration": 120761815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 28
    }
  ],
  "location": "vechicles.Verify_the_response_code_is(int)"
});
formatter.result({
  "duration": 224711,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "2 Get list of all vechclie details",
  "description": "",
  "id": "getting-the-list-of-vechiles-and-datasetid-using-different-combination;2-get-list-of-all-vechclie-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "provided the valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "A user perform get request to get \"datasetId\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "A user perform get request to get \"vehicleIds\" using \"datasetid\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify the sigle vechle pulled using datasetid and vehicleid",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "vechicles.provided_the_valid_API()"
});
formatter.result({
  "duration": 50777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "datasetId",
      "offset": 35
    }
  ],
  "location": "vechicles.A_user_perform_get_request_to_get(String)"
});
formatter.result({
  "duration": 79729309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vehicleIds",
      "offset": 35
    },
    {
      "val": "datasetid",
      "offset": 54
    }
  ],
  "location": "vechicles.A_user_perform_get_request_to_get_using(String,String)"
});
formatter.result({
  "duration": 88877113,
  "status": "passed"
});
formatter.match({
  "location": "vechicles.Verify_the_sigle_vechle_pulled_using_datasetid_and_vehicleid()"
});
formatter.result({
  "duration": 21606259830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "vechicles.Verify_the_response_code_is(int)"
});
formatter.result({
  "duration": 260362,
  "status": "passed"
});
});