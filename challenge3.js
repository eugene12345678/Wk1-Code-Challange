function PAYE(taxableIncome) {
    let paye = 0;
    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.10;
    } else if (taxableIncome <= 32333) {
        paye = 2400 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
        paye = 4225 + (taxableIncome - 32333) * 0.30;
    } else if (taxableIncome <= 800000) {
        paye = 134925 + (taxableIncome - 500000) * 0.325;
    } else {
        paye = 232425 + (taxableIncome - 800000) * 0.35;
    }
    return paye;
}

function NHIF(grossSalary) {
    let nhif = 0;

    if (grossSalary <= 5999) {nhif = 150;} 
    else if (grossSalary <= 7999) {nhif = 300;}
    else if (grossSalary <= 11999) {nhif = 400;}
    else if (grossSalary <= 14999) {nhif = 500;}
    else if (grossSalary <= 19999) {nhif = 600;} 
    else if (grossSalary <= 24999) {nhif = 750;} 
    else if (grossSalary <= 29999) {nhif = 850;} 
    else if (grossSalary <= 34999) {nhif = 900;}  // NHIF deduction based on gross salary brackets
    else if (grossSalary <= 39999) {nhif = 950;} 
    else if (grossSalary <= 44999) {nhif = 1000;} 
    else if (grossSalary <= 49999) {nhif = 1100;} 
    else if (grossSalary <= 59999) {nhif = 1200;} 
    else if (grossSalary <= 69999) {nhif = 1300;} 
    else if (grossSalary <= 79999) {nhif = 1400;} 
    else if (grossSalary <= 89999) {nhif = 1500;} 
    else if (grossSalary <= 99999) {nhif = 1600;} 
    else {
        nhif = 1700;
    }

    return nhif;
}
function NSSF(grossSalary) {
    const tier1Limit = 7000;
    const tier2Limit = 36000;

    let nssfTier1 = Math.min(grossSalary, tier1Limit) * 0.06;   //6% of pensionable pay for both employer and employee
    let nssfTier2 = Math.max(0, Math.min(grossSalary - tier1Limit, tier2Limit - tier1Limit)) * 0.06;

    return nssfTier1 + nssfTier2;
}
function netSalaryCalculator() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
    const grossSalary = basicSalary + benefits;
    const taxableIncome = grossSalary;
    
    const paye = PAYE(taxableIncome);
    const nhif = NHIF(grossSalary);
    const nssf = NSSF(grossSalary);

    const personalRelief = 2400; // monthly
    const housingLevy = grossSalary * 0.015; // 1.5% of monthly gross salary as housing levy
    const netSalary = grossSalary - paye - nhif - nssf - housingLevy + personalRelief;
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE: ${paye}`);
    console.log(`NHIF: ${nhif}`);
    console.log(`NSSF: ${nssf}`);
    console.log(`Housing Levy: ${housingLevy}`);
    console.log(`Net Salary: ${netSalary}`);
}

netSalaryCalculator();

