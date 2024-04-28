// Class :: 55 object method in js
// values,keys,entries,clone object

// keys
const x={
    math:20,
    biology:10,
    chemistry:21 
}
console.log(Object.keys(x))

// values
console.log(Object.values(x))

// entries
const ent=(Object.entries(x))
console.log(ent)

// traversing
for(let i=0;i<ent.length;i++){
    console.log(ent[i])
}

// clone
let obj=Object.assign({},x)
console.log(obj)