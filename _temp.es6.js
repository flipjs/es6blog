class People {
	constructor() {
		this.names = []
	}
	addPeople(...names) {
		this.names = this.names.concat(names)
	}
}

let people = new People()
people.addPeople('Chris')
console.log(people.names)
people.addPeople('Randy', 'Ronald', 'Onie')
console.log(people.names)
