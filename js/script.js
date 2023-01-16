const btn = document.getElementById('menu-btn');
const nav = document.getElementById("menu");

btn.addEventListener("click", function(){
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})

// GSAP 
gsap.to(".hero-left", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3'
});

gsap.to(".hero-right", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3'
});

gsap.to(".navbar-menu a", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3',
    stagger: 0.2
});


gsap.to(".gsap-testimonial div:first-child", {
    opacity: 1,
    x: 0,
    scrollTrigger: {
        trigger: '.gsap-testimonial',
        start: 'top-=600 top',  
        end: 'bottom-=400 top',
        markers: true,
        scrub: true,
    }
});

gsap.to(".gsap-testimonial div:nth-child(2)", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
        trigger: '.gsap-testimonial',
        start: 'top-=600 top',  
        end: 'bottom-=400 top',
        markers: true,
        scrub: true,
    }
});

gsap.to(".gsap-testimonial div:last-child", {
    opacity: 1,
    x: 0,
    scrollTrigger: {
        trigger: '.gsap-testimonial',
        start: 'top-=600 top',  
        end: 'bottom-=400 top',
        markers: true,
        scrub: true,
    }
});

