# Challenge 1: Student Grade Generator
### Description
The studentGradeGenerator function prompts the user for marks, validates the input, and assigns the appropriate grade based on the following criteria:

A: 80 and above
B: 60 to 79
C: 50 to 59
D: 40 to 49
E: below 40
#### Functionality
Prompts the user to input student marks (0-100).
Validates that the input marks are within the valid range (0-100).
Assigns a grade based on predefined score ranges.
Prints the calculated grade to the console.
# Challenge 2: Speed Detector
### Description
The speedDetector function prompts the user for the speed of a car, validates the input, and performs the following actions based on the speed input:

Prints "Ok" if the speed is below 70.
Calculates demerit points (1 point for every 5 km/h over the limit) if the speed exceeds 70.
Suspends the license if demerit points exceed 12.
#### Functionality
Takes the speed of a car as input.
Validates that the input is a valid numeric speed.
Checks if the speed is below 70 and prints "Ok" if true.
If the speed exceeds 70, calculates demerit points and checks if they exceed 12.
Prints the appropriate message based on the calculated demerit points.
# Challenge 3: Net Salary Calculator
### Description
The netSalaryCalculator function calculates an individual's net salary based on the following components:

Basic salary
Benefits
PAYE (Tax)
NHIF deductions
NSSF deductions
Housing levy
#### Calculations
PAYE: Progressive tax rates based on monthly taxable income.
NHIF: Deductions based on predefined gross pay brackets.
NSSF: Contributions divided into Tier I and Tier II based on gross salary.
Housing Levy: 1.5% of gross salary.
Resources
PAYE Tax Rates
KRA PAYE Calculator
#### Functions Used
parseInt(): Parses a string and returns an integer.
parseFloat(): Parses a string and returns a floating-point number.
prompt(): Displays a dialog box that prompts the user for input.
Math.min(), Math.max(), Math.floor(): Mathematical functions for calculations.
