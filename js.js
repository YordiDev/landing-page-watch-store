const testimonials = [
    {
      image: "./public/playground_assets/photo_5796505240575524596_y-removebg-preview.png"
    },
    {
      image: "./public/playground_assets/photo_5796505240575524617_x-removebg-preview-300h.png"
    },
  ];
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextsvg = document.getElementById("next");
  let prevsvg = document.getElementById("prev");
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <img src=${testimonials[i].image}>
    `;
  };
  window.onload = displayTestimonial;