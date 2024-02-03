// task-4

const statement = 'I am a hard working person';
let iterators = statement.split(' ');
let statementRevers = [];
let result = '';

for(let subIterators of iterators){
    statementRevers.unshift(subIterators)
}
result = statementRevers.join(' ');
console.log(statement)
console.log(result);