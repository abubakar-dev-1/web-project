let navbar = document.querySelector(".nav2")
console.log(navbar)

window.addEventListener("scroll" ,()=>{
    navbar.classList.toggle("sticky", window.scrollY>10)
})

document.addEventListener('DOMContentLoaded', function() {
    const br = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2500,
        reset: true
    });
    br.reveal('.main1', { delay: 500 });
    br.reveal('.right-por', { delay: 400 });
    br.reveal('.main-pic2-container', { delay: 400 });
    br.reveal('.footer-container', { delay: 400 });
    br.reveal('.footer-video', { delay: 500 });


    const tr = ScrollReveal({
        origin: "top",
        distance: "85px",
        duration: 1500,
        reset: true
    });
    tr.reveal('.left-por', { delay: 500 });
    tr.reveal('.txt-main2', { delay: 500 });


    const lr = ScrollReveal({
        origin: "left",
        distance: "85px",
        duration: 1500,
        reset: true
    });
    lr.reveal('.main2-upper', { delay: 200 });
    lr.reveal('.main2-lower', { delay: 200 });
    lr.reveal('.trending', { delay: 200 });
    lr.reveal('.conatiner', { delay: 200 });
    lr.reveal('.left-footer', { delay: 500 });

    const srCenter = ScrollReveal({
        origin: "bottom",
        distance: "0px", 
        duration: 2000,
        scale: 0.65, 
        opacity: 0.2, 
        reset: true
    });

    srCenter.reveal('.main3-shop', { delay: 200 });
    srCenter.reveal('.main4-features', { delay: 200 });
    srCenter.reveal('.social-icons', { delay: 700 });
});

let hambar = document.getElementById("hambar");
isfalse = false
let menu = document.querySelector(".sec1")
hambar.addEventListener("click", ()=>{
    if(isfalse == true){
        menu.style.display = "none"
        isfalse = false
       
    }
    else{
        menu.style.display = "flex"
        isfalse = true
        body.style.opacity=0
    }

})


