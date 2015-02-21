// module keyword not supported in traceur?
// module m from './person_module.es6.js'
//
// let person = new m.Person('Chris')
// person.canWalk()
// console.log(m.awesome)

import {Person} from './person_module.es6.js'
let person = new Person('Chris')
person.canWalk()
