/*const obj = {
    name:"Utkarsh",
    age : 18,

}

obj.greetings=function hello(){
    console.log(`hello user ${this.name}`);
    
}
console.log(obj)*/


/*const thisobj={
    username:"utkarsh",
    welcomemessage: function(){
      console.log(`${this.username}, welcome to vs code`)
    },
}

thisobj.welcomemessage()*/

const myobj={
    name:"utkarsh",
    age:18,
    occupation:"student",
    "fav game":"spiderman",
}

//console.log(myobj);

for (const key in myobj) {
    console.log(myobj[key]);
}

const myarr=[1,2,3,4,5];

for (const key of myarr) {
    console.log(key);
    
}
