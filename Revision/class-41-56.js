// :: Class-43
// array declaration
const a = [1, 2, 3, 4, 5]
a[5] = 46
console.log(a)

const b = [2, 20, 34, 5]
b[0] = 10
console.log(b.length, b)

// array constructor
const c = Array(1, 2, 3, 4)
console.log(c)

// :: Class-44
// array traversing
const d = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < d.length; i++) {
    console.log(d[i])
}

// odd Number sum
const e = [1, 3, 5, 6, 2]
let sum = 0
for (let i = 0; i < e.length; i++) {
    if (e[i] % 2 === 1) {
        sum += e[i]
    }
}
console.log(sum)

// Even Number sum
let evenNumberSum = 0
for (let i = 0; i < e.length; i++) {
    if (e[i] % 2 === 0) {
        evenNumberSum += e[i]
    }
}

console.log(evenNumberSum)

// :: Class-45
// array insert,remove,replace

// array pop method
const f = [1, 2, 3, 4]
f.pop()
console.log(f)

// push method
const g = [1, 2, 3, 4]
g.push(29)
console.log(g)

// shift method
const h = [1, 2, 3, 4, 5]
h.shift()
console.log(h)

// unshift method
const j = [1, 2, 3, 4]
j.unshift(29)
console.log(j)

// splice method
const k = [1, 2, 3, 4, 5]
k.splice(0, 0, 299)
console.log(k)

const l = [1, 2, 3, 4, 5]
l.splice(2, 0, 19)
console.log(l)

const m = [1, 2, 3, 4, 5]
m.splice(2, 3)
console.log(m)

// :: Class-47
// Multidimentional Array
const n = [
    [11, 12, 13],
    [14, 15, 16],
    [17, 18, 19]
]

for (let i = 0; i < n.length; i++) {
    // console.log(n[i])
    for (let j = 0; j < n[i].length; j++) {
        console.log(n[i][j])
    }
}

// :: Class-48
// js reverse an array
const o = [1, 2, 3, 4]
console.log(o.reverse())

// :: Class-49
// js array methods
/* 
1. join method
2. fill method
3. concat method
4. Array.isArray
5. Array.from
*/

// concat method
const p=[1,2,3]
const q=[4,5,6]
console.log(p.concat(q))

// join method
const r=[1,2,5]
console.log(r.join(","))

// fill method
const s=[1,2,3]
const t=s.fill("*")
console.log(t)

// Array.isArray
const u=[1]
console.log(Array.isArray(u))

// Array.from
const v=[1,3,5]
const w=Array.from(v)
console.log(w,v)

// :: Class-51
// js object literal vs constructor
const x={}
x.y=29
x.z=30
console.log(x)

const number={
    chemistry:70,
    biology:88,
    math:90 
}

number.highermath=91 
console.log(number,number.chemistry,number["biology"])

// object constructor
const obj=Object()
obj.biology=77
console.log(obj)

const obj1=new Object()
obj1.mathmatics=88
console.log(obj1)

// :: Class-52
// accessing object properties
const a1={
    x:1,
    y:2,
    z:3 
}
console.log(a1.x,a1["y"])

// :: Class-53
// setting object properties
const obj2={
    x:10,
    y:11,
    z:12 
}

obj2.xy=100
const b1='a'
obj2[b1]=101
console.log(obj2)

// :: Class-54
// remove object properties
const c1={
    x:1,
    y:2,
    z:3 
}
delete c1.x 
console.log(c1)

// :: Class-55
// comparing two objects in javascript
const obj3={
    x:10,
    y:25 
}
const obj4={
    x:10,
    y:26 
}
if(obj3.x===obj4.x){
    console.log(true)
}else{
    console.log(false)
}

console.log(JSON.stringify(obj3.x)===JSON.stringify(obj4.x))

// :: Class-56
// Iterate object properties in js
const d1={
    x:1,
    y:2,
    z:3 
}
for(let i in d1){
    console.log(i,d1[i])
}
