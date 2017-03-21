

const data = {
    "base": "ILS",
    "date": "2017-03-17",
    "rates": { "CHF": 0.27446 }
};

fetch(`http://api.fixer.io/latest?symbols=ILS&base=CHF`)
    .then(response => reponse.json());


class Rates extends HTMLElement {

    constructor() {
        super() // call parent constructor
        this.textContent = 'Hello, my name is';
    }

    get name() {
        return this.getAttribute('base');
    }
    set name(n) {
        this.setAttribute('rate', n);
    }

    connectedCallback() {
        this.name = this.getAttribute('rate');
    }

};

window.customElements.define('rates', NameTag);

export { Rates };