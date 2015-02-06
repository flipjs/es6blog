let doSomething = (name) => {
	let msg = `Hello, ${name}`
	return msg
}

console.log(doSomething('Philip'))

const MAX = 10
// MAX =12 this throws error

console.log(MAX)

let [xxx, yyy] = [2, 4]

console.log(xxx)
console.log(yyy)

let x = 10
let y = 20

;[x, y] = [y,x]

console.log(`x is ${x} and y is ${y}`)

let obj = {
	a: 'philip',
	b: 'apostol'
}

let {a:first, b:last} = obj

console.log(`first is ${first} and last is ${last}`)











