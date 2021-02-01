class Invoice {
  //   readonly client: string;
  //   details: string;
  //   amount: number;
  constructor(
    readonly client: string,
    public details: string,
    private amount: number
  ) {
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

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

console.log(invOne.client);

const form = document.querySelector(".new-item-form") as HTMLFontElement;
console.log(form);
console.log(form.children);

const type = document.querySelector("#type") as HTMLInputElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
