window.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('specialGallery');
  const images = Array.from(gallery.querySelectorAll('img'));

  function updateActive() {
    const galleryRect = gallery.getBoundingClientRect();
    const centerX = galleryRect.left + galleryRect.width / 2;

    let closestIdx = 0;
    let minDist = Infinity;

    images.forEach((img, idx) => {
      const rect = img.getBoundingClientRect();
      const imgCenter = rect.left + rect.width / 2;
      const dist = Math.abs(imgCenter - centerX);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = idx;
      }
    });

    images.forEach((img, idx) => {
      if (idx === closestIdx) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  }

  // Run periodically
  setInterval(updateActive, 50);
  window.addEventListener('resize', updateActive);
});

// lightbox JS
// const galleryImages = document.querySelectorAll(".gallery-card img");
// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightbox-img");
// const closeBtn = document.querySelector(".lightbox .close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.getAttribute("data-full");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// close lightbox on background click
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
