const slidesContainer = document.getElementById('slides-container');
const slides = slidesContainer.getElementsByClassName('slide');
const slideCount = slides.length;
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.display = 'none';
  }

  slides[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  showSlide(currentIndex);
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 3000); // 3초마다 자동으로 다음 슬라이드로 전환
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

document.getElementById('slide-arrow-next').addEventListener('click', function() {
  stopSlideShow(); // 버튼 클릭 시 자동 슬라이드 전환 중지
  nextSlide();
  startSlideShow(); // 다음 슬라이드 이후 자동 슬라이드 전환 재개
});

document.getElementById('slide-arrow-prev').addEventListener('click', function() {
  stopSlideShow(); // 버튼 클릭 시 자동 슬라이드 전환 중지
  previousSlide();
  startSlideShow(); // 이전 슬라이드 이후 자동 슬라이드 전환 재개
});

startSlideShow(); // 페이지 로드 시 자동 슬라이드 전환 시작