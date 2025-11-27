const gallery = document.getElementById('specialGallery');
const images = gallery.querySelectorAll('img');

function updateActiveImage() {
  const galleryRect = gallery.getBoundingClientRect();
  let closestIndex = 0;
  let closestDistance = Infinity;

  images.forEach((img, idx) => {
    const rect = img.getBoundingClientRect();
    const imgCenter = rect.left + rect.width / 2;
    const galleryCenter = galleryRect.left + galleryRect.width / 2;
    const distance = Math.abs(imgCenter - galleryCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = idx;
    }
  });

  images.forEach((img, idx) => {
    img.classList.toggle('active', idx === closestIndex);
  });
}

let scrollSpeed = 0.5; // adjust as needed
let rafId = null;

function autoScrollStep() {
  // logging for debug
  console.log("Auto scroll step, before:", gallery.scrollLeft);

  gallery.scrollLeft += scrollSpeed;

  // looping: if at end, reset
  const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
  if (gallery.scrollLeft >= maxScrollLeft) {
    // jump back to start
    gallery.scrollLeft = 0;
    console.log("Looping: resetting scrollLeft to 0");
  }

  updateActiveImage();

  rafId = requestAnimationFrame(autoScrollStep);
}

function startAutoScroll() {
  if (!rafId) {
    rafId = requestAnimationFrame(autoScrollStep);
    console.log("Starting autoScroll");
  }
}

function stopAutoScroll() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
    console.log("Stopped autoScroll");
  }
}

// initial setup
updateActiveImage();
startAutoScroll();

// optional: pause on hover
gallery.addEventListener('mouseenter', stopAutoScroll);
gallery.addEventListener('mouseleave', startAutoScroll);

// also manual scroll
gallery.addEventListener('scroll', () => {
  requestAnimationFrame(updateActiveImage);
});
