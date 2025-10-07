var tl = gsap.timeline();

tl.from(".page1 #circle", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: ".page1 #circle",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 5, //either true or false or a value between 1-5 for smoothness
  },
})
  .from(".page2 #circle", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 720,
    scrollTrigger: {
    trigger: ".page2 #circle",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 5, //either true or false or a value between 1-5 for smoothness
  },
  })
  .from(".page3 #circle", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 720,
    scrollTrigger: {
    trigger: ".page3 #circle",
    scroller: "body",
    markers: false,
    // start: "top 60%",
    // end: "top 30%",
    // scrub: 5, //either true or false or a value between 1-5 for smoothness
  },
  });
