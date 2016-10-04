'use strict'
let numbers = function*(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i)
    yield i
  }
}

let sum = 0
console.log('start')
for (let n of numbers(1, 5)) {
  sum += n
  console.log('next')
}

console.log('end')
console.log('sum', sum)

// ==============================

let range = function*(start, end, filter) {
  let current = start
  let inc = 0
  while (current <= end) {
    if (filter && filter(current)) {
      inc = yield current
    } else {
      yield current
    }
    current += inc || 1
  }
}

let result = []
// pass filter to start incrementing by 2 when number is greater than 10
let iterator = range(1, 20, x => x > 10)
let cursor = iterator.next()
while (!cursor.done) {
  result.push(cursor.value)
  // let it increment by 2
  cursor = iterator.next(2)
}

console.log('result', result)

result = []
// no filter passed, return everything
iterator = range(1, 20)
cursor = iterator.next()
while (!cursor.done) {
  result.push(cursor.value)
  // ignored when no filter callback passed
  cursor = iterator.next(2)
}

console.log('result', result)

// =============================

// simulate the generator
let range2 = function(start, end) {
  let current = start
  let first = true
  return {
    next(inc = 1) {
      let result = {value: undefined, done: true}
      if (!first) current += inc
      if (current <= end) {
        result.value = current
        result.done = false
      }
      first = false
      return result
    }
  }
}

result = []
iterator = range2(1, 20)
cursor = iterator.next()
while (!cursor.done) {
  result.push(cursor.value)
  cursor = iterator.next(3)
}
console.log('result2', result)

