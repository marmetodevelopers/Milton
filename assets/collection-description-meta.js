document.addEventListener("DOMContentLoaded", function() {
  let descriptionWrapper = document.querySelector('.collection_description_text_wrapper');
  let readMoreButton = document.querySelector('.read_more_button');
  let fullText = descriptionWrapper.textContent.trim();
  let lineHeight = parseInt(window.getComputedStyle(descriptionWrapper).lineHeight);

  if (descriptionWrapper.scrollHeight > lineHeight * 10) {
      readMoreButton.style.display = 'block';
  }

  readMoreButton.addEventListener('click', function() {
      if (descriptionWrapper.classList.contains('expanded')) {
          descriptionWrapper.style.maxHeight = lineHeight * 10 + 'px';
          readMoreButton.textContent = 'Read More';
      } else {
          descriptionWrapper.style.maxHeight = descriptionWrapper.scrollHeight + 'px';
          readMoreButton.textContent = 'Read Less';
      }
      descriptionWrapper.classList.toggle('expanded');
  });
});
