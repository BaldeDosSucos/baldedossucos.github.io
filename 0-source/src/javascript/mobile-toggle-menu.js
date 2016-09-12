var mobileBtn = document.getElementById('mobile-btn');
var header = document.getElementById('header');
var ul = document.getElementById('nav-ul');
var li = ul.querySelectorAll('li');
var i = 0;

function toggleMenu(){
     mobileBtn.classList.toggle('mobile-btn--mobile-on');
     header.classList.toggle('header--mobile-on');
     i=0;

          if(li[0].classList.contains('li--mobile-off')){
               setTimeout( function(){
                    while (i < li.length){
                    li[i].className='li--mobile-on';
                    li[i].removeAttribute('li--mobile-off');
                    i++;
                    }
               }, 220);
          }else{
               while (i < li.length){
               li[i].className='li--mobile-off';
               li[i].removeAttribute('li--mobile-on');
               i++;
               }
          }  
}

mobileBtn.addEventListener("click", function(){
     toggleMenu();
});

ul.addEventListener("click", function(){
     toggleMenu();
});
