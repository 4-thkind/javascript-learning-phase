document.querySelector('#id').addEventListener("click",
    function(e){
        console.log(e.target.parentNode);
       if(e.target.tagName === 'IMG'){
        let removeIT=e.target
        removeIT.remove();
       }
});     