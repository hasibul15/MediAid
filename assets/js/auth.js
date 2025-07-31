document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const signinSignupButtonContainer = document.getElementById('signin-signup-button'); // The container div

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = signupForm.name.value;
            const email = signupForm.email.value;
            const phone = signupForm.phone.value;
            const password = signupForm.password.value;
            const confirmPassword = signupForm['confirm-password'].value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ name, email, phone, password });
            localStorage.setItem('users', JSON.stringify(users));

            alert('Sign up successful!');
            window.location.href = 'signin.html';
        });
    }

    if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = signinForm.email.value;
            const password = signinForm.password.value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                localStorage.setItem('loggedIn', 'true');
                alert('Sign in successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }

    // Function to update the navbar buttons based on login status
    function updateNavbarButtons() {
        const loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn === 'true') {
            signinSignupButtonContainer.innerHTML = '<a href="#" id="signout-button" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Sign Out</a>';
        } else {
            signinSignupButtonContainer.innerHTML = '<a href="signin.html" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign In/Sign Up</a>';
        }
    }

    // Attach event listener to the container using event delegation
    if (signinSignupButtonContainer) {
        signinSignupButtonContainer.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'signout-button') {
                e.preventDefault();
                localStorage.removeItem('loggedIn');
                window.location.href = 'signin.html';
            }
        });
        // Call the function initially to set the correct buttons on page load
        updateNavbarButtons();
    }
});