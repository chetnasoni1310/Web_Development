// var box = document.querySelector("#box");


gsap.to("#box", {
    x:1000,
    rotate:360,
    duration:3,
    backgroundColor:"green",
    delay:1
});

gsap.from("#box", {
    x:0,
    rotate:-360,
    duration:3,
    backgroundColor:"red",
    delay:2
});