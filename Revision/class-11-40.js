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
const x = 20
const y = 21
if (x % 2 === 0) {
    console.log("Even Number", x)
} else {
    console.log("Odd Number")
}

// Odd Number
if (y % 2 === 1) {
    console.log("Odd Number", y)
} else {
    console.log("Even Number")
}

// Large Number
if (x < y) {
    console.log("Y is greater than x")
} else if (x > y) {
    console.log("X is greater than y")
} else if (x === y) {
    console.log("X and Y are same value")
} else {
    console.log("Please enter valid number")
}

// switch statement
const date = new Date()
const today = date.getDay()
console.log(today)
switch (today) {
    case 0:
        console.log("Sun")
        break;

    case 1:
        console.log("Mon")
        break;

    case 2:
        console.log("Tue")
        break;

    case 3:
        console.log("Wed")
        break;

    case 4:
        console.log("Thu")
        break;

    case 5:
        console.log("Fri")
        break;

    case 6:
        console.log("Sat")
        break;

    default: console.log("Invalid")
}

// :: Class-25
/* 
Logical and operator
1. true && true = true
2. true && false = false
3. false && true = false
4. false && false = false
-----------------------------
Logical or operator
1. true || true = true
2. true || false = true
3. false || true = true
4. false || false = false
*/

// :: Class-26
const n1 = 10
const result = n1 % 2 === 0 ? "Even Number" : "Odd Number"
console.log(result)

// :: Class-29
for(let i=0;i<=10;i++){
    console.log(i,"Hi")
}

// for loop with if condition
for(let i=0;i<=10;i++){
    if(i%2===0){
        console.log("Even Number",i)
    }
}

// :: Class-30
let i=0
while(i<=10){
    console.log(i)
    i++
}

// while loop with if condition
let j=0
while(j<=5){
    if(j%2===0){
        console.log(j)
    }
    j++
}

// :: Class-31
let k=0
do{
    if(k%2===1){
        console.log(k)
    }
    k++
}while(k<=10)

// :: Class-34
for(let l=0;l<=10;l++){
    if(l===3){
        continue
    }else{
        console.log(l,'l')
    }
}

// :: Class-39
const u="A" 
const v="Z" 
console.log(u<v)

// :: Class-40
/* 
1. concat
2. substring
3. charAt
4. startsWith
5. endsWith
6. toUpperCase
7. toLowerCase
8. trim
9. split
*/

// concat
const a1="This is"
const b1="Moshfiqur Rahman"
console.log(a1.concat(" ").concat(b1))

// substring
const c1="This is my pen"
console.log(c1.substring(0,4))

// charAt
const d1="This is a cat"
console.log(d1.charAt(8))

// startsWith
const e1=".png this is png file"
console.log(e1.startsWith(".png"))

// endsWith
const f1="This is pdf file .jpeg"
console.log(f1.endsWith(".pdf"))

// toUpperCase
const g1="this is"
console.log(g1.toUpperCase())

// toLowerCase
const h1="this is"
console.log(h1.toLowerCase())

// trim
const i1="                This is          "
console.log(i1.trim())

// split
const j1="This is split"
console.log(j1.split())

const k1="This is split"
console.log(k1.split(""))

const l1="This is split"
console.log(l1.split(" "))

const m1="Mango,Banana,Jackfruit"
console.log(m1.split(","))