const numbers = [1, 4, 9, 16, 25];

const squareFunction = num => num * num;

function map_replica(numbers, squareFunction) {
    let newArray = [];
    for (let num of numbers) {
        newArray.push(squareFunction(num));
    }
    return newArray;
}

let answers = map_replica(numbers, squareFunction);

console.log(answers);