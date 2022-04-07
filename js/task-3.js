const findBestEmployee = function (employees) {
  // твій код
  const keys = Object.keys(employees);

  let maxValue = 0;
  let theMostProductive = '';

  
  for (const key of keys) {
    const value = employees[key];

    if (value > maxValue) {
      maxValue = value;
      theMostProductive = key;
    }
  }

  return(theMostProductive);
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux