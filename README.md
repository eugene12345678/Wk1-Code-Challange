# Code Challenges README
- This README provides detailed instructions and descriptions for three programming challenges: Student Grade Generator, Speed Detector, and Net Salary Calculator.

## Installation and Running the Code
- To run these challenges, you need to have Node.js installed on your machine. If you haven't installed Node.js yet, you can download it from nodejs.org.
- For installation, you need to clone he repository from GitHub using the command git clone git@github.com:eugene12345678/Wk1-Code-Challenge.git. Enter the link fork the repository, find the ssh link then open the cloned repository in your code editor.

### Challenge 1: Student Grade Generator
#### Description
- The studentGradeGenerator function prompts the user for marks, validates the input, and assigns the appropriate grade based on the following criteria:
 - A: 80 and above
 - B: 60 to 79
 - C: 50 to 59
 - D: 40 to 49
 - E: below 40
#### Functionality
1. Open the challenge1.js file in a code editor.
2. Run the program using Node.js.
3. Prompts the user to input student marks (0-100).
4. Validates that the input marks are within the valid range (0-100).
5. Assigns a grade based on predefined score ranges.
6. Prints the calculated grade to the console.
#### Checking for Errors
- The program checks for and handles the following errors:
  - The user enters an invalid number for the marks.
  - The user enters a value less than zero or more than 100.
- Displays an error message for invalid inputs and prompts the user to enter valid marks.

### Challenge 2: Speed Detector
#### Description
- The speedDetector function prompts the user for the speed of a car, validates the input, and performs the following actions based on the speed input:
Prints "Ok" if the speed is below 70.
- Calculates demerit points (1 point for every 5 km/h over the limit) if the speed exceeds 70.
- Suspends the license if demerit points exceed 12.
#### Functionality
1. Open the speed-detector.js file in a code editor.
2. Run the program using Node.js.
3. Enter the speed of the car when prompted.
4. Validates that the input is a valid numeric speed.
5. Checks if the speed is below 70 and prints "Ok" if true.
6. If the speed exceeds 70, calculates demerit points and checks if they exceed 12.
7. Prints the appropriate message based on the calculated demerit points.
#### Checking for Errors
- The program checks for and handles the following errors:
 - The user enters a non-numeric value for the speed.
 - The user enters a negative speed.
- Logs an error message for invalid inputs and prompts the user to enter a valid speed.

### Challenge 3: Net Salary Calculator
#### Description
The netSalaryCalculator function calculates an individual's net salary based on the following components:
 - Basic salary
 - Benefits
 - PAYE (Tax)
 - NHIF deductions
 - NSSF deductions
 - Housing levy

#### Functionality
1. Open the challenge3.js file in a code editor.
2. Run the program using Node.js.
3. Enter the basic salary and benefits when prompted.
4. Calculates deductions (PAYE, NHIF, NSSF, Housing levy) based on predefined rules and rates.
5. Displays the calculated gross salary, deductions, and net salary.
#### Calculations
1. PAYE: Progressive tax rates based on monthly taxable income.
2. NHIF: Deductions based on predefined gross pay brackets.
3. NSSF: Contributions divided into Tier I and Tier II based on gross salary.
4. Housing Levy: 1.5% of gross salary.
#### Checking for Errors
- The program checks for and handles the following errors:
 - The user enters a non-numeric value for the salary or benefits.
 - The user enters a negative value for the salary or benefits.
-   an error message for invalid inputs and prompts the user to enter valid numeric values for salary and benefits.
#### Resources
1. PAYE Tax Rates
2. KRA PAYE Calculator
#### Functions Used
- parseInt(): Parses a string and returns an integer.
- parseFloat(): Parses a string and returns a floating-point number.
- prompt(): Displays a dialog box that prompts the user for input.
- Math.min(), Math.max(), Math.floor(): Mathematical functions for calculations.

* AUTHOR 
 Eugene Mathenge