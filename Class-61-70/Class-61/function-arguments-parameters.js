// :: Class-61 function arguments and parameters
function add(x,y){
    console.log(x+y)
}
add(1,3)

// sum of array
function sumOfArray(x){
    let sum=0
    for(let i=0;i<x.length;i++){
        sum+=x[i]
    }
    console.log(sum)
}
sumOfArray([1,2,3])
