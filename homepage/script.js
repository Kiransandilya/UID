// Add event listener to Sign Up button
document.getElementById('signup-btn').addEventListener('click', function() {
    // Hide the Sign Up button
    this.style.display = 'none';

    // Show the popup background and the Sign Up form
    document.getElementById('popup-background').style.display = 'block';
    document.getElementById('signup-form').style.display = 'block';
});

// Add event listener to Submit button in the Sign Up form
document.getElementById('signup-submit').addEventListener('click', function() {
    // Perform sign up (You'll need backend logic to actually create the account)
    alert('Signing up...');

    // Hide the popup background and the Sign Up form
    document.getElementById('popup-background').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';

    // Show the Sign Up button
    document.getElementById('signup-btn').style.display = 'inline-block';
});

// Add event listener to Popup Background
document.getElementById('popup-background').addEventListener('click', function() {
    // Hide the popup background and the Sign Up form
    this.style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';

    // Show the Sign Up button
    document.getElementById('signup-btn').style.display = 'inline-block';
});

// Add event listener to Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Hide the popup background and the Sign Up form
        document.getElementById('popup-background').style.display = 'none';
        document.getElementById('signup-form').style.display = 'none';

        // Show the Sign Up button
        document.getElementById('signup-btn').style.display = 'inline-block';
    }
});