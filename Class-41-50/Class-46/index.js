// Class :: 46  search in array

// Ex:01
const arr = [1, 2, 3, 4, 5, 6, 7]
let find = 7
let isFound = false
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        isFound = true
        console.log("Data found")
        break;
    } else {
        isFound = false
        console.log("Data is not found")
    }
}