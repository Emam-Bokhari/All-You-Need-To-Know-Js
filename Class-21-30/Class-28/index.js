// Class :: 28  for loop, for loop (if condition)

// Ex:01
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// Ex:02
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i, "Even number")
    }
}

// Ex:03
let sum=0
for (let i = 0; i <= 5; i++) {
    if(i%2===1){
        sum+=i 
    }
}
console.log(sum)