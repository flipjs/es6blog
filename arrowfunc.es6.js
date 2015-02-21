// arrow functions
let add = (x,y) => x + y
let square = x => x * x
let five = () => 5
let all = () => square(add(4, five()))
let blockAll = () => {
	let sum = (add(4, five())) // 9
	return square(sum) // 81
}

let sum = add(4,5)
console.log('sum', sum)

let sq = square(five())
console.log('square', sq)

console.log('all', all())
console.log('blockAll', blockAll())

let numbers = [1,2,3,4]
sum = 0

numbers.forEach(x => sum += x)
console.log('arrowfunc inline', sum) // 10

// same as above, but made the arrowfunc as block
numbers.forEach(x => {
	sum += x
})
console.log('arrowfunc block', sum) // 10

sum = numbers.reduce((x, y) => x + y)
console.log('sum-reduce', sum) // 10

let doubled = numbers.map(x => x * 2)
console.log('doubled', doubled) // [2,4,6,8]

// solves the 'this' in inner functions like function within a function or
// callbacks. lexical binding continues inside another inner function
let person = {
	name: 'Philip',
	sayName: function() {
		console.log(`Hi, ${this.name}`)
	},
	sayNameFail: function() {
		let sayMyName = function() {
			console.log(`Hi, ${this.name}`) // fail - this.name is undefined, could be pointing to global
		}
		sayMyName()
	},
	sayNameSuccess: function() {
		let sayMyName = () => {
			console.log(`Hi, ${this.name}`) // success! pointing to person this
		}
		sayMyName()
	},
	sayNameInnerInner: function() {
		let sayMyName = () => {
			let sayMyNameInner = () => `Hi, ${this.name}`
			console.log(sayMyNameInner())
		}
		sayMyName()
	}
}

person.sayName()
// person.sayNameFail()
person.sayNameSuccess()
person.sayNameInnerInner()
