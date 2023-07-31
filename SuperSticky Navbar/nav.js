let $ = document;
let scrollAmount = 0;
let nav = $.getElementById("nav");
let count = 1;
$.addEventListener("scroll", (event)=>{
    nav.style.height = "0rem";
    let currentScrollAmount = $.documentElement.scrollTop;
    if(currentScrollAmount == 0){
        nav.style.height = "5rem";
        nav.style.position = "static";
        nav.style.width = "99%";
        nav.style.borderBottomLeftRadius = "2rem";
        nav.style.borderBottomRightRadius = "2rem";
        scrollAmount = currentScrollAmount;
    }
    else if(scrollAmount > currentScrollAmount){
        nav.style.width = "100%";
        nav.style.borderBottomLeftRadius = 0;
        nav.style.borderBottomRightRadius = 0;
        nav.style.height = "4rem";
        nav.style.position = "fixed";
        nav.style.top = "0";
        scrollAmount = currentScrollAmount;
    }else{
        nav.style.height = "0rem";
        scrollAmount = currentScrollAmount;
    }
})