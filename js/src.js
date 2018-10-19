var menuOpener = document.getElementById('menu-opener');
var menu = document.getElementById('menu');


menuOpener.addEventListener(
  'click',
  function (){
    if (menuOpener.classList.contains("active")){
      menuOpener.classList.remove("active");
      menu.classList.remove("active");
    }else{
      menuOpener.classList.add("active");
      menu.classList.add("active");
    } 
})