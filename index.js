let btn= document.getElementById('btn')
btn.addEventListener('click', changeword);

function changeword(){
    btn.style.backgroundColor='blue';
    btn.style.color='black';
     btn.style.border='5px solid whit';
     let changeword=document.querySelector('#new-word');
      changeword.innerHTML= "Javascript";
      changeword.style.color='orange';
      changeword.style.textTransform='upperCase'
      changeword.style.fontweight='Bold'
    }