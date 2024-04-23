const numbers = [10, 5, 1];

function calculator(accumulator, value) {
    return accumulator + value;
}

function reduce_replica(numbers, calculator, default_value) {
    let result = default_value;
    for (let num of numbers) {
        result = calculator(result, num)
    }
    return result;
}

let answer = reduce_replica(numbers, calculator, default_value = 0);

console.log(answer);

