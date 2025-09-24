const scriptURL = 'https://script.google.com/macros/s/AKfycbxthysX9kAkfElLIqKZymENc5os2WouW1mvab1gRSvcQKV1Ngw9PE70S0t3YQpNZ2sPkQ/exec';
const form = document.forms['contact-form'];
const loadingPopup = document.getElementById('loading');

form.addEventListener('submit', e => {
    e.preventDefault();

    const reg = document.getElementById('reg').value;

    if (!reg) {
        alert('Please select your regulation');
        return;
    }

    // show loading popup
    if (loadingPopup) loadingPopup.style.display = 'flex';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Welcome");
            if (loadingPopup) loadingPopup.style.display = 'none';

            if (reg === 'R23') {
                window.location.href = 'R23.html';
            } else if (reg === 'R20') {
                window.location.href = 'R20.html';
            } else {
                window.location.href = 'branche.html';
            }
        })
        .catch(error => {
            if (loadingPopup) loadingPopup.style.display = 'none';
            console.error('Error!', error.message);
            alert("There was an error submitting the form.");
        });
});