/*const obj = {
    name:"Utkarsh",
    age : 18,

}

obj.greetings=function hello(){
    console.log(`hello user ${this.name}`);
    
}
console.log(obj)*/


const thisobj={
    username:"utkarsh",
    welcomemessage: function(){
      console.log(`${thisobj.username}, welcome to vs code`)
    },
}

thisobj.welcomemessage()