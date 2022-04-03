const countProps = function (obj) {
  // твій код
    
    const keys = Object.keys(obj);

    // console.log(keys);
    return(keys.length);///наша відповідь

    // for (const key of keys) {
    //     console.log(key);
    //     // console.log(obj[key]);
    // }
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3