#  Test
## Install Java
1. Download Java SDK 1.8  https://www.oracle.com/java/technologies/javase-jdk8-downloads.html
2. Select Start -> Computer -> System Properties -> Advanced system settings -> Environment Variables -> System variables -> PATH. set the JAVA_HOME
3. Prepend C:\Program Files\Java\jdk1.6.0_27\bin; to the beginning of the PATH variable.
4. Install Maven https://maven.apache.org/download.cgi 
5. set the MAVEN_HOME path similar to JAVA_HOME 

## Step to download the project:   
Down load the below project https://github.com/Rajith84/FINRA_API_Assignment into youre local system.
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
Feature: Create of new cards with joker and with or without joker
@TestcaseId1 Scenario: 1 Create of new cards with valid end point
@TestcaseId1 Scenario: 2 validate the invalid end point for new cards
@TestcaseId1 Scenario: 3 validate of new cards with invalid end point with jokers_enabled=true
@TestcaseId1 Scenario: 4 validate of new cards with end point with jokers_enabled=true
@TestcaseId1 Scenario: 5 Invalid end point or resource not found
@TestcaseId1 Scenario: 6 Create of new cards with invalid end point end point with jokers_enabled=true
 Feature: Draw one or more cards from the avaible deck
@TestcaseId2 Scenario: 1 Create of new cards with valid end point
@TestcaseId2 Scenario: 2 draw the deck count is 4
@TestcaseId2 Scenario: 3 draw the deck count is 52
@TestcaseId2 Scenario: 4 draw the deck count is 53 and error message should be displayed "Not enough cards remaining to draw 53 additional"
@TestcaseId2 Scenario: 5 draw the deck count is 52
@TestcaseId2 Scenario: 6 Create of new cards with valid end point along with jokers_enabled
@TestcaseId2 Scenario: 7 draw the deck count is 56 and error message should be displayed "Not enough cards remaining to draw 56 additional"
@TestcaseId2 Scenario: 7 draw the deck count is 4
Given Get the reaming count of the deck
Then Draw the 4 cards from the avaible deck_id by postrequest
And verify response code 200
Then Validate the response body for the "Drawncard" remaing value 0
Then error messsage should be displayed "Not enough cards remaining to draw 4 additional"
@TestcaseId2 Scenario: 8 500 error for cards along with jokers_enabled=true
@TestcaseId2 Scenario: 9 404 error for cards along with jokers_enabled=true

## Software requirment:
System installed with eclipse with maven project and assocaited depedences and plugin are added in pom.xml file
