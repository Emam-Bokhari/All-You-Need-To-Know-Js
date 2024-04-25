// :: Class-11 
let a = true
console.log(a)

// :: Class-12
var und =
    console.log(und)

let n = null
console.log(n)

// :: Class-13
const b = "200"
console.log(Number(b))
const c = 200
console.log(String(c))
const d = "300"
console.log(parseInt(d))
const e = 499
console.log(e.toString())
const f = 599
console.log("" + f)
const g = true
console.log(String(g))

/* 
Falsy value:
null,NaN,0,-0,undefined,""

Truthy value:
without falsy values , all truthy value

Constractor:
String,Number,Bollean
*/

// :: Class-15
/* 
Atithmetic operator
1. Addition
2. substraction
3. Multiplication
4. Division
5. Modolus
6. Incremental
7. Decremental

pre increment
post increment

pre decremental
post decremental
*/

// :: Class-21
/* 
1. Even Number
2. Odd Number
3. Large Number
*/
// Even Number
const x=20
const y=21
if(x%2===0){
    console.log("Even Number",x)
}else{
    console.log("Odd Number")
}

// Odd Number
if(y%2===1){
    console.log("Odd Number",y)
}else{
    console.log("Even Number")
}

// Large Number
if(x<y){
    console.log("Y is greater than x")
}else if(x>y){
    console.log("X is greater than y")
}else if(x===y){
    console.log("X and Y are same value")
}else{
    console.log("Please enter valid number")
}