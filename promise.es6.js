'use strict'
// ES6 Promises

// sucess
void (function() {
  let promise = new Promise(resolve => {
    resolve('Join me!')
  })
  promise.then(data => {
    console.log(data)
  })
})();

// fail - then with 2 params, success and fail
void (function() {
  let promise = new Promise((resolve, reject) => {
    reject(Error('I will not join you'))
  })
  promise.then(()=> {
    // success
  }, error => {
    console.log(error.message)
  })
})();

// alternative to then when fail, using catch
void (function() {
  let promise = new Promise((resolve, reject) => {
    reject(Error('I am your father!'))
  })
  promise.catch(error => {
    console.log(error.message)
  })
})();

// resolve previous promise
void (function() {
  let firstPromise = new Promise(resolve => {
    resolve('Nooooooo!')
  })
  let secondPromise = new Promise(resolve => {
    resolve(firstPromise)
  })
  secondPromise.then(data => console.log(data))
})();

// automatic or static resolve
void (function() {
  let promise = Promise.resolve('Yes I am.')
  promise.then(data => console.log(data))
})();

// promise is asynchronous
void (function() {
  let async = 'this message will not show up'
  let promise = new Promise(resolve => resolve())
  promise.then(() => console.log(async))
  async = 'this message is the one that will show up'
})();
