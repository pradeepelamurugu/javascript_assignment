const numbers = [1, 4, 9, 16, 25];

const squareFunction = num => num * num;

function foreach_replica(numbers, squareFunction) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = (squareFunction(numbers[i]));
    }
}

foreach_replica(numbers, squareFunction);

console.log(numbers);