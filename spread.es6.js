let doThing = (a,b,c) => {
	return a + b + c
}

let x = doThing(...[1,2,3,4]) // 4 is ignored
console.log(x)

let arr1 = [7,8,9,10,11]
let arr2 = [1,2,3,4,5,6,...arr1,12,13,14,15]

x = doThing(...arr2)
console.log(arr2)
console.log(x)
