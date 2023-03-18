
// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`
    }

}

const invOne = new Invoice("Tade", "work for website", 250);
const invTwo = new Invoice("shola", "work for Design", 100);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);




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

