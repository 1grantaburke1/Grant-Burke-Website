
var winde = document.querySelector(".menu-scroll-btn")
var placeHolder = document.querySelector(".menu-placeholder")
var menu = document.querySelector(".menu")
var isDown = true;

window.onload = function(){
    window.screenY = 0;
}

winde.addEventListener("click" , function(){
    if (isDown == true && window.scrollY != 0){
        placeHolder.classList.remove("windeDown");
        placeHolder.classList.add("windeUp");

        menu.classList.remove("floatDown")
        menu.classList.add("floatUp");

        winde.innerHTML = "&#8595;"

        isDown = false;
    }
    else{
        placeHolder.classList.remove("windeUp");
        placeHolder.classList.add("windeDown");

        menu.classList.remove("floatUp")
        menu.classList.add("floatDown");

        winde.innerHTML = "&#8593;"
        isDown = true;
    }
})

var el = document.getElementById('overhead');

window.onscroll = function (ev) {
    if (window.scrollY == 0){
        placeHolder.classList.remove("windeUp");
        placeHolder.classList.add("windeDown");

        menu.classList.remove("floatUp")
        menu.classList.add("floatDown");

        winde.classList.remove("floatDown-btn")
        winde.classList.add("floatUp")
        winde.innerHTML = "&#8593;"
        isDown = true;
    }
    else{
        winde.classList.remove("floatUp")
        winde.classList.add("floatDown-btn")
    } 
}

let navagators = document.querySelectorAll(".ab_list_item")

navagators.forEach(el => {
    el.addEventListener("click" , function(){
        
        el.classList.add("shadow")
    

        setTimeout(() => {
            
            el.classList.remove("shadow")
            
        }, 300) 
    }
)})