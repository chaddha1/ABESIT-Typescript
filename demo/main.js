"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* Basic variable decalartion and data types */
var message = "Hello";
console.log(message);
var isStudent;
isStudent = true;
console.log(isStudent);
var age = 25;
console.log(age);
var name = "Himanshu you are " + age + " years old. " + message;
console.log(name);
// let name2 : string = undefined;
// let age2 : number = null;
// let isLogin :boolean = undefined;
/* Arrays */
var list1 = [1, 2, 3];
var list2 = ["1", "2", "3"];
var list3 = [true, false];
// let person1: [string, number] = ["Himanshu", 25];
/* Enums */
// enum myColors {Red, Green, Blue};
var myColors;
(function (myColors) {
    myColors[myColors["Red"] = 5] = "Red";
    myColors[myColors["Green"] = 6] = "Green";
    myColors[myColors["Blue"] = 7] = "Blue";
})(myColors || (myColors = {}));
var color1 = myColors.Green;
console.log("color1", color1);
var anyValue;
anyValue = "himanshu";
var a;
a = "Himanshu";
a = 10;
console.log(a);
var b = 10;
name = "Aman";
/* Type union */
var multiValue;
multiValue = 10.5;
multiValue = true;
multiValue = false;
/* Objects */
var person = {
    name: "Abhishek",
    age: 21
};
person.name = "aman";
person.age = 45;
person = {
    name: "Himanshu",
    age: 25
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
function add(num2, num1) {
    if (num1 === void 0) { num1 = 10; }
    if (num1)
        return num1 + num2;
    else
        return num2;
}
var sum = add(1, 20);
console.log("sum is", sum, typeof sum);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
function myMessage(person) {
    console.log("Hello " + person.firstName);
}
fullName({ firstName: "himanshu", lastName: "Chaddha" });
myMessage({ firstName: "himanshu" });
/*Classes And Access Modifiers */
var Employee = /** @class */ (function () {
    // public employeeName: string;
    // private employeeName: string;
    // protected employeeName: string;
    function Employee(empName) {
        this.employeeName = empName;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning! " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Himanshu");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks. " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager("Rachit");
console.log(m1.employeeName);
m1.greet();
m1.delegateWork();
