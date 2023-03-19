import { HasFormatter } from "../interfaces/HasFormatter";

// list template class
export class ListTemplate {
    private container: HTMLUListElement;

    constructor(c: HTMLUListElement) {
        this.container = c;
    }

    render(item: HasFormatter, headerText: string, position: 'start' | 'end') {
        // create list element
        const list = document.createElement('li');
        // append header element to the list element
        const head = document.createElement('h4');
        head.innerText = headerText;
        list.append(head);
        // append paragraph element to the list element
        const para = document.createElement('p');
        para.innerText = item.format();
        list.append(para);
        // check for the position to correctly place the list
        if(position === 'start') {
            this.container.prepend(list);
        }else {
            this.container.append(list);
        }
    }

}

