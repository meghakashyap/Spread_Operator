//Cleaning up repeated elements from an array with a spread operator
let array1 = [1,2,3,4,4,4,4,2,3,3,4,6]
let mySet = new Set(array1)
myNewArray = [...mySet]
console.log(myNewArray)
