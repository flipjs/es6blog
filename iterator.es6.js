let numbers = [1,2,3,4]
let sum = 0

// traditional
for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i]
}
console.log(sum) // 10

// es6 iterator
sum = 0
let iterator = numbers.values()
let cursor= iterator.next()
while (!cursor.done) {
	sum += cursor.value
	cursor = iterator.next()
}
console.log(sum) // 10

