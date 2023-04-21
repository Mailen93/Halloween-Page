const navMenu = document.getElementById("nav-menu"),
navToogle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');

if(navToogle){
    navToogle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    } )
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

//SCROLL REVEAL//

const sr = ScrollReveal({
    origin: "top",
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{
    interval: 100
})

sr.reveal(`.about__data, .discount__img`,{
    origin: "left"
})

sr.reveal(`.about__img, .discount__data`,{
    origin: "right"
})
