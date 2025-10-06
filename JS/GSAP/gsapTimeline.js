
var tl = gsap.timeline();

tl.to(".box1",{
    x:1000,
    rotate:360,
    backgroundColor: 'red',
    duration:1,
    scale:0.5,
    delay:1,
})
.to(".box2",
    {
  x:1000,
    rotate:360,
    backgroundColor: 'red',
    scale:0.5,
    duration:1,
    }
).to(".box3",
    {
    x:1000,
    rotate:360,
    backgroundColor: 'red',
    scale:0.5,
    duration:1,
    }
)