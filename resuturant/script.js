const head = document.querySelector("header")
let menu = document.getElementById("menu-icon")
let cross = document.getElementById("cross")
let navbar = document.querySelectorAll(".navlist")

console.log(navbar)

window.addEventListener("scroll" ,()=>{
    head.classList.toggle("sticky", window.scrollY>90)
})

menu.addEventListener("click", ()=>{
    document.querySelector(".navlist").style.top = "0px"
    document.getElementById("cross").children[0].style.display="initial"

})
cross.addEventListener("click", ()=>{
    document.querySelector(".navlist").style.top = "-1000px"
    document.getElementById("cross").children[0].style.display="none"

})




const sr = ScrollReveal({
    origin: "bottom",
    distance: "85px",
    duration: 2500,
    reset: true
});
const ir = ScrollReveal({
    origin: "top",
    distance: "85px",
    duration: 2200,
    reset: true
});

sr.reveal('.home-text', { delay: 200 });
ir.reveal('.home-img', { delay: 200 });
ir.reveal('.container', { delay: 300 });
ir.reveal('.about', { delay: 400 });
sr.reveal('.our-shop', { delay: 200 });
ir.reveal('.reviews', { delay: 200 });
sr.reveal('.contact', { delay: 200 });



