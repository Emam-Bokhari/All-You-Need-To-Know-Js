// :: Class-68 pure function

// impure function
let x=33
function impure(){
    x=100
    console.log(x)
}
impure()

// pure function
function sqr(n){
    return n*n 
}
console.log(sqr(3))