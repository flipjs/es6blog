'use strict'
// modules - can export multiple but best is to export one only and use default
export class Person {
  constructor(name) {
    this.name = name
  }
  canWalk() {
    console.log(`${this.name} can walk...`)
  }
}

export let awesome = 'ES6 is awesome!'
