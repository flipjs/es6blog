let sum = function(...numbers) {
	let result = 0
	for (let i = 0, len = numbers.length; i < len; i++) {
		result += numbers[i]
	}
	return result
}

let test = sum(1,2,3,4)
console.log(test)

let mult = function(name, ...numbers) {
	return numbers.length && numbers.reduce((prev, curr) => {
		return prev * curr
	})
}

let prod = mult('test', 1,2,3,4)
console.log(prod)

prod = mult('test', [1,2,3,4]) // doesnt work, numbers will be an array with array inside
console.log(prod)

prod = mult('test2')
console.log(prod)
