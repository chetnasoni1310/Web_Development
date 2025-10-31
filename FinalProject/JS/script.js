gsap.from(".line h1", {
  y: 150,
  stagger: 0.2,
  duration: 0.6,
  delay: 1,
});

gsap.from(".timer h3 span", {
  y: 200,
  opacity:0,
  delay: 1,
});

gsap.from(".waitingRequest h6", {
  y: 500,
  delay: 2,
});

setTimeout(() => {
  let count = 0;
  const counter = document.querySelector(" .timer h3 span");
  const interval = setInterval(() => {
    count++;
    counter.textContent = count < 10 ? "0" + count : count;
    if (count == 100) {
      clearInterval(interval);
    }
  }, 50);
}, 1200);

const now = document.querySelector("#fontSwitch");
