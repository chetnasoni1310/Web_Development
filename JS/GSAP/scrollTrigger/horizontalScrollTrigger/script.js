gsap.to("#page2 h1",{
   transform:"translateX(-170%)",
   scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:2,
    pin:true
   }
});

//There is some some issues in h1 because of its huge size 