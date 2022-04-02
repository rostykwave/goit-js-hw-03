const calculateEngravingPrice = function (message, pricePerWord) {
  // твій код
    
    //створити масив зі слів
    const words = message.split(' ');

    //визначити кількість слів
    const numbers = words.length;

    //операція множення
    const totalPrice = numbers * pricePerWord;

    //повернути
    return (totalPrice);


    ///Запис того самого в один рядок
    // return message.split(' ').length * pricePerWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120