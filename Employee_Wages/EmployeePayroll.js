class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
    }

   
    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

const emp1 = new EmployeePayroll(101, "Anand Soni", 5000, "Male", "2023-05-10");
const emp2 = new EmployeePayroll(102, "Ankit Kumar", 7000, "Female", "2022-11-15");

console.log(emp1.getDetails());
console.log(emp2.getDetails());