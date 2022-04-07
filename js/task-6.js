const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];


const calculateTotalPrice = function (allProdcuts, productName) {
  // твій код
  
  for (const product of allProdcuts) {
    const { name, price, quantity } = product;
    
    if (name === productName) {
      return price * quantity;
    }
  }
};

///Варінт без деструктуризації
// const calculateTotalPrice = function (allProdcuts, productName) {
//   // твій код
  
//   for (const product of allProdcuts) {
    
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
// };

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
