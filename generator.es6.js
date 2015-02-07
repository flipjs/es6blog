let numbers = function*(start, end) {
	for (let i = start; i <= end; i++) {
		console.log(i)
		yield i
	}
}

let sum = 0
console.log('start')
for (let n of numbers(1, 5)) {
	sum += n
	console.log('next')
}

console.log('end')
console.log('sum', sum)
