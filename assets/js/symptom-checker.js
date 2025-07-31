document.addEventListener('DOMContentLoaded', () => {
    const suggestFirstAidBtn = document.getElementById('suggest-first-aid');
    const suggestDoctorsBtn = document.getElementById('suggest-doctors');
    const firstAidSuggestion = document.getElementById('first-aid-suggestion');
    const doctorSuggestions = document.getElementById('doctor-suggestions');
    const appointmentModal = document.getElementById('appointment-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const appointmentForm = document.getElementById('appointment-form');
    const submitAppointmentBtn = document.getElementById('submit-appointment');
    const doctorSelect = document.getElementById('doctor');

    const doctors = [
        { name: 'Dr. John Smith', specialization: 'Cardiologist', phone: '123-456-7890', address: '123 Heart Lane, Cardio City' },
        { name: 'Dr. Sarah Johnson', specialization: 'Dermatologist', phone: '234-567-8901', address: '234 Skin St, Dermville' },
        { name: 'Dr. Michael Davis', specialization: 'Pediatrician', phone: '345-678-9012', address: '345 Child Ave, Kidstown' },
        { name: 'Dr. Emily White', specialization: 'Neurologist', phone: '456-789-0123', address: '456 Brain Blvd, Neuroburg' }
    ];

    suggestFirstAidBtn.addEventListener('click', () => {
        firstAidSuggestion.classList.remove('hidden');
    });

    suggestDoctorsBtn.addEventListener('click', () => {
        doctorSuggestions.classList.remove('hidden');
        const doctorCards = doctors.map(doctor => `
            <div class="bg-white p-4 rounded-lg shadow-md">
                <h4 class="font-bold">${doctor.name}</h4>
                <p>${doctor.specialization}</p>
                <p>${doctor.phone}</p>
                <p>${doctor.address}</p>
                <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 book-appointment" data-doctor="${doctor.name}" data-specialization="${doctor.specialization}">Book Appointment</button>
            </div>
        `).join('');
        doctorSuggestions.querySelector('.grid').innerHTML = doctorCards;

        document.querySelectorAll('.book-appointment').forEach(button => {
            button.addEventListener('click', () => {
                const doctorName = button.dataset.doctor;
                const specialization = button.dataset.specialization;
                appointmentModal.classList.remove('hidden');
                doctorSelect.innerHTML = `<option value="${doctorName}">${doctorName} - ${specialization}</option>`;
            });
        });
    });

    closeModalBtn.addEventListener('click', () => {
        appointmentModal.classList.add('hidden');
    });

    submitAppointmentBtn.addEventListener('click', () => {
        if (appointmentForm.checkValidity()) {
            alert('Appointment booked successfully!');
            appointmentForm.reset();
            appointmentModal.classList.add('hidden');
        } else {
            alert('Please fill out all fields.');
        }
    });
});
