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

// pop text blur
// function togglePopupUpsell() {
//   var popup = document.querySelector('.popup_upsell');
//   popup.style.display = 'block';
// }

// function submitForm() {
//   var form = document.getElementById('myForm');
//   var loadingMessage = document.getElementById('loadingMessage');

//   // Display loading message
//   loadingMessage.style.display = 'block';

//   // Simulate submission delay
//   setTimeout(function() {
//     form.submit();
//   }, 3000); // 3 seconds delay
// }



particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 1299.3805191013182
      }
    },
    "color": {
      "value": ["#5D47BA","#FFDBFF","#FB5435","#E00A30","#04CEF9"]
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 15,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);