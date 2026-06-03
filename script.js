const nav = document.getElementById("nav");
const whatsapp = document.getElementById("whatsapp");

function showside(){
    nav.style.right = "20px";
    nav.style.transition = "0.8s ease";
    nav.style.filter = "blur(0px)";
    whatsapp.style.display = "none";
}

function hideside(){
    nav.style.right = "-200px";
    nav.style.transition = "0.8s ease";
    nav.style.filter = "blur(10px)";
    whatsapp.style.display = "flex";
}


/*gsap.to(nav,  {y: -200, duration: 1})*/