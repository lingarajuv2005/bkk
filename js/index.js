document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-card h3");

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const update = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / 80);
        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(update, 40);
        } else {
          counter.innerText = target + (target === 140 ? "+" : "");
        }
      };
      update();
    });
  };

  // Run animation only when section is visible
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(document.querySelector("#journey"));
});



fetch("http://localhost:5000/api/centers")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector("#journey .row.g-4");
    container.innerHTML = data.map(center => `
      <div class="col-md-5">
        <div class="center-card shadow-sm">
          <h5>${center.name}</h5>
          <p>${center.students} Students</p>
        </div>
      </div>
    `).join("");
  });



document.querySelector('.newsletter-form').addEventListener('submit', function(e){
  e.preventDefault();
  const email = this.email.value;
  alert("Thank you for subscribing: ");
  this.reset();
});

