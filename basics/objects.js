const obj = {
    name:"Utkarsh",
    age : 18,

}

obj.greetings=function hello(){
    console.log(`hello user ${this.name}`);
    
}
console.log(obj)

