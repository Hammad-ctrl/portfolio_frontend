document.querySelectorAll(".one-project").forEach((project) => {
  const track = project.querySelector(".carousel-track");
  const images = project.querySelectorAll(".carousel-image");
  const dotsContainer = project.querySelector(".carousel-dots");

  let currentIndex = 0;
  const total = images.length;

  // Create dots
  const dots = [];
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => moveToSlide(i));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function moveToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
  }

  setInterval(autoSlide, 6000);
});

document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll(".review-text");
  const maxLength = 50;

  reviews.forEach(review => {
    const originalText = review.textContent.trim();
    if (originalText.length > maxLength) {
      review.textContent = originalText.slice(0, maxLength).trim() + "...";
    }
  });
});


const chatBtn = document.getElementById('chat-btn');
const centerSection = document.getElementById('center-section');
const chatSide = document.getElementById('chat-side');
let isChat = true;
chatBtn.addEventListener("click",()=>{
if(isChat){
  isChat=true;
  centerSection.classList.remove("flex");
  centerSection.classList.add("hidden");
  chatSide.classList.remove("hidden");
  chatSide.classList.add("flex");
  chatSide.style.width="100%";
}
})