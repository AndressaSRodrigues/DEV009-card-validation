const validator = {

    isValid: function(creditCardNumber) {

        let reversedNumber = creditCardNumber.split('').reverse();

        console.log(reversedNumber);

        for (let i = 1; i < reversedNumber.length; i += 2) {
            
            let duplicated = reversedNumber[i] *= 2;

            if (duplicated > 9){
                duplicated -= 9;
            }
            
            console.log(duplicated);
        }

        /* for (let i = 0; i < reversedNumber.length; i += 2) {

            let otherDigits = reversedNumber[i];

            console.log(otherDigits);

        }*/
}
}


export default validator;
