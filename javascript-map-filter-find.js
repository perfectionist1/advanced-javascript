const numbers = [3, 4, 5, 6, 7, 8];
// const squareNumbers = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     squareNumbers.push(result);
// }
// console.log(squareNumbers);

// function square(element){
//     return element * element;
// }
// numbers.map(function(element, index){
//     console.log(element, index);
// });
// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// });

// const result = numbers.map((element) => element * element);
// console.log(result);

// const result = numbers.filter((x) => x % 2 == 0 );
// console.log(result);

const isThereNumber = numbers.find((x) => x >= 5);
console.log(isThereNumber);