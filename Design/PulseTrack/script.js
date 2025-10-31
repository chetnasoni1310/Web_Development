


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const group = entry.target;
        group.querySelector(".horizontal").classList.add("draw");
        group.querySelector(".vertical").classList.add("draw");
        group.querySelector(".feature").classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".group").forEach((el) => observer.observe(el));

/* Optional: animate image */
// const imgObserver = new IntersectionObserver(
//   (entries) => {
//     if (entries[0].isIntersecting) {
//       const image = document.querySelector(".page-3 .image img");
//       image.classList.add("animate");
//     }
//   },
//   { threshold: 0.3 }
// );
// imgObserver.observe(document.querySelector(".page-3 .image img"));

 window.addEventListener('scroll', () => {
    const model = document.querySelector('.page-3 model-viewer');
    if (!model) return;

    const rect = model.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if model is in view
    if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
      if (!model.classList.contains('visible')) {
        model.classList.add('visible');
        // Start rotation a bit after appearing
        setTimeout(() => {
          model.classList.add('rotate');
        }, 1000);
      }
    }
  });