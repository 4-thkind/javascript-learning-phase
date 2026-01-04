const userinfo={
    name:"utkarsh",
    price:99,
}
function message(anyobject){
    return `${anyobject.name} has added item worth ${anyobject.price}`
}
console.log(message(userinfo))