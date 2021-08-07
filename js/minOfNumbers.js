function min(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  return min;
}

let array = min([12, -1, -6, 18, 13]);

console.log(array);
