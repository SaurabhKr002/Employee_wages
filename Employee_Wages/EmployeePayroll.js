class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
}

const emp1 = new EmployeePayroll(101, "Anand Soni", 5000);
const emp2 = new EmployeePayroll(102, "Ankit Kumar", 7000);

console.log(emp1.getDetails());
console.log(emp2.getDetails());