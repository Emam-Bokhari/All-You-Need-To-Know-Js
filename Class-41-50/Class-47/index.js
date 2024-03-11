// Class :: 47 multidimentional array

// Ex: 01 2 dimentional array
const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

console.log(arr[1][1])

// Ex: 02 
const arr2 = [
    [12, 13, 14],
    [15, 16, 17]
]

for(let i=0;i<arr2.length;i++){
    // console.log(arr2[i])
    for(let j=0;j<arr2[i].length;j++){
        console.log(arr2[i][j])
    }
}