#  Test
## Install Java
1. Download Java SDK 1.8  https://www.oracle.com/java/technologies/javase-jdk8-downloads.html
2. Select Start -> Computer -> System Properties -> Advanced system settings -> Environment Variables -> System variables -> PATH. set the JAVA_HOME
3. Prepend C:\Program Files\Java\jdk1.6.0_27\bin; to the beginning of the PATH variable.
4. Install Maven https://maven.apache.org/download.cgi 
5. set the MAVEN_HOME path similar to JAVA_HOME 

## Step to download the project:   
Down load the below project https://github.com/rajith2020/cox into youre local system.
1.open the eclipse
2.Click File menu
3.In file menu click Import
4.A window is open Now click General Folder
5.Now click Existing project into workspace
6.Then click the select from root directory
7.Browse the loaction where you dowloaded the project 


## Step to run the project from eclipse
## One method 
 1.Go to testrunner class right click run as JUnit test
## Running through Command line
1.Run->cmd->(Go the path where it present)
2.mvn test
3.Check the output created in the (API_Automation-main\test-outout)
-->Look into Result file

## Result output when you open html
Feature: getting the list of vechiles and datasetId using different combination
Scenario: 1 get list of all the vechiles
Given provided the valid API
When A user perform get request to get "datasetId"
Then A user perform get request to get "vehicleIds" using "datasetid"
Then Verify the response code is 200
Scenario: 3 Get 500 when you not pass the datasetId details
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

## Software requirment:
System installed with eclipse with maven project and assocaited depedences and plugin are added in pom.xml file
