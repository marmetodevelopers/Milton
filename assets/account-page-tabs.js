function openTab(evt, tabId) {
  document.querySelectorAll(".tab-content").forEach(function (tabContent) {
    tabContent.style.display = "none";
  });
  document.querySelectorAll(".tablinks").forEach(function (tabLink) {
    tabLink.classList.remove("is--active");
  });

  var tabElement = document.getElementById(tabId);
  // Toggle display of selected tab content
  if (tabElement.style.display !== "block") {
    tabElement.style.display = "block";
    evt.currentTarget.classList.add("is--active");
  } else {
    tabElement.style.display = "none";
    evt.currentTarget.classList.remove("is--active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var activeElement = document.querySelector(".is--active");
  if (activeElement) {
    activeElement.click();
  }

  var tabLinks = document.querySelectorAll(".tablinks");

  Array.from(tabLinks).forEach(function (tabLink) {
    tabLink.addEventListener("click", function (event) {
      var tabId = event.currentTarget.getAttribute("data-tab");
      openTab(event, tabId);
    });
  });

  document
    .querySelector(".tablinks.details.whishlist")
    .addEventListener("click", function () {
      // Redirect to the desired page
      window.location.href = "apps/advanced-wishlist";
    });

  document
    .querySelector(".account_wishlist.tablinks")
    .addEventListener("click", function () {
      // Redirect to the desired page
      window.location.href = "apps/advanced-wishlist";
    });
});
