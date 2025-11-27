const text1 = "Bommasandra Kalika Kendra";
const text2 = "Learning • Culture • Service";

let i1 = 0;
let i2 = 0;
const speed = 80;

function typeText1() {
  if (i1 < text1.length) {
    document.getElementById("typeText1").innerHTML += text1.charAt(i1);
    i1++;
    setTimeout(typeText1, speed);
  } else {
    setTimeout(typeText2, 300);
  }
}

function typeText2() {
  if (i2 < text2.length) {
    document.getElementById("typeText2").innerHTML += text2.charAt(i2);
    i2++;
    setTimeout(typeText2, speed);
  } else {
    setTimeout(startRedirectAnimation, 2000);
  }
}

function startRedirectAnimation() {
  const box = document.getElementById("welcomeBox");
  box.classList.add("slide-up");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1200);
}

window.onload = typeText1;
