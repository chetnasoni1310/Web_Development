  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // only trigger once
      }
    });
  }, { threshold: 0.4 }); // adjust if it triggers too early/late

  const img = document.querySelector(".page-3 .image img");
  observer.observe(img);