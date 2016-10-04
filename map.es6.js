let map = new Map()
map.set('name', 'philip')
map.set('age', 32)

console.log(map)
console.log(map.get('name'))
console.log(map.get('age'))

let person = {
  name: 'Chris',
  age: 30
}

map.set(person, 'pool')
console.log(map.get(person)) // pool
console.log(map.size)
