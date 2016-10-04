'use strict'

require('babel/polyfill')
var iso = require('../../portable')
var Square = require('../Square')
var fibonacci = iso.fibonacci

console.log('Client side code started')
console.log(iso.validateId('fdgdfgdfg'))

var square = new Square()
console.log(square.area)
console.log(square.printName())
console.log('-------')

console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next(true))
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
