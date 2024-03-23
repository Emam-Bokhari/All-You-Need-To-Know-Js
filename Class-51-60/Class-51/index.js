// Class :: 51 Js object literal vs constructor

// Ex: 01 object literal
const obj = {}
obj.x = 23
obj.y = 39
console.log(obj.x)
console.log(obj.y)

// Ex: 02 
const marks = {
    physics: 55,
    chemistry: 40,
    mathmetics: 60
}

console.log(marks.physics)
console.log(marks.chemistry)
console.log(marks.mathmetics)

// Ex: existing objects add new value
const number = {
    id:1,
    id1:2,
    id2:3
}

number.id =5
console.log(number)
console.log(number.id,number.id1,number.id2) 

// Ex: object constructor
const obj2=Object()
obj2.biology=29
console.log(obj2)

