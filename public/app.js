import { Invoice } from "./Modules/Invoice.js";
import { Payment } from "./Modules/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('mario', 'work on the mario website', 250);
docTwo = new Payment('luigi', 'work on the luigi website', 300);
console.log(docOne, docTwo);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
docs.forEach(doc => {
    console.log(doc);
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
