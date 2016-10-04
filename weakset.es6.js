// WeakSet not in traceur yet?
let set = new WeakSet()
var item = {
  name: 'Philip'
}
set.add(item)
console.log(set.has(item))
set.delete(item)
console.log(set.has(item))
var item2 = {
  name: 'Onie'
}
set.add(item2)
console.log(set.has(item2))
set.clear()
console.log(set.has(item2))
