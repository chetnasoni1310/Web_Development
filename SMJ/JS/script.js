function loaderScript() {
  const captions = [
    "Stringing every bead with care...",
    "Designing with devotion...",
    "Crafting heritage in gold...",
    "Polishing stories of beauty...",
  ];

  const svgs = document.querySelectorAll(".loadingImages svg");
  const captiontext = document.querySelector(".loadingText h2");
  const loader = document.querySelector(".loader");

  let index = 0;
  const intervalTime = 1200;  // time per SVG
  const totalDuration = intervalTime * svgs.length + 1000; // full cycle + smooth buffer

 //  Disable scroll
  document.body.classList.add("loading");

  function cycleSVGs() {
    svgs.forEach((svg) => svg.classList.remove("active"));
    svgs[index].classList.add("active");
    index = (index + 1) % svgs.length;
    captiontext.textContent = captions[index];
  }
  cycleSVGs(); 
   const interval = setInterval(cycleSVGs, intervalTime);

  setTimeout(() => {
    clearInterval(interval);
    loader.classList.add("hide");
    setTimeout(() =>{ 
      loader.remove();
      document.body.classList.remove("loading");
    }, 2000);
  }, totalDuration);
}
loaderScript();


function heroSectionScript() {
  window.addEventListener("load", () => {
    const banner = document.querySelector(".bannerContent");
    const bannerWidth = banner.scrollWidth;
    const visibleWidth = banner.clientWidth;

    //start from center
    // banner.scrollLeft = (bannerWidth - visibleWidth) / 2;

    //custom
    const cardWidth = banner.querySelector("img").clientWidth;
    banner.scrollLeft = (cardWidth * 13) / 16;
  });
}
heroSectionScript();

function heroSectionAnimation(){
  let navBar = document.querySelector('nav');
  
  gsap.from(navBar,{
    y:-100,
    opacity:0,
    delay:1.2,
    duration:0.5
  })
}
// heroSectionAnimation();

function kidsSection() {
  window.addEventListener("load", () => {
    const kidsSection = document.querySelector(".kidsCards");
    const bannerWidth = kidsSection.scrollWidth;
    const visibleWidth = kidsSection.clientWidth;
    const cardWidth = kidsSection.querySelector("img").clientWidth;
    kidsSection.scrollLeft = cardWidth * 0.7;
  });
}
kidsSection();

function trendingSection() {
  const cards = document.querySelectorAll(".trendingContainer .trendingCard");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");

  let currentCard = 0;

  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.remove(
        "active",
        "left",
        "right",
        "secondLeft",
        "secondRight"
      );
      const video = card.querySelector("video");
      if (video) video.pause();

      if (index === currentCard) {
        card.classList.add("active");
        if (video) video.play();
      } else if (index === (currentCard - 1 + cards.length) % cards.length) {
        card.classList.add("left");
      } else if (index === (currentCard - 2 + cards.length) % cards.length) {
        card.classList.add("secondLeft");
      } else if (index === (currentCard + 1) % cards.length) {
        card.classList.add("right");
      } else if (index === (currentCard + 2) % cards.length) {
        card.classList.add("secondRight");
      }
    });

    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        if (card.classList.contains("left")) {
          currentCard = (currentCard - 1 + cards.length) % cards.length;
          updateCards();
        } else if (card.classList.contains("secondLeft")) {
          currentCard = (currentCard - 2 + cards.length) % cards.length;
          updateCards();
        } else if (card.classList.contains("right")) {
          currentCard = (currentCard + 1) % cards.length;
          updateCards();
        } else if (card.classList.contains("right")) {
          currentCard = (currentCard + 2) % cards.length;
          updateCards();
        }
      });
    });

    nextButton.addEventListener("click", () => {
      currentCard = (currentCard + 1) % cards.length;
      updateCards();
    });

    prevButton.addEventListener("click", () => {
      currentCard = (currentCard - 1 + cards.length) % cards.length;
      updateCards();
    });
  }

  updateCards();
}
trendingSection();



