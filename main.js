const EMPLOYEE_PRESENT = 1;

let attendance = Math.floor(Math.random() * 2);

if (attendance === EMPLOYEE_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}