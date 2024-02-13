function open(evt, tabId) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("is--active");
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
var activeElement = document.querySelector(".is--active");
if (activeElement) {
  activeElement.click();
}
var tablinks = document.getElementsByClassName('tablinks');
for (var i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", function(event) {
    var tabId = event.currentTarget.getAttribute("data-tab");
    open(event, tabId);
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
