const loginFormHandler = async (event) => {
    event.preventDefault();

    // collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // if user has entered values for a username and password
    if (username && password) {
//START HERE #########################
        // Send a POST request to the API endpoint
        const response = await fetch('/user', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });

        if (response.ok) {
            // if successful, console log
            console.log('success!');
        }
      
    } else {
        alert('Please enter value for username and password!');
    }
  };

document.querySelector('#loginBtn').addEventListener('click', loginFormHandler);
