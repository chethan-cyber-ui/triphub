// Notification function to show success message
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // Hide the notification after 3 seconds
}

// Switching between the login and sign-up forms
document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Handling the sign-up form submission
document.getElementById('signup-form-element').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Normally, here you would send the data to the server
    // For now, we just show a success notification
    showNotification('Sign Up Successful! Welcome ' + username);

    // Clear the form after submission
    document.getElementById('signup-form-element').reset();
});

// Handling the login form submission
document.getElementById('login-form-element').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Normally, here you would check the email and password with the server
    // For now, we just show a success notification
    showNotification('Login Successful! Welcome back.');

    // Clear the form after submission
    document.getElementById('login-form-element').reset();
});
