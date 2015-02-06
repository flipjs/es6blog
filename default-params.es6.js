let sayName = (name) => {
	name = name || 'philip'
	console.log(name)
}

sayName() // philip
sayName('') // philip
sayName(undefined) // philip
sayName(null) // philip
sayName('scott') // scott

let sayHi = function(name='John') {
	console.log(`Hi, ${name}`)
}

//es6 only captures either no param is passed or explicit undefined keyword
sayHi() // John
sayHi('') // empty string
sayHi(null) // null
sayHi(undefined) // John
sayHi('Scott') // Scott

