// const giftWrapCheckboxes = document.querySelectorAll('.gift_wrap_checkbox');
// const giftWrapPriceSpans = document.querySelectorAll('.aaaa, .bbbb, .cccc');

// console.log("==================================>")
// giftWrapCheckboxes.forEach((checkbox, index) => {
//   checkbox.addEventListener('change', () => {
//     const giftWrapCostElement = checkbox.nextElementSibling;
//     const giftWrapCostValue = giftWrapCostElement.dataset.giftPrice;
//     const giftWrapCost = checkbox.checked ? `(₹${parseGiftWrapCost(giftWrapCostValue)})` : '';
//     const priceSpan = giftWrapPriceSpans[index];
//     const currentPrice = priceSpan.textContent.trim();
//     const newPrice = `${currentPrice} ${giftWrapCost}`;
//     priceSpan.textContent = newPrice;
//   });
// });

// function parseGiftWrapCost(value) {
//   const parsedValue = isNaN(value) ? value : parseFloat(value);
//   return parsedValue;
// }