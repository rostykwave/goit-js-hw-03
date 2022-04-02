const checkForSpam = function (message) {
  // твій код
    
    let result = false;
    if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
        result = true;
    } 


    ///Тернарний оператор
    // const result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ? true : false;


    return result;

    
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true