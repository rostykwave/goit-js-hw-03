const formatString = function (string) {
  // твій код
    // console.log(typeof (string));
    // console.log(string.length);
    // console.log(string);
    let formatted = string;


    if (string.length > 40) {
        formatted = string.slice(0, 40) + '...'
    } 

    return formatted;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// повернеться форматований рядок