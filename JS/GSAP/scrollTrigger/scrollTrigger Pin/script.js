var tl = gsap.timeline();

tl.to(".page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:".page2" , //Jab pin krte hai tb bss uss element ke parent ko trigger pe rkhte hai 
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
     }
});


