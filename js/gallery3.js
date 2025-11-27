const gallery = document.getElementById('aarohan2024');
const images = gallery.querySelectorAll('img');

function highlightCenterImage() {
  const galleryRect = gallery.getBoundingClientRect();
  let minDiff = Infinity, centerImg = null;
  images.forEach(img => {
    const imgRect = img.getBoundingClientRect();
    const imgCenter = imgRect.left + imgRect.width / 2;
    const galleryCenter = galleryRect.left + galleryRect.width / 2;
    const diff = Math.abs(imgCenter - galleryCenter);
    if (diff < minDiff) {
      minDiff = diff;
      centerImg = img;
    }
    img.style.filter = "grayscale(70%) brightness(1.3)";
  });
  if (centerImg) {
    centerImg.style.filter = "none"; // Show color
  }
}

// Run on every animation frame (for smoothness)
function animateHighlight() {
  highlightCenterImage();
  requestAnimationFrame(animateHighlight);
}
animateHighlight();

// above all coding for center photo become bringt and color full