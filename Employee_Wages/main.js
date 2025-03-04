const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;

function getWorkHours(workType) {
    switch (workType) {
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totalHours = 0;
let totalDays = 0;
let dailyWageMap = new Map();
let dailyHourMap = new Map();
let dailyRecords = [];  // Correctly storing daily records

while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(workType);
    
    if (totalHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalHours;
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    totalHours += workHours;
    totalDays++;

    dailyWageMap.set(totalDays, dailyWage);
    dailyHourMap.set(totalDays, workHours);
    dailyRecords.push({ day: totalDays, wage: dailyWage, hours: workHours });  // Store correct records
}

let totalWage = Array.from(dailyWageMap.values()).reduce((sum, wage) => sum + wage, 0);
const totalWorkedHours = Array.from(dailyHourMap.values()).reduce((sum, hours) => sum + hours, 0);
console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalWorkedHours} hrs`);

console.log("Day-wise Wages:", Array.from(dailyWageMap.entries()).map(([day, wage]) => `Day ${day}: $${wage}`));

// Correctly filter full-time, part-time, and no-work days
const fullWorkDays = dailyRecords.filter(record => record.hours === FULL_TIME_HOURS).map(record => `Day ${record.day}`);
const partWorkDays = dailyRecords.filter(record => record.hours === PART_TIME_HOURS).map(record => `Day ${record.day}`);
const noWorkDays = dailyRecords.filter(record => record.hours === 0).map(record => `Day ${record.day}`);

console.log("Days with Full-Time Wage:", fullWorkDays);
console.log("Days with Part-Time Wage:", partWorkDays);
console.log("Days with No Work:", noWorkDays);

let firstFullTimeDay = dailyRecords.find(record => record.wage === FULL_TIME_WAGE);
console.log("First Full-Time Wage Earned On:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "Never");

let isEveryFullTime = fullWorkDays.every(day => dailyWageMap.get(parseInt(day.split(" ")[1])) === FULL_TIME_WAGE);
console.log("Is Every Full-Time Wage Exactly 160?", isEveryFullTime);

let hasPartTimeWage = dailyRecords.some(record => record.wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-Time Wage?", hasPartTimeWage);

let daysWorked = dailyRecords.filter(record => record.wage > 0).length;
console.log(`Total Days Employee Worked: ${daysWorked}`);
