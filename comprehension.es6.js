// doesnt work with traceur? try 6to5.org to test

let numbers = [for (n of [1,2,3,4]) n * 2]
console.log(numbers)

numbers = [for (n of [1,2,3,4]) if (n > 2) n * 2]
console.log(numbers)

// generator
// numbers = (for (n of [1,2,3,4]) n * 2)
console.log(numbers)
