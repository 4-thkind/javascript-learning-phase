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