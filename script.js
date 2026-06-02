const nav = document.getElementById("nav");

function showside(){
    nav.style.right = "20px";
    nav.style.transition = "0.8s ease";

    nav.style.filter = "blur(0px)";
}

function hideside(){
    nav.style.right = "-200px";
    nav.style.transition = "0.8s ease";
    
    nav.style.filter = "blur(10px)";
}


/*gsap.to(nav,  {y: -200, duration: 1})*/