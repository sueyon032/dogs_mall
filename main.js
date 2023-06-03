const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

// /*slide무한반복*/
// const slides = slidesContainer.querySelectorAll('.slide');
// slides.forEach((slide) => {
//   const cloneSlide = slide.cloneNode(true);
//   slidesContainer.appendChild(cloneSlide);
// });

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
