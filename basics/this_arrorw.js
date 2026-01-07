console.log(this);

const anything = ()=> {
    console.log(this);
}

anything()

const two = function(){
    console.log(this);
}
two();

(function(){
    console.log("helloe world!");

})();
(()=>{
    console.log("hello world from arrow fuction")
})()

const arr=[1,2,3,4,5,67];

arr.forEach(function (item,value,arr){
    console.log(item,value,arr);
});
const arr=[1,2,3,4,5,67];
const newarr = arr.map((num)=>(num*10))
                .map((num)=>(num+2))
                .filter((n)=>n>12);

console.log(newarr);
