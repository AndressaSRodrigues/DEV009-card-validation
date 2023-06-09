import validator from './validator.js';

const validateInfo = document.getElementById('validate-info');

validateInfo.addEventListener('submit', (e) => {
  e.preventDefault();

  const creditCardNumber = document.getElementById('credit-card-number').value;

  if (validator.isValid(creditCardNumber)) {
    document.getElementById('validate-message').innerHTML = `Your credit card ${validator.maskify(creditCardNumber)} is valid.<br> Your booking has been confirmed.`;
    validateInfo.reset();
  } else {
    document.getElementById('validate-message').innerHTML = 'We could not validate your card.';
  }


});