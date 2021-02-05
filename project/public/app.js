import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let docOne : HasFormatter;
// let docTwo : HasFormatter;
// docOne = new Invoice('Abhishek','MEAN Course',2000);
// docTwo = new Payment('Shivam','MEAN Course',1000);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    clear();
});
function clear() {
    type.value = "invoice";
    toFrom.value = "";
    details.value = "";
    amount.value = "";
}
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docOne = addUID({ name: 'Himanshu', age: 25, hi: 'hello' });
const docTwo = addUID({ name: 'abhishek' });
console.log(docOne);
console.log(docTwo);
// const arr: number[] = [1,1];
const arr = [[]];
