import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne : HasFormatter;
// let docTwo : HasFormatter;

// docOne = new Invoice('Abhishek','MEAN Course',2000);
// docTwo = new Payment('Shivam','MEAN Course',1000);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

const form = document.querySelector(".new-item-form") as HTMLFontElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
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

const addUID = <T extends {name:string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const docOne = addUID({name:'Himanshu',age:25})
console.log(docOne);
console.log(docOne.name);

