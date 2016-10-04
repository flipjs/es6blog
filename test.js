'use strict'

class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(`${this.name} is walking...`)
  }
  talk() {
    console.log(`${this.name} is talking...`)
  }
  have() {
    const _this = this
    return {
      eyes() {
        console.log(`${_this.name} have eyes...`)
      },
      legs() {
        console.log(`${_this.name} have legs...`)
      }
    }
  }
}

const chris = new Person('Chris')
chris.walk()
chris.have().eyes()

const philip = {
  name: 'philip',
  role: 'developer',
  say() {
    console.log(`${this.name} is a ${this.role}`)
  }
}

philip.say()

const onie = Object.create(philip)
onie.name = 'onie'
onie.role = 'designer'
onie.say()
