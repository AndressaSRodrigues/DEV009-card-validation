const validator = {

  isValid: function(creditCardNumber) {

    const reversedNumber = creditCardNumber.split('').reverse();

    let duplicatedSum = 0;
    let digitsSum = 0;

    for (let i = 1; i < reversedNumber.length; i += 2) {
            
      let duplicated = reversedNumber[i] * 2;

      if (duplicated > 9){
        duplicated -= 9;
      }

      duplicatedSum += duplicated;
    }

    for (let n = 0; n < reversedNumber.length; n += 2) {

      const digits = parseInt(reversedNumber[n]);
      digitsSum += digits;
    
    }

    const totalSum = duplicatedSum += digitsSum;

    return totalSum % 10 === 0

  },

  maskify: function(creditCardNumber) {

    const maskedDigits = creditCardNumber.slice(0, -4).replace(/\w/g, '#');
    const maskedNumber = maskedDigits + creditCardNumber.slice(-4);

    return maskedNumber

  }
}

export default validator;