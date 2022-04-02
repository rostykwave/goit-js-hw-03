let input;
const numbers = [];
let total = 0;


do {
    input = prompt('Введіть число: ');
    
    if (Number.isNaN(Number(input))) {
        alert('Було написано не число, спробуйте ще раз');
        } else if(input !== null && input !== ''){
        numbers.push(Number(input));
    }
    
} while (input !== null);

// console.table(numbers);

for (const number of numbers) {
    total += number;
}


console.log(`Загальна сума чисел дорівнює ${total}`);

