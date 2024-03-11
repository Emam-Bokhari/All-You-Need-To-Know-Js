// Class :: 49 array methods

/* 
* join
* fill
* concat
* Array.isArray
* Array.from
*/

// Ex: join
const x=[1,2,3]
console.log(x.join(","))

// Ex: fill
const y=[1,2,3,4]
console.log(y.fill("*"))

// Ex: concat
const a=[1,2,3]
const b=[4,5,6]
console.log(a.concat(b))

// Ex: Array.isArray
const c=[1,2,3,4,5]
console.log(Array.isArray(c))

// Ex: Array.from
const d=[1,2,3,31,4,5,6]
let e=Array.from(d)
console.log(d,e)