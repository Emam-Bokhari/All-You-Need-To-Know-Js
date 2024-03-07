// Class :: 25 Logical operators

/* 
Logical && operators
* true && true = true
* true && false = false
* false && false = false
* false && true = false
Logical || operators
* true || true = true
* true || false = true
* false || true = true
* false || false = false
*/

// Ex: 01

const a = 10
const b = 20
const c = 30
const d = 40

if (a > b && d > c) {
    console.log(true)
} else {
    console.log(false)
}

if (a > b || d > c) {
    console.log(true)
} else {
    console.log(false)
}