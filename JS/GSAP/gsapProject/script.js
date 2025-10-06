var tl = gsap.timeline();

tl.from(".nav h1",{
    y:-50,
    opacity:0,
    delay:0.2,
    duration:0.5,
    stagger:0.3,
})
tl.from(".main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3
})
tl.from(".images img",{
    x:200,
    opacity:0,
    duration:0.3,
    stagger:0.2,
    rotate:45,
})




