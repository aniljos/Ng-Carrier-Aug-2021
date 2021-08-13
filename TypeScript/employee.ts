class Employee{

    // public id: number;
    // public name: string;
    // public salary: number;

    // constructor(id: number, name: string, salary: number){

    //     this.id = id;
    //     this.name = name;
    //     this.salary = salary;
    // }
    constructor(public id?: number, public name?: string, public salary?: number){}
   
}
var emp: Employee;
emp = new Employee(1, "Anil", 4000);
console.log("Employee", emp);