
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];

for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    if(num % 2 === 0){
        evenNumbers.push(num);
    }
}
console.log(numbers);
console.log(evenNumbers);