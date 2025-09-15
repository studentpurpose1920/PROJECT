const scriptURL = 'https://script.google.com/macros/s/AKfycbxgbeAy41MwvqwTl4YYKasqCiGcFHp1bvrOk2QxjjcQIO7c8C4G24qcV_VN2qvymH74/exec';
const form = document.forms['contact-form'];
const loadingPopup = document.getElementById('loading');

form.addEventListener('submit', e => {
    e.preventDefault();

    const reg = document.getElementById('reg').value;

    // show loading popup
    loadingPopup.style.display = 'flex';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Welcome");
            // optional: hide popup just before redirect
            loadingPopup.style.display = 'none';

            if (reg === 'r23') {
                window.location.href = '1.html';
            } else if (reg === 'r19') {
                window.location.href = '2.html';
            } else {
                window.location.href = 'branche.html';
            }
        })
        .catch(error => {
            loadingPopup.style.display = 'none';
            console.error('Error!', error.message);
            alert("There was an error submitting the form.");
        });
});
