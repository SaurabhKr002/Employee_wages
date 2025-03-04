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

// Variables to track employee work details
let totalHours = 0;
let totalDays = 0;
let empDailyData = [];
let dailyRecords = [];

// Simulating work for the employee
while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(workType);

    if (totalHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalHours;
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    totalHours += workHours;
    totalDays++;

    empDailyData.push({
        day: totalDays,
        hoursWorked: workHours,
        wageEarned: dailyWage
    });

    dailyRecords.push({ day: totalDays, wage: dailyWage });
}

// Display work data
console.log("Employee Work Data:", empDailyData);

// Calculate total wage and total hours worked
const totalWage = empDailyData.reduce((sum, record) => sum + record.wageEarned, 0);
const totalWorkedHours = empDailyData.reduce((sum, record) => sum + record.hoursWorked, 0);
console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalWorkedHours} hrs`);

// Full Working Days
console.log("Full Working Days:");
empDailyData
    .filter(record => record.hoursWorked === FULL_TIME_HOURS)
    .forEach(record => console.log(`Day ${record.day}`));

// Part-Time Working Days
const partWorkDays = empDailyData
    .filter(record => record.hoursWorked === PART_TIME_HOURS)
    .map(record => `Day ${record.day}`);
console.log("Part-Time Working Days:", partWorkDays);

// No Work Days
const noWorkDays = empDailyData
    .filter(record => record.hoursWorked === 0)
    .map(record => `Day ${record.day}`);
console.log("No Working Days:", noWorkDays);

// Days with Full-Time Wage
let fullTimeDays = dailyRecords.filter(record => record.wage === FULL_TIME_WAGE);
console.log("Days with Full-Time Wage:", fullTimeDays.map(record => `Day ${record.day}`));

// First Day with Full-Time Wage
let firstFullTimeDay = dailyRecords.find(record => record.wage === FULL_TIME_WAGE);
console.log("First Full-Time Wage Earned On:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "Never");

// Checking if all Full-Time Wage records are exactly 160
let isEveryFullTime = fullTimeDays.every(record => record.wage === FULL_TIME_WAGE);
console.log("Is Every Full-Time Wage Exactly 160?", isEveryFullTime);

// Checking if there is any Part-Time Wage
let hasPartTimeWage = dailyRecords.some(record => record.wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-Time Wage?", hasPartTimeWage);

// Total Days Employee Worked
let daysWorked = dailyRecords.filter(record => record.wage > 0).length;
console.log(`Total Days Employee Worked: ${daysWorked}`);
