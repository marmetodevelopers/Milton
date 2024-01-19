
const nextButton = document.querySelector('.pledge__next-button button');
const openPledgeFormButton = document.querySelector('.pledge__start-button button');
const closePledgeFormButton = document.querySelector('.pledge__submit-button');
const pledgeFormContainer = document.getElementById('pledge__form-container');
const pledgeForm = document.getElementById('pledge-Form');
let responseData;

nextButton.addEventListener('click', ()=> {
  const pledgeInitiateContainer = document.querySelector('.pledge__bottom-container');
  // pledgeInitiateContainer.classList.remove('hide');
})

openPledgeFormButton.addEventListener('click', () => {
  pledgeFormContainer.showModal();
});

closePledgeFormButton.addEventListener('click', closePledgeForm);

pledgeForm.addEventListener('submit', handlePledgeSubmit)

function handlePledgeSubmit() {
  event.preventDefault();

  const data = new FormData(pledgeForm);
  const action = event.target.action;

  fetch(action, {
    method: 'POST',
    body: data,
  })
    .then((response) => response.json())
    .then((response) => responseData = response)
    .finally(()=> {
      debugger;
      const pledgeCountFromSheet = responseData.row - 1;
      const pledgeCountUpdate = document.querySelector('.thank-you__message-container .pledge-count__update');
      pledgeCountUpdate.innerHTML = pledgeCountFromSheet;
      
      const pledgeMainContainer = document.querySelector('.pledge__main-container');
      pledgeMainContainer.classList.add('hide');

      // show thank you message
      const thankYouContainer = document.querySelector('.thank-you__message-container');
      thankYouContainer.classList.remove('hide');
      closePledgeForm();
      pledgeForm.removeEventListener(handlePledgeSubmit);
    });
};

function closePledgeForm() {
  pledgeFormContainer.close();
}
