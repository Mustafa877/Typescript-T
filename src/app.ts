import { Invoice } from "./Modules/Invoice.js";
import { Payment } from "./Modules/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('mario', 'work on the mario website', 250);
docTwo = new Payment('luigi', 'work on the luigi website', 300);
console.log(docOne, docTwo);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

docs.forEach(doc => {
  console.log(doc);
});
 
  
  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  console.log(form.children);
  
  // inputs
  const type = document.querySelector('#type') as HTMLInputElement;
  const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
  const details = document.querySelector('#details') as HTMLInputElement;
  const amount = document.querySelector('#amount') as HTMLInputElement;
  
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    let doc: HasFormatter;

    if (type.value === 'invoice') { 
      doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {  
      doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc);
    
  });