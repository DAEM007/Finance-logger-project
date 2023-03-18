import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

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

    let doc: HasFormatter;

    if(type.value === "invoice") {
        doc = new Invoice(toFrom.value, detail.value, amount.valueAsNumber);
    }else {
        doc = new Payment(toFrom.value, detail.value, amount.valueAsNumber);
    }
    
    console.log(doc);
    
})

