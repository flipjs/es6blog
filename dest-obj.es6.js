let passingObject = (name, {first, last, age}) => {
	console.log(name)
	console.log(first, last)
	console.log(age)
}

passingObject('testing', {
	first: 'philip',
	last: 'apostol'
})
passingObject('testing', {
	first: 'randy',
	last: 'gonzales',
	age: 50
})

let sayName = (name) => {
	name = name || 'philip'
	console.log(name)
}

sayName(null)
