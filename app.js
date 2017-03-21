import Rates from './rates';


const data = {
    "base": "ILS",
    "date": "2017-03-17",
    "rates": { "CHF": 0.27446 }
};

const mainContainer = document.getElementById('mainContainer');
const tpl = document.getElementById('exchangeRates').content;

let rate = document.importNode(tpl, true);
rate.querySelector('#base').textContent = data.base;
rate.querySelector('#rates').textContent = data.rates['CHF'];

mainContainer.appendChild(item);

/*
<exchange-rate base=”ILS” to=”CHF” />

elem.base = ‘CHF’
elem.to = ‘EUR’

*/
