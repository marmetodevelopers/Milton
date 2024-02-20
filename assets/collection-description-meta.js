/* On the collection page, if the text is too lengthy, a "Read More" button is provided. Clicking on "Read More" will reveal the hidden text, and clicking on "Read Less" will hide the text again. */
// document.addEventListener("DOMContentLoaded", function () {
//   let descriptionWrapper = document.querySelector(
//     ".collection_description_text_wrapper"
//   );
//   let readMoreButton = document.querySelector(".read_more_button");
//   let fullText = descriptionWrapper.textContent.trim();
//   let lineHeight = parseInt(
//     window.getComputedStyle(descriptionWrapper).lineHeight
//   );
//   if (descriptionWrapper.scrollHeight > lineHeight * 10) {
//     readMoreButton.style.display = "block";
//   }
//   readMoreButton.addEventListener("click", function () {
//     if (descriptionWrapper.classList.contains("expanded")) {
//       descriptionWrapper.style.maxHeight = lineHeight * 10 + "px";
//       readMoreButton.textContent = "Read More";
//     } else {
//       descriptionWrapper.style.maxHeight =
//         descriptionWrapper.scrollHeight + "px";
//       readMoreButton.textContent = "Read Less";
//     }
//     descriptionWrapper.classList.toggle("expanded");
//   });
// });


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
      // Scroll to 300 pixels from the top of the container on mobile screens when "Read Less" is clicked
      if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
        document.querySelector(".collection_description_container").scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        window.scrollBy(0, -300);
      } else { // For desktop screens
        document.querySelector(".collection_description_container").scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        window.scrollBy(0, -100); // Scroll to 100 pixels from the top of the container on desktop
      }
    } else {
      descriptionWrapper.style.maxHeight =
        descriptionWrapper.scrollHeight + "px";
      readMoreButton.textContent = "Read Less";
    }
    descriptionWrapper.classList.toggle("expanded");
  });
});





// document.addEventListener("DOMContentLoaded", function () {
//   let readMoreButton = document.querySelector(".read_more_button");
//   let descriptionWrapper = document.querySelector(".collection_description_text_wrapper");

//   readMoreButton.addEventListener("click", function () {
//     // Toggle the 'expanded' class on the description wrapper
//     descriptionWrapper.classList.toggle("expanded");

//     // Check if the description wrapper is expanded
//     if (descriptionWrapper.classList.contains("expanded")) {
//       // Scroll to the expanded description wrapper with an offset of 100px from the top
//       descriptionWrapper.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
//       window.scrollBy(0, -100); // Scroll 100px up from the current position
//     }
//   });
// });
