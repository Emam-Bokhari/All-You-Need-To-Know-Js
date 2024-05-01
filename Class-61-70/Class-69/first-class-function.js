// :: first class function
/* 
jokhn akti function nicher 6 ti rules mene chole tokhn ta k amra first class function bolbo
js function akti first class function karon js function ai 6 ti rules e mene chole.
Rules: 
1. function k variable ar vitore strre kora jabe
2. function k array ar vitore strore kora jabe
3. function k object ar vitore store kora jabe
4. akti function ar arekti function ar argumet akare pathiye daoua jabe
5. akti function theke arekti function return kora jabe
6. proujon onojai akti function theke arekti function create kora jabe
*/

// store function in variable
function sum(x,y){
    return x+y 
}
const addition=sum(5,5)
console.log(addition)

// Rules:02 store function in array
let arr=[]
function fnArr(x,y){
return x+y
}
arr.push(fnArr)
console.log(arr[0] (2,3))

// Rules:03 store function in object
function obj(x,y){
    return x+y 
}
const storeObj={obj:obj}
console.log(storeObj.obj(1,5))

// Rules:04 create function 
setTimeout(function(){
    console.log("Inner function")
},3000)