import { Invoice } from './Modules/Invoice.js';
import { Payment } from './Modules/Payment.js';
import { ListTemplate } from './Modules/listTemplate.js';
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    // console.log(values); 
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    tofrom.value = '';
    details.value = '';
    amount.value = '';
});
//Tuple
let arr = ['mario', 25, true];
arr[0] = 'luigi';
arr[1] = 30;
arr[2] = false;
arr = [30, 'luigi', false]; // this is not allowed because the order of the tuple is changed
let tup = ['mario', 25, true];
tup[0] = 'luigi';
tup[1] = 30;
