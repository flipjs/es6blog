'use strict'
class Person {
  constructor(name) {
    this.name = name
  }
  get name() {
    return this._name
  }
  set name(name) {
    this._name = name.toUpperCase()
  }
  sayName() {
    return `My name is ${this._name}`
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name)
    this._title = title
  }
  get title() {
    return this._title
  }
  doWork() {
    return `${this._name} is working...`
  }
  sayName() {
    return super.sayName() + ` and I am a ${this._title}`
  }
}

let scott = new Employee('Scott', 'Developer')
console.log(scott.sayName())

