// :: Class-62 arguments object in js
function addAll(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    console.log(sum)
}
addAll(11,11,11)