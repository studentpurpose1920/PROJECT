(function () {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('feedback');
    const submitBtn = document.getElementById('submitBtn');

    // 👉 Use your deployed Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzfP4daw-0rf8rrasLZCyPa1uylYGDOxQO27rby43UZ0WMWoLSyU0Twpz5r5DjpgEiD/exec';

    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        feedback.style.display = 'none';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            feedback.textContent = '⚠️ Please fill all fields.';
            feedback.style.color = 'red';
            feedback.style.display = 'block';
            return;
        }

        // Disable button while sending
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Use FormData (no preflight / CORS issues)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.status === 'success') {
                    feedback.textContent = '✅ Thanks — your message was sent!';
                    feedback.style.color = 'green';
                    feedback.style.display = 'block';
                    form.reset();
                } else {
                    feedback.textContent = '❌ Error saving your message.';
                    feedback.style.color = 'red';
                    feedback.style.display = 'block';
                    console.error('Server response:', data);
                }
            })
            .catch(err => {
                feedback.textContent = '⚠️ Network error. Try again later.';
                feedback.style.color = 'red';
                feedback.style.display = 'block';
                console.error(err);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send';
            });
    });
})();
