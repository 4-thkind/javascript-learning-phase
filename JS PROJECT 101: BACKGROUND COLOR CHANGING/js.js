
const buttons = document.querySelectorAll('.button');

buttons.forEach ((button)=>{
  button.addEventListener('click', function (e) {
    
    console.log(e.target);
    if (e.target.id === 'black') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      document.body.style.backgroundColor = e.target.id;
    }
     if (e.target.id === 'red') {
      document.body.style.backgroundColor = e.target.id;
    }
    
  });
});

