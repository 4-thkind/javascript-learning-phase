const btn = document.querySelector('#emoji');
const emojis = ['😆','😅','🤣','😂','😀','🤑','🤨','🙂','😊','😗','😛','😏','🤥','😴','🥺','😧','😇','😳','🙃','🥴','🧐','🤨','😒','🤔','🤭','🥰','🤐','👀','🤔','🤪','🥲','😃','😁', '😬',
];

btn.addEventListener("mouseover",function(){
    let i=Math.floor(Math.random()*emojis.length);
    btn.innerHTML=emojis[i];
})
btn.addEventListener("mouseout",function(){
    btn.innerHTML='<img src="https://static.wikia.nocookie.net/emoji5546/images/3/34/Distorted_Face_Apple_Version.png/revision/latest?cb=20260319001955">'
})