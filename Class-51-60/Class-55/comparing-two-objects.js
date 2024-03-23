// Class :: 54 remove object properties

// Ex: 01
const obj={
    x:1,
    y:2,
    z:3 
}

const obj2={
    a:4,
    b:5,
    c:6 
}
console.log(obj.x===obj2.a)
console.log(obj===obj2)

// Ex: 02
const obj3={
    x:1,
    y:2,
    z:3 
}

const obj4={
    a:1,
    b:12,
    c:13 
}

console.log(JSON.stringify(obj3)===JSON.stringify(obj4))
console.log(JSON.stringify(obj3.x)===JSON.stringify(obj4.a))