const form = document.getElementById('contactForm');
const submitMessage = document.getElementById('submitMessage');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(this.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        submitMessage.style.display = 'block';
        submitMessage.textContent = 'Submit successfully!';
        form.reset();
      } else {
        submitMessage.style.display = 'block';
        submitMessage.textContent = 'Error submitting form. Please try again later.';
      }
    } catch (err) {
      submitMessage.style.display = 'block';
      submitMessage.textContent = 'Error submitting form. Please check your connection.';
    }
  });

