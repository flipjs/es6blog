console.log('=====================================')
let set = new Set()
set.add('philip')
set.add('randy')
set.add('philip')
set.add(123) // only one is added
set.add(123)
set.add(123)
set.add(123)
set.add(123)
let obj = {
	name: 'fantastatic',
	interests: ['pool', 'darts', 'photography']
}
set.add(obj)
obj = {
	name: 'flipjs',
	interests: ['pool', 'darts', 'photography']
}
set.add(obj)
set.add(obj)
set.add(obj)

console.log('size: ', set.size)
set.delete(obj) // will delete flips
console.log('size: ', set.size)

obj = {
	name: 'fantastatic',
	interests: ['pool', 'darts', 'photography']
}
set.delete(obj) // even though the new obj has the same data inside set, they are different obj, thus nothing was deleted
console.log('size: ', set.size)

// log out all items in set
for (let item of set) {
	console.log(item)
}

let iterator = set.values()
let cursor = iterator.next()
console.log('cursor.value: ', cursor.value)
cursor = iterator.next()
console.log('cursor.value: ', cursor.value)
