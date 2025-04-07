// const  anchor = document.querySelector('a');
// console.log(anchor);
// if (anchor) {
//     console.log(anchor.href);
// }
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
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'web development', 200);
const invTwo = new Invoice('luigi', 'web development', 100);

console.log(invOne, invTwo);    

const form = document.querySelector('.new-item-form') as HTMLFormElement;
 
 

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

 