document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const digitalPrescription = document.getElementById('digital-prescription');

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        digitalPrescription.classList.remove('hidden');
    });
});
