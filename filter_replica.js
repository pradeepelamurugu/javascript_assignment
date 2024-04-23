const numbers = [1, 4, 9, 19, 25];

const ageCheck = (age) => age >= 18;

function filter_replica(numbers, ageCheck) {
    let newArray = [];
    for (let num of numbers) {
        if (ageCheck(num)) {
            newArray.push(num);
        }
    }
    return newArray;
}

let answers = filter_replica(numbers, ageCheck);

console.log(answers);