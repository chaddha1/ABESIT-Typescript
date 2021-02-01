"use strict";
class Invoice {
    //   readonly client: string;
    //   details: string;
    //   amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.client} owes Rs.${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Himanshu", "Course 1", 1000);
const invTwo = new Invoice("Aman", "Course 2", 2000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
console.log(invOne.client);
const form = document.querySelector(".new-item-form");
console.log(form);
console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
