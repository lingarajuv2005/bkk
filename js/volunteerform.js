// volunteer.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('volunteerForm');
  const msg = document.getElementById('formMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.textContent = '';
    msg.className = 'form-message';

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      address: form.address.value.trim(),
      company: form.company.value.trim()
    };

    // basic client-side validation
    if (!data.name || !data.email || !data.phone || !data.address) {
      msg.textContent = 'Please fill all required fields.';
      msg.classList.add('error');
      return;
    }

    try {
      // adjust origin if your server runs on a different origin
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const json = await res.json();
      if (res.ok && json.ok) {
        msg.textContent = 'Thank you — registration received!';
        msg.classList.add('success');
        form.reset();
      } else {
        msg.textContent = json.error || 'Submission failed. Try again later.';
        msg.classList.add('error');
      }
    } catch (err) {
      console.error(err);
      msg.textContent = 'Network error — please try again later.';
      msg.classList.add('error');
    }
  });
});
