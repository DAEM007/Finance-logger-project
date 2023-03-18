import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("Tade", "work for website", 250);
const invTwo = new Invoice("shola", "work for Design", 100);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

// REFERENCE TO THE DOM ELEMENTS

// forms
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// submit form
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log({
        type: type.value,
        toFrom: toFrom.value,
        detail: detail.value,
        amount: amount.valueAsNumber
    });
    
})

