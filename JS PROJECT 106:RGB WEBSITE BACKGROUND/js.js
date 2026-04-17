
let hexNumb=function(){
    let hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;

}
let changeBG = function(){
    document.body.style.backgroundColor=hexNumb();
}
let interval;
let startChanging=function(){
    interval=setInterval(changeBG,300);
}
let stopChanging = function(){
    clearInterval(interval);
}

document.querySelector("#start").addEventListener("click",startChanging);

document.querySelector("#stop" ).addEventListener("click",stopChanging);

