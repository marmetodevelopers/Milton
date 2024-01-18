
const nextButton = document.querySelector('.pledge__next-button button');
const openPledgeFormButton = document.querySelector('.pledge__start-button button');
const closePledgeFormButton = document.querySelector('.pledge__submit-button');
const pledgeFormContainer = document.getElementById('pledge__form-container');
const pledgeForm = document.getElementById('pledge-Form');

nextButton.addEventListener('click', ()=> {
  const pledgeInitiateContainer = document.querySelector('.pledge__bottom-container');
  pledgeInitiateContainer.classList.remove('hide');
})

openPledgeFormButton.addEventListener('click', () => {
  pledgeFormContainer.showModal();
});

closePledgeFormButton.addEventListener('click', closePledgeForm);

pledgeForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  // show thank you message
  const thankYouContainer = document.querySelector('.thank-you__message-container');
  thankYouContainer.classList.remove('hide');

  const data = new FormData(pledgeForm);
  const action = e.target.action;

  console.log('Form data:');
  for (let [key, value] of data.entries()) {
    console.log(`${key}: ${value}`);
  }
  console.log('action:', action);

  fetch(action, {
    method: 'POST',
    body: data,
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const pledgeCountFromSheet = response.row - 1;
      const pledgeCointUpdate = document.querySelector('.thank-you__message-container .pledge-count__update');
      pledgeCointUpdate.innerHTML = pledgeCountFromSheet;
      closePledgeForm();
    })
});

function closePledgeForm() {
  pledgeFormContainer.close();
}
