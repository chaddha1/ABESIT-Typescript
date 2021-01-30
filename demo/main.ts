export {};
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

let list1: number[] = [1, 2, 3];

let list2: Array<string> = ["1", "2", "3"];
let list3: Array<boolean> = [true, false];

let person1: [string, number] = ["Himanshu", 25];

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


