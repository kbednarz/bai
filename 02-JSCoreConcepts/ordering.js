const reverse = function (arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function (arr) {
    arr.sort();
    return arr;
}

const even = function (arr) {
    return arr.filter(x => x % 2 === 0);
}

numbers = [8, 3, 2, 1, 5, 4, 6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
