class Person {

	constructor(name) {
		// this._name = name
		// this.name is not a property anymore, but using the getter/setter to
		// set the property this._name, which is the real property
		this.name = name
	}

	get name() {
		return this._name
	}

	set name(name) {
		this._name = name.toUpperCase()
	}

	canWalk() {
		console.log(`${this.name} can walk...`)
	}

	canDance() {
		console.log(`${this.name} can dance...`)
	}

}

let person = new Person('Jessie')
console.log(person.name)
person.canWalk()
person.canDance()


person.name = 'Scott'
console.log(person.name)
person.canWalk()
person.canDance()

// accessing the property directly, bypassing the setter, so no validation
// whatsoever. still possible as props are public.
person._name = 'mArViN'
console.log(person.name)
person.canWalk()
person.canDance()

// printing actual value, not using getter
console.log(person._name)
