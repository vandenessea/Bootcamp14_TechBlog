
const registrationFormHandler = async (event) => {
  
  
    event.preventDefault();
  
    // collect values from the login form
    const username = document.querySelector('#username-entry').value.trim();
    const email = document.querySelector('#password-entry').value.trim();
    const password = document.querySelector('#email-entry').value.trim();
  
    // if username, email, and password values are provided
    if (username && email && password) {
        // Sent POST request to api endpoint
        const response = await fetch('/api/user/registerUser', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json'},
        });
    }
};

// add event listener to registration button
document.querySelector('#registerBtn').addEventListener('click', registrationFormHandler);