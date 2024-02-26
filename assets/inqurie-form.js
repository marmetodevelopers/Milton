// Function to check if all required fields are filled and validate email
  // Define the checkForm function
  function checkForm() {
    var qty = document.getElementById("qtyInput").value;
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var phone = document.getElementById("phoneInput").value;

    // Email validation regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Enable submit button only if all required fields are filled and email is valid and phone number is 10 digits
    var submitButton = document.getElementById("submitButton");
    var emailErrorMessage = document.getElementById("emailErrorMessage");
    var phoneErrorMessage = document.getElementById("phoneErrorMessage");

    if (qty && name && email && emailPattern.test(email) && phone && phone.length === 10 && !isNaN(phone)) {
        submitButton.disabled = false;
        emailErrorMessage.style.display = "none"; // Hide email error message
        phoneErrorMessage.style.display = "none"; // Hide phone error message
    } else {
        submitButton.disabled = true;
        if (!email || !emailPattern.test(email)) {
            emailErrorMessage.style.display = "block"; // Show email error message
        } else {
            emailErrorMessage.style.display = "none"; // Hide email error message
        }
        if (!phone || phone.length !== 10 || isNaN(phone)) {
            phoneErrorMessage.style.display = "block"; // Show phone error message
        } else {
            phoneErrorMessage.style.display = "none"; // Hide phone error message
        }
    }
}


// Define the submitForm function
function submitForm() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
    var loadingMessage = document.getElementById("loadingMessage");
    var popupContainer = document.getElementById("myForm");

    // Display loading message
    loadingMessage.style.display = "flex";
    loadingMessage.classList.add("highlight");

    // Blur the container
    popupContainer.classList.add("blur");

    // Make AJAX request to submit the form data
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Hide the form and show the thank you message
                form.style.display = "none";
                document.getElementById("thankYouMessage").style.display = "block";
            } else {
                // Handle error if submission fails
                console.error("Form submission failed!");
            }
            // Hide loading message immediately after sending the request
            loadingMessage.style.display = "none";
            loadingMessage.classList.remove("highlight"); // Remove highlight effect
            popupContainer.classList.remove("blur"); // Remove blur effect
        }
    };
    xhr.send(formData);
}

// Listen for input events on required fields
document.getElementById("qtyInput").addEventListener("input", checkForm);
document.getElementById("nameInput").addEventListener("input", checkForm);
document.getElementById("emailInput").addEventListener("input", checkForm);
document.getElementById("phoneInput").addEventListener("input", checkForm);




// mobile number validation

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("phone").addEventListener("input", function () {
    var phoneNumber = this.value;
    var isValidPhoneNumber = /^\d{10}$/.test(phoneNumber);
    if (!isValidPhoneNumber) {
      this.setCustomValidity("Please enter a 10-digit number.");
    } else {
      this.setCustomValidity("");
    }
  });
});





// in the Quantity field it will take only numbers
function allowOnlyNumbers(inputElement) {
    inputElement.addEventListener('input', function() {
        // Remove any non-numeric characters
        this.value = this.value.replace(/\D/g, '');
    });
}

// Call the function for the quantity input
allowOnlyNumbers(document.getElementById('qtyInput'));