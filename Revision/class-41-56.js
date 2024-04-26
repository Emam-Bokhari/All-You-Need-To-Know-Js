// :: Class-43
// array declaration
const a=[1,2,3,4,5]
a[5]=46
console.log(a)

const b=[2,20,34,5]
b[0]=10
console.log(b.length,b)

// array constructor
const c=Array(1,2,3,4)
console.log(c)

// :: Class-44
// array traversing
const d=[1,2,3,4,5,6,7]
for(let i=0;i<d.length;i++){
    console.log(d[i])
}

// odd Number sum
const e=[1,3,5,6,2]
let sum=0
for(let i=0;i<e.length;i++){
    if(e[i]%2===1){
        sum+=e[i]
    }
}
console.log(sum)

// Even Number sum
let evenNumberSum=0
for(let i=0;i<e.length;i++){
    if(e[i]%2===0){
        evenNumberSum+=e[i]
    }
}

console.log(evenNumberSum)

// :: Class-45
// array insert,remove,replace

// array pop method
const f=[1,2,3,4]
f.pop()
console.log(f)

// push method
const g=[1,2,3,4]
g.push(29)
console.log(g)

