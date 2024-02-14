function openTab(evt, tabId) {
  var i, tabContents, tabLinks;
  tabContents = document.querySelectorAll(".tab-content");
  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  tabLinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("is--active");
  }
  var tabElement = document.getElementById(tabId);
  if (tabElement.style.display !== "block") {
    tabElement.style.display = "block";
    evt.currentTarget.classList.add("is--active");
  } else {
    tabElement.style.display = "none";
    evt.currentTarget.classList.remove("is--active");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var activeElement = document.querySelector(".is--active");
  if (activeElement) {
    activeElement.click();
  }
  
  var tabLinks = document.querySelectorAll('.tablinks');
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function(event) {
      var tabId = event.currentTarget.getAttribute("data-tab");
      openTab(event, tabId);
    });
  }
  
  document.querySelector('.tablinks.details.whishlist').addEventListener('click', function() {
    // Redirect to the desired page
    window.location.href = 'apps/advanced-wishlist';
  });
  
  document.querySelector('.account_wishlist.tablinks').addEventListener('click', function() {
    // Redirect to the desired page
    window.location.href = 'apps/advanced-wishlist';
  });
});
