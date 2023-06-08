import validator from './validator.js';

const validateButton = document.getElementById('validate-button');

validateButton.addEventListener('click', (e) => {
  e.preventDefault();

  const creditCardNumber = document.getElementById('credit-card-number').value;

  if (validator.isValid(creditCardNumber)) {
    document.getElementById('validate-message').innerHTML = `Your credit card ${validator.maskify(creditCardNumber)} is valid. \n Your booking has been confirmed.`;
  } else {
    document.getElementById('validate-message').innerHTML = 'We could not validate your card.';
  }

});