function locoCall(){gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();}

/*************************************************************************************************************** */
/*************************************************************************************************************** */
/*************************************************************************************************************** */
/*************************************************************************************************************** */
/*************************************************************************************************************** */
/*************************************************************************************************************** */
// For 1 element
function singleElementSpan(){// var firsth1Content = document.querySelector("#page2 h1").textContent;

// console.log(firsth1Content);
// var elements = firsth1Content.split("");

// console.log(elements);

// var clutter="";

// elements.forEach(function(elem){
//    clutter+= `<span>${elem}</span>`
// })

// console.log(clutter);

// document.querySelector("#page2 h1").innerHTML = clutter;

// gsap.to("#page2 h1 span",{
//    color:"#F7F7EE",
//    stagger:0.1,
//    scrollTrigger:{
//       trigger:"#page2 h1",
//       scroller:"body",
//       markers:true,
//       start:"top 30%",
//       end:"top 60%"
//    }
// })
}

/*************************************************************************************************************** */
/*************************************************************************************************************** */
/*************************************************************************************************************** */
/*************************************************************************************************************** */
/*************************************************************************************************************** */
/*************************************************************************************************************** */
// For multiple elements

function spillingWithSpan(){var allH1 = document.querySelectorAll("#page2 h1");
//yeh ek nodelist aai
//ispe loop chalayenge

allH1.forEach(function (elem1) {
  var elements = elem1.textContent.split("");
  //   console.log(elements);
  var clutter = "";
  elements.forEach(function (letters) {
    clutter += `<span>${letters}</span>`;
    //  console.log(clutter);
  });
  elem1.innerHTML = clutter;
  //   console.log(elem1.textContent);
});
}

function GSAPCall(){
gsap.to("#page2 h1 span", {
   color: "#F7F7EE",
   stagger: 0.1,
   scrollTrigger: {
   trigger: "#page2 h1",
   scroller: "#main",
   markers: true,
   start: "top 35%",
   end: "top -20%",
   scrub:2,
  },
});
}

locoCall();
spillingWithSpan();
GSAPCall();
