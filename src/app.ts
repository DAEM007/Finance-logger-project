import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
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
// const ul = document.querySelector('.item-list') as HTMLUListElement;
// The code for ul below is same as above...
const ul = document.querySelector('ul')!;
const li = new ListTemplate(ul);


// submit form
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    let args: [string, string, number];
    args = [toFrom.value, detail.value, amount.valueAsNumber];

    if(type.value === "invoice") {
        doc = new Invoice(...args);
    }else {
        doc = new Payment(...args);
    }
    
    // render details of the invoice/payment to the DOM
    li.render(doc, type.value, 'end');
    
});

