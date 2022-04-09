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
    transaction.id = type + '-' + amount;

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
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction
      }
      return 'Трансакцій з таким id не знайдено'
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let totalTransactionsByType = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalTransactionsByType += transaction.amount;
      }
    }
    return totalTransactionsByType;
  },
};

/////LOGS

///deposit
console.log('deposit',account.deposit(5));


///withdraw
console.log('withdraw',account.withdraw(3));

console.log('getBalance: ',account.getBalance());

// console.log('Масив після: ', account.transactions);



///виведення суми всіх трансакцій за типом
console.log('getTransactionTotal(deposit): ', account.getTransactionTotal('deposit'));

console.log('getTransactionTotal(withdraw): ',account.getTransactionTotal('withdraw'));


///пошук по id
console.log('getTransactionDetails(id): ', account.getTransactionDetails('deposit-5'));