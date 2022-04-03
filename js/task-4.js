const countTotalSalary = function (employees) {
  // твій код
    // const keys = Object.keys(employees);
    // console.log(keys);

    const values = Object.values(employees);
    console.log(values);

    let totalSalary = 0;

    // for (const key of keys) {
    //     // console.log(key);
    //     // console.log(employees[key]);
    //     totalSalary += employees[key];
    // }

    for (const value of values) {
        totalSalary += value;
    }

    return totalSalary;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400