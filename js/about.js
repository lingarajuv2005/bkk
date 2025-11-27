const audio = document.getElementById("bgAudio");
const toggleBtn = document.getElementById("audioToggle");

// Start very soft volume
audio.volume = 0.05;

// Try to autoplay after slight delay (browser permission workaround)
// window.addEventListener("load", () => {
//   setTimeout(() => {
//     audio.play().catch(() => {});
//   }, 500);
// });

// toggleBtn.addEventListener("click", () => {
//   if (audio.muted) {
//     audio.muted = false;
//     toggleBtn.textContent = "🔊";
//   } else {
//     audio.muted = true;
//     toggleBtn.textContent = "🔇";
//   }
// });
// muted for time being