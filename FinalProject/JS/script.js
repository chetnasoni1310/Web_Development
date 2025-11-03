// --- 1️⃣ Animate text lines in order ---
gsap.from(".line h1", {
  y: 150,
  opacity: 0,
  stagger: 0.2,
  duration: 0.6,
  delay: 0.7, // slightly earlier start for smooth timing
  ease: "power3.out",
});

// --- 2️⃣ Animate the counter ---
gsap.from(".count", {
  y: 200,
  opacity: 0,
  delay: 1.2,
  duration: 0.6,
  ease: "power3.out",
});

// --- 3️⃣ Animate 'NOW' appearing with the last line ---
gsap.from(".fontSwitch", {
  y: 150,
  opacity: 0,
  duration: 0.6,
  delay: 0.7, // aligns with last line appearing
  ease: "power3.out",
  onComplete: startBlinkingAndCounter // trigger after it's visible
});

// --- 4️⃣ Animate the waiting text ---
gsap.from(".waitingRequest h6", {
  y: 450,
  delay: 1.8,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});


// --- 🌟 Function to sync blinking + counter ---
function startBlinkingAndCounter() {
  const fontSwitch = document.querySelector(".fontSwitch");
  const fonts = [
    '"Big Shoulders Inline", sans-serif',
    '"Inter", sans-serif'
  ];
  let fontIndex = 0;

  // Blink like light flicker (fade + switch font)
  const fontSwitchInterval = setInterval(() => {
    fontSwitch.style.opacity = 0;
    setTimeout(() => {
      fontSwitch.style.fontFamily = fonts[fontIndex];
      fontIndex = (fontIndex + 1) % fonts.length;
      fontSwitch.style.opacity = 1;
      if(fontIndex==1)
      {
        fontSwitch.style.fontStyle='italic';
      }
      else
      {
        fontSwitch.style.fontStyle='normal';
        fontSwitch.style.fontWeight=500;
        
      }
    }, 200);
  }, 500);

  // Counter starts after blink begins
  let count = 0;
  const counter = document.querySelector(".count");
  const counterInterval = setInterval(() => {
    count++;
    counter.textContent = count < 10 ? "0" + count : count;
    if (count === 100) {
      clearInterval(fontSwitchInterval);
      clearInterval(counterInterval);
      fontSwitch.style.opacity = 1; // ensure visible at end


       fadeOutSequence();
    }
  }, 50);
}


function fadeOutSequence(){
  gsap.to([".line:nth-child(1)",".line:nth-child(2)",".count"],{
    opacity:0,
    y:-50,
    duration:0.8,
    ease:'power2.inOut',
    stagger:0.1,
    delay:0.5
  });

  gsap.to("#lastLine",{
    opacity: 0,
    y: -120,
    duration: 0.8,
    ease: "power2.inOut",
    delay: 1,
  });


    gsap.to(".waitingRequest", {
    opacity: 0,
    y: -80,
    duration: 1,
    ease: "power2.inOut",
    delay: 1.2,
  });
}
