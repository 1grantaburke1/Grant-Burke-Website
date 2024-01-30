var s1 = document.getElementById("s1")

var s2 = document.getElementById("s2")

var s3 = document.getElementById("s3")

var s4 = document.getElementById("s4")

s1.addEventListener("mouseover" , function(){
    s1.classList.remove("n")
    s1.classList.add("m")
})

s1.addEventListener("mouseleave" , function(){
    s1.classList.remove("m")
    s1.classList.add("n")
})

s2.addEventListener("mouseover" , function(){
    s2.classList.remove("n")
    s2.classList.add("m")
})

s2.addEventListener("mouseleave" , function(){
    s2.classList.remove("m")
    s2.classList.add("n")
})
s3.addEventListener("mouseover" , function(){
    s3.classList.remove("n")
    s3.classList.add("m")
})

s3.addEventListener("mouseleave" , function(){
    s3.classList.remove("m")
    s3.classList.add("n")
})
s4.addEventListener("mouseover" , function(){
    s4.classList.remove("n")
    s4.classList.add("m")
})

s4.addEventListener("mouseleave" , function(){
    s4.classList.remove("m")
    s4.classList.add("n")
})


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