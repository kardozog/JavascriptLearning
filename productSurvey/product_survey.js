
const submitButton = document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

function submitFeedback() {
    // Fetch values inside the function to get updated data
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    alert('Thank you for your valuable feedback');
    
    // Show the hidden element
    document.getElementById('userInfo').style.display = 'block';
    
    // Display the fetched values
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
}

// Also trigger submitFeedback when Enter key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
