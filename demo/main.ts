export {};

/* Basic variable decalartion and data types */
let message = "Hello";
console.log(message);

let isStudent: boolean;
isStudent = true;
console.log(isStudent);

let age: number = 25;
console.log(age);

let name = `Himanshu you are ${age} years old. ${message}`;
console.log(name);

// let name2 : string = undefined;
// let age2 : number = null;
// let isLogin :boolean = undefined;

/* Arrays */
let list1: number[] = [1, 2, 3];

let list2: Array<string> = ["1", "2", "3"];
let list3: Array<boolean> = [true, false];

// let person1: [string, number] = ["Himanshu", 25];
/* Enums */
// enum myColors {Red, Green, Blue};
enum myColors {
  Red = 5,
  Green,
  Blue,
}
const color1 = myColors.Green;
console.log("color1", color1);

let anyValue: any;
anyValue = "himanshu";

let a;
a = "Himanshu";
a = 10;

console.log(a);

let b = 10;
name = "Aman";

/* Type union */

let multiValue: number | boolean;
multiValue = 10.5;
multiValue = true;
multiValue = false;

/* Objects */
let person = {
  name: "Abhishek",
  age: 21,
};

person.name = "aman";
person.age = 45;

person = {
  name: "Himanshu",
  age: 25,
};

/* Funtions and interfaces */

// function add(num1:number, num2:number):number {
//   return num1 + num2;
// }
// const sum = add(1,2);

// function add(num2: number,num1?: number): number {
//   if (num1) return num1 + num2;
//   else return num2;
// }
function add(num2: number, num1: number = 10): number {
  if (num1) return num1 + num2;
  else return num2;
}
const sum = add(1, 20);
console.log("sum is", sum, typeof sum);

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

function myMessage(person: Person) {
  console.log(`Hello ${person.firstName}`);
}
fullName({ firstName: "himanshu", lastName: "Chaddha" });

myMessage({ firstName: "himanshu" });

/*Classes And Access Modifiers */
class Employee {
  employeeName: string;
  // public employeeName: string;
  // private employeeName: string;
  // protected employeeName: string;
  constructor(empName: string) {
    this.employeeName = empName;
  }

  public greet() {
    console.log(`Good Morning! ${this.employeeName}`);
  }
}

let emp1 = new Employee("Himanshu");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName) {
    super(managerName);
  }

  public delegateWork() {
    console.log(`Manager delegating tasks. ${this.employeeName}`);
  }
}

const m1 = new Manager("Rachit");
console.log(m1.employeeName);
m1.greet();
m1.delegateWork();
