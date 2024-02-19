/* On the collection page, if the text is too lengthy, a "Read More" button is provided. Clicking on "Read More" will reveal the hidden text, and clicking on "Read Less" will hide the text again. */
document.addEventListener("DOMContentLoaded", function () {
  let descriptionWrapper = document.querySelector(
    ".collection_description_text_wrapper"
  );
  let readMoreButton = document.querySelector(".read_more_button");
  let fullText = descriptionWrapper.textContent.trim();
  let lineHeight = parseInt(
    window.getComputedStyle(descriptionWrapper).lineHeight
  );
  if (descriptionWrapper.scrollHeight > lineHeight * 10) {
    readMoreButton.style.display = "block";
  }
  readMoreButton.addEventListener("click", function () {
    if (descriptionWrapper.classList.contains("expanded")) {
      descriptionWrapper.style.maxHeight = lineHeight * 10 + "px";
      readMoreButton.textContent = "Read More";
    } else {
      descriptionWrapper.style.maxHeight =
        descriptionWrapper.scrollHeight + "px";
      readMoreButton.textContent = "Read Less";
    }
    descriptionWrapper.classList.toggle("expanded");
  });
});
