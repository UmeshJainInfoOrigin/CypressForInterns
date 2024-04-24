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
3 releases supported since Jul 2023
6 modules and 20 functionalities covered in 118 TC
Average execution time per testcase is 4min
