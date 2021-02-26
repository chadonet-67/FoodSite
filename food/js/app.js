window.addEventListener('scroll',function (){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY >0);
    
});




/*window.onscroll = function(){
    if(document.documentElement.scrollTop >100){
        document.getElementById('header').style.background = "white"
        document.getElementById('logo').style.color = "#111"

    }
}
