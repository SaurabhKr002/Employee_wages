const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;

// Helper function to get work hours
const getWorkHours = (empCheck) => 
    empCheck === 1 ? PART_TIME_HOURS : empCheck === 2 ? FULL_TIME_HOURS : 0;

// Store employee daily work details as an array of objects
let empWorkData = [];

let totalEmpHours = 0;
let totalWorkingDays = 0;

// Simulate work for each day
while (totalEmpHours <= MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Random 0,1,2
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;
    totalEmpHours += empHours;

    // Store in array as object
    empWorkData.push({ day: totalWorkingDays, hoursWorked: empHours, wageEarned: dailyWage });
}

// Calculate Total Wage using reduce helper function
const calcTotalWage = () => empWorkData.reduce((total, day) => total + day.wageEarned, 0);
console.log("Total Wage:", calcTotalWage());

// Show Days along with Daily Wage using map helper function
const dailyWages = empWorkData.map(({ day, wageEarned }) => `Day ${day}: $${wageEarned}`);
console.log("Daily Wages:", dailyWages);

// Show Days when Full-Time Wage was earned (160) using filter
const fullTimeDays = empWorkData
    .filter(({ wageEarned }) => wageEarned === FULL_TIME_WAGE)
    .map(({ day }) => `Day ${day}`);
console.log("Full Time Wage Days:", fullTimeDays);

// Find First Occurrence of Full-Time Wage
const firstFullTimeDay = empWorkData.find(({ wageEarned }) => wageEarned === FULL_TIME_WAGE);
console.log("First Full Time Wage Earned On:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "None");

// Check if Every Full-Time Wage Entry is 160
const isAllFullTimeWage = empWorkData
    .filter(({ hoursWorked }) => hoursWorked === FULL_TIME_HOURS)
    .every(({ wageEarned }) => wageEarned === FULL_TIME_WAGE);
console.log("Is Every Full-Time Wage Exactly 160?", isAllFullTimeWage);

// Check if Any Part-Time Wage Exists
const hasPartTimeWage = empWorkData.some(({ wageEarned }) => wageEarned === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-Time Wage?", hasPartTimeWage);

// Find the Number of Days Employee Worked
const totalDaysWorked = empWorkData.filter(({ hoursWorked }) => hoursWorked > 0).length;
console.log("Total Days Employee Worked:", totalDaysWorked);
