const apple = {
    value: 2
};

const orange = {
    value: 3
};

function mapWithThis(arr, thisArg) {
    return arr.map(function (item) {
        return item / this.value;
    }, thisArg)
}

const nums = [1, 2];

console.log(mapWithThis(nums, apple));
console.log(mapWithThis(nums, orange));


//exercício 2
function mapWithoutThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    })
}

const nums2 = [2, 4, 6, 8, 10];

console.log(mapWithoutThis(nums2));

//exercício 3

function filterPairs(arr) {
    return arr.filter((item) => item % 2 === 0);
}

const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterPairs(nums3));

