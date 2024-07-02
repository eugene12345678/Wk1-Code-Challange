function studentgradeGenerator() {
    // Prompt the user to enter student marks and convert input to integer
    const marks = parseInt(prompt("Enter student marks:"));
    
    // Validate input: check if marks is not a number or if it's outside the valid range (0-100)
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.error("Invalid input. Please enter marks between 0 and 100.");
        return;
    }

    let grade;

    // Determine grade based on the marks entered
    if (marks > 79) {
        grade = 'A'; 
    } else if (marks >= 60) {
        grade = 'B'; 
    } else if (marks >= 50) {
        grade = 'C'; 
    } else if (marks >= 40) {
        grade = 'D'; 
    } else {
        grade = 'E'; // Assign 'E' grade for marks below 40
    }

    console.log(`Grade: ${grade}`);
}

// Call the studentgradeGenerator function to execute it
studentgradeGenerator();
