const cursor = document.querySelector('.cursor');

let hexNumb=function(){
    let hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;

}
document.addEventListener('mousemove', function (e) {
  moveCursor(e.pageX, e.pageY);
});

const moveCursor = function (pageX, pageY) {
  cursor.style.left = pageX + 'px';
  cursor.style.top = pageY + 'px';

  let randomColor = hexNumb();

  cursor.style.backgroundColor = randomColor;
};
