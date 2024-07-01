function paye(taxableIncome) {
    let paye = 0;
    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.10;
    } else if (taxableIncome <= 32333) {
        paye = 2400 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
        paye = 4483.25 + (taxableIncome - 32333) * 0.30;
    } else if (taxableIncome <= 800000) {
        paye = 144783.35 + (taxableIncome - 500000) * 0.325;
    } else {
        paye = 242083.25 + (taxableIncome - 800000) * 0.35;
    }
    return paye;
}

function nhif(grossSalary) {
    let nhif = 0;

    if (grossSalary <= 5999) {nhif = 150;} 
    else if (grossSalary <= 7999) {nhif = 300;}
    else if (grossSalary <= 11999) {nhif = 400;}
    else if (grossSalary <= 14999) {nhif = 500;}
    else if (grossSalary <= 19999) {nhif = 600;} 
    else if (grossSalary <= 24999) {nhif = 750;} 
    else if (grossSalary <= 29999) {nhif = 850;} 
    else if (grossSalary <= 34999) {nhif = 900;}  
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

function nssf(grossSalary) {
    const tier1Limit = 7000;
    const tier2Limit = 36000;

    let nssfTier1 = Math.min(grossSalary, tier1Limit) * 0.06;   // 6% of pensionable pay for both employer and employee
    let nssfTier2 = Math.max(0, Math.min(grossSalary - tier1Limit, tier2Limit - tier1Limit)) * 0.06;

    return nssfTier1 + nssfTier2;
}

function netSalaryCalculator() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
    const grossSalary = basicSalary + benefits;
    const taxableIncome = grossSalary;
    
    const payeAmount = paye(taxableIncome);
    const nhifAmount = nhif(grossSalary);
    const nssfAmount = nssf(grossSalary);

    const personalRelief = 2400; // monthly
    const housingLevy = grossSalary * 0.015; // 1.5% of monthly gross salary as housing levy
    const netSalary = grossSalary - payeAmount - nhifAmount - nssfAmount - housingLevy + personalRelief;
    
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE: ${payeAmount}`);
    console.log(`NHIF: ${nhifAmount}`);
    console.log(`NSSF: ${nssfAmount}`);
    console.log(`Housing Levy: ${housingLevy}`);
    console.log(`Net Salary: ${netSalary}`);
}

netSalaryCalculator();
