// Class :: 45 pop,push,shift,unshift,splice

// Ex: pop (remvoe last index)
const x = [1, 2, 3, 4]
x.pop()
console.log(x)

// Ex: push (add last index)
const y = [1, 2, 3, 4, 5, 6]
y.push(25)
console.log(y)

// Ex: shift (remove first index)
const a = [1, 2, 3, 4, 5]
a.shift()
console.log(a)

// Ex: unshift (add first index)
const b = [1, 2, 3, 4, 5]
b.unshift(25)
console.log(b)

// Ex: splice (number,delete,insert)
const c = [1, 2, 3, 4, 5]
c.splice(5,0,22)
console.log(c)

