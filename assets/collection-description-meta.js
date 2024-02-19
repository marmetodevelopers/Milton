document.addEventListener("DOMContentLoaded", function () {
  let descriptionWrapper = document.querySelector(
    ".collection_description_text_wrapper"
  );
  let readMoreButton = document.querySelector(".read_more_button");
  // Retrieves the trimmed text content of 'descriptionWrapper' and assigns it to the variable 'fullText'.
  let fullText = descriptionWrapper.textContent.trim();
  // Retrieves the line height of 'descriptionWrapper' and converts it to an integer, assigning it to the variable 'lineHeight'.
  let lineHeight = parseInt(
    window.getComputedStyle(descriptionWrapper).lineHeight
  );
  // Checks if the total scrollable height of 'descriptionWrapper' exceeds ten times the line height.
  if (descriptionWrapper.scrollHeight > lineHeight * 10) {
    // If the condition is met, displays the 'readMoreButton'.
    readMoreButton.style.display = "block";
  }
  // Adds an event listener to the 'readMoreButton' which toggles the visibility of the full text when clicked.
  readMoreButton.addEventListener("click", function () {
    if (descriptionWrapper.classList.contains("expanded")) {
      // If it has the class, sets the maximum height of 'descriptionWrapper' to show only 10 lines of text.
      descriptionWrapper.style.maxHeight = lineHeight * 10 + "px";
      // Changes the text content of 'readMoreButton' to 'Read More'.
      readMoreButton.textContent = "Read More";
    } else {
      descriptionWrapper.style.maxHeight =
        // If it doesn't have the class, sets the maximum height of 'descriptionWrapper' to show all text.
        descriptionWrapper.scrollHeight + "px";
      // Changes the text content of 'readMoreButton' to 'Read Less'.
      readMoreButton.textContent = "Read Less";
    }
    // Toggles the class 'expanded' on 'descriptionWrapper'.
    descriptionWrapper.classList.toggle("expanded");
  });
});
