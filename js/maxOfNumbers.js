function max(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length ; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max;
}

let value = max([1, 2, 3, 4, 5,123, 12, 18, 13]);


console.log(value);