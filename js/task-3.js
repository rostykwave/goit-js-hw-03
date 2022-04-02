const findLongestWord = function (string) {
  // твій код
    const words = string.split(' ');

    // console.log(words);

    let theLongestWord = '';

   for (const word of words) {
    //    console.log(word);
       if (word.length > theLongestWord.length) {
           theLongestWord = word;
       }
    }
    
   return(theLongestWord);
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
