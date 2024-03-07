// Class :: 29 while loop

// Ex:01 
let i = 0
while (i <= 33) {
    console.log(i)
    i++
}

// Ex:02
let isRunning = true
while (isRunning) {
    let randomNumber = Math.round(Math.random() * 10)
    if (randomNumber === 3) {
        console.log("Hi 🙋‍♂️", randomNumber)
        isRunning = false
    } else {
        console.log("Sorry 😌")
    }
}

// alternative useing for loop
let isForRunning = true
for (; isForRunning;) {
    let randomNumber = Math.round(Math.random() * 10)
    if (randomNumber === 3) {
        console.log("Hi 🙋‍♂️")
        isForRunning = false
    } else {
        console.log("Sorry for 😌")
    }
}
