const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  // твій код
    if (login.length < 4 || login.length > 16) {
        return false;
    }
    return true;
};

const isLoginUnique = function (allLogins, login) {
  // твій код
    
    // for (const loginExist of allLogins) {
    //     if (login === loginExist) { 
    //         return false;
    //     }
    // }
    // return true;
    
    return allLogins.includes(login)
    ? false
    : true;
};

const addLogin = function (allLogins, login) {
  // твій код
      if (isLoginValid(login) === false) {
       return 'Помилка! Логін повинен бути від 4 до 16 символів'; 
    } else if (isLoginUnique(allLogins, login) === false) {
        return 'Такий логін вже використовується!'
    }
    ///додає новий логін в logins 
    logins.push(login);
    return 'Логін успішно доданий!';
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'


console.table(logins);