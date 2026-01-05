const userinfo={
    name:"utkarsh",
    price:99,
}
function message(anyobject){
    return `${anyobject.name} has added item worth ${anyobject.price}`
}
console.log(message(userinfo))

const myArray =[1,2,3,4,5,6,7];

function giveu(arrayhere){
    console.log("the 3rd element of array entered is :")
    return arrayhere[2];
}
let reference = giveu(myArray)
console.log(reference)

const UserInfo={
    name:"utkarsh",
    age:18,
    price:299,
}
function defineprice(objectuser){
    return `${objectuser.name} added and item worth ${objectuser.price} in the cart`;
}
console.log(defineprice(UserInfo))

console.log(addone(5));
function addone(num){
    return num+1;
}

console.log(addtwo(5))
const addtwo = function(num){
    return num+1
}
