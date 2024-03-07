// Class :: 33 break statement

// Ex:01
while (true) {
    const randomNumber = Math.round(Math.random() * 10)
    if (randomNumber === 5) {
        console.log(randomNumber)
        break;
    } else {
        console.log("Sorry")
    }
}

// Ex:02
for (let i = 0; i <= 10; i++) {
    const randomNumber = Math.round(Math.random() * 10)
    if (randomNumber === 5) {
        console.log(randomNumber)
        break;
    } else {
        console.log("Sorry")
    }
}