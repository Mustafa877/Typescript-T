export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        // create li element
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = `${heading}`;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        // append to ul
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
