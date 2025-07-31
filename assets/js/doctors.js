document.addEventListener('DOMContentLoaded', () => {
    const doctorList = document.getElementById('doctor-list');

    const doctors = [
        { name: 'Dr. John Smith', specialization: 'Cardiologist', phone: '123-456-7890', address: '123 Heart Lane, Cardio City' },
        { name: 'Dr. Sarah Johnson', specialization: 'Dermatologist', phone: '234-567-8901', address: '234 Skin St, Dermville' },
        { name: 'Dr. Michael Davis', specialization: 'Pediatrician', phone: '345-678-9012', address: '345 Child Ave, Kidstown' },
        { name: 'Dr. Emily White', specialization: 'Neurologist', phone: '456-789-0123', address: '456 Brain Blvd, Neuroburg' }
    ];

    const doctorCards = doctors.map(doctor => `
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h4 class="font-bold">${doctor.name}</h4>
            <p>${doctor.specialization}</p>
            <p>${doctor.phone}</p>
            <p>${doctor.address}</p>
            <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Book Appointment</button>
        </div>
    `).join('');

    doctorList.innerHTML = doctorCards;
});
