import MaskInput from 'mask-input';
import UIController from './ui_controller.js';
import CardData from './card_data.js';

const maskInput = new MaskInput(document.querySelector('.js-input-selector'), {
    mask: '0000-0000-0000-0000',
    alwaysShowMask: true,
    maskChar: '_',
  });

const ui = new UIController();
const data = new CardData();
ui.cardNumberValid();
ui.nameValid();

let request = document.getElementById('request');
request.addEventListener('click', () => {
    console.log('click');
    ui.showPreloader()
    ui.createTable({
        "bin": "515735",
        "bank": "CITIBANK N.A.",
        "card": "MASTERCARD",
        "type": "CREDIT",
        "level": "WORLD",
        "country": "UNITED STATES",
        "countrycode": "US",
        "website": "",
        "phone": "",
        "valid": "true"
       }
       );
    ui.hidePreloader();
})
