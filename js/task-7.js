/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    const transaction = {
    };
    transaction.amount = amount;
    transaction.type = type;

    return transaction;


  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;

    const transaction = this.createTransaction(amount, 'deposit');

    this.transactions.push(transaction);


    return transaction;
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    this.balance -= amount;

    const transaction = this.createTransaction(amount, 'withdraw');

    this.transactions.push(transaction);

    return transaction;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    for (const transaction of this.transactions) {
      // console.log(transaction.type);
      if (transaction.type === type) {
        return transaction
      }
      return 'Такого типу трансакцій не знайдено'
    }
  },
};

/////LOGS

console.log('Баланс до: ',account.balance);
console.log('Масив до: ',account.transactions);
// console.log(account.createTransaction(2, 'deposit'));

///deposit
console.log('deposit',account.deposit(5));
// console.log('Баланс після депозиту', account.balance);


///withdraw
console.log('withdraw',account.withdraw(3));
// console.log('Баланс після зняття', account.balance);

console.log('Баланс після: ',account.getBalance(),'getBalance');

console.log('Масив після: ',account.transactions);
console.log('getTransactionTotal: ',account.getTransactionTotal('deposit'));


















// ////Не вирішено


// /*
//  * Типів транзацкій всього два.
//  * Можна покласти або зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type) {
//     this.transactions = [
//       {amount,type,}
//     ]

//     console.log(this.transactions);
//   },

  
//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {

//     this.balance += amount;
//     this.createTransaction(amount, type);

//   },

//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     this.balance -= amount;
//     this.createTransaction(amount, type);
//     if (amount > this.balance) {
//       console.log('Недостатньо коштів на рахунку. ');
//     }
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     // console.log(this.balance);
//     return this.balance;
//   },

//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {

//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {},
// };

