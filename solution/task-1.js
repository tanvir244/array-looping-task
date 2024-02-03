// Task-1

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let colorReverse = [];

for(let i = 0; i < colors.length; i++){
    let allCollors = colors[i];
    colorReverse.unshift(allCollors); 
}
console.log(colors);
console.log(colorReverse);

// alternative way 
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let colorReverse = [];

for(let i = colors.length -1; i >= 0; i--){
    let allCollors = colors[i];
    colorReverse.push(allCollors);
}
console.log(colors);
console.log(colorReverse);
