Feature:BRE Service API Test 

	Scenario:6~API Access Authentication~
		Given API : 'Auth Token API'
		When Execute Post API call
		Then Validate API response HTTP status code as '200'
		Then Get 'Auth Token' attribute value from API Response and store in Test-Set scope as 'AuthToken'

	Scenario:7~SR Capacity Deployment Rule for EMEA module~
		Given API : 'BRE Service' using 'BRE Service JSON' Template
		Given Set 'apimodule' attribute value as 'EMEA' in Test-Set scope
		When Update baseURL with 'apimodule' key from Test-Set scope
		When set API attribute 'SR Capacity Deployment Text' value as '10000000 AUD AB/A'
		When set API attribute 'SR Capacity Deployment Limit' value as '10000000 '
		When set API attribute 'SR Capacity Deployment Currency' value as 'AUD '
		When Execute Post API call
		Then Validate API response HTTP status code as '200'
		Then 'SR Capacity Deployment Review Flag' attribute of API response should have value as 'red'

Coupa platform is single portal and has primarily 3 application
MyExpense
MySpend
MyContract

MyExpense
Project Started on Mar 2023
Project Ended on Jul 2023
Last Executed Jan 2024
3 releases supported since Jul 2023, estimated saving of 60-70% bandwidth
6 modules and 20 functionalities covered in 118 TC
Average execution time per testcase is 4min
Once auto approval time becomes consistent constant, 38 TC which needs auto approval will run without manual intervention
All TC can run in un-attended mode and can finish over night itself

MySpend & My contract
MySpend application provides a range of functionalities tailored to manage corporate expenses efficiently. 
Users can utilize the MyContract application to create contracts, such as projects between vendors and Swiss Re.

Project Started on Jan 2024
Project Ended on Mar 2023
Last Executed Apr 2024
7 modules and 7 corefunctionalities covered in 80 TC
Average execution time per testcase is 4min
Automation team is suggesting another 20 TC to increase the coverage
2 releases supported since Apr 2024, estimated saving of 60-70% bandwidth


Framework has high reusability libraries
Highly configurable, key features
Browser Selection
Health-check before execution
Capturing pass Vs fail screenshots along with size optimization
Leverage Global recognized cucumber framework
Offers the capability to tag test cases. With just one click, users can execute the entire suite or specifically tagged test cases
Code written in JAVA scalable to python, ruby
User friendly reports in html gets published 
Enabled functionality based execution
Supports multiple language validation
Internet Scalable 
Detail documentation enable new joiner to become productive in short span
Execution reports integration with cloud based Power BI dashboard
Ability to create and clean the test data
10+ resources are trained and available 


Best Practices :
Weekly Reporting & Stakeholder Engagement​
Consistent distribution of weekly status reports to stakeholders.​
Active participation in MySpends  progress and review meetings​
Risk Mitigation​
Active highlighting of potential risks to preempt any unfavorable outcomes.​
Transparency
Enhanced transparency through high visibility maintained via a comprehensive Wiki page.​
Demo Sessions​
Regular demonstration sessions to showcase the power and efficacy of automated event creation.​
Browsing Flexibility
Scripts execution is not reliant on specific browsers, ensuring maximum reach and compatibility. Supports Edge & Chrome​​​





az-dev.infoapps.io
https://az-dev.infoapps.io/#/download/test-automation-ts
