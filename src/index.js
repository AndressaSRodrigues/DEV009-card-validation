import validator from './validator.js';

const validateButton = document.getElementById('validate-button');

validateButton.addEventListener('click', (e) => {
    e.preventDefault();

    const creditCardNumber = document.getElementById('credit-card-number').value;

    validator.isValid(creditCardNumber);
    

    
});


console.log(validator);
