const mainContainer = document.querySelector('.pledge__container');
const headerSection = document.getElementById('pl-header');
const descriptionSection = document.getElementById('pl-description');
const descriptionOverlay = descriptionSection.querySelector('.pledge__description-overlay');
const formSection = document.getElementById('pl-form');
const formSectionOverlay = formSection.querySelector('.pledge__form-overlay');
const form = formSection.querySelector('.pledge__form form');
const successMSGSection = document.querySelector('.pledge__success-msg');
const copyCode = successMSGSection.querySelector('.discount-code__copy');

const nextButton = headerSection.querySelector('button.pledge__next');
const pledgeButton = descriptionSection.querySelector('button.pledge__start');
let responseData;

nextButton.addEventListener('click', (ev)=> {
  ev.preventDefault();

  // remove the overlay in the description section
  descriptionOverlay.classList.add('hide');

  // show the form section
  formSection.classList.remove('hide');

  // changing padding for sections
  headerSection.classList.remove('ppb-5');
  headerSection.classList.add('ppt-5');
  descriptionSection.classList.remove('ppb-8');
  descriptionSection.classList.add('ppb-5');
  formSection.classList.add('ppb-8');

  pledgeButton.addEventListener('click', openForm);
});

function openForm(ev) {
  ev.preventDefault();

  // remove the overlay in the form section
  formSectionOverlay.classList.add('hide');

  descriptionSection.classList.remove('ppb-5');
  descriptionSection.classList.add('ppt-5');
  formSection.classList.remove('ppb-8');
  formSection.classList.add('ppb-5');

  pledgeButton.removeEventListener('click', openForm);
  formSection.addEventListener('submit', handlePledgeSubmit);
}


function handlePledgeSubmit(ev) {
  ev.preventDefault();

  const data = new FormData(form);
  const action = ev.target.action;

  fetch(action, {
    method: 'POST',
    body: data,
  })
    .then((response) => response.json())
    .then((response) => responseData = response)
    .finally(()=> {
      const pledgeCountFromSheet = responseData.row - 1;
      const pledgeCountUpdate = successMSGSection.querySelector('.pledge-count__update');
      pledgeCountUpdate.innerHTML = pledgeCountFromSheet;
      
      // hide the main container
      mainContainer.classList.add('hide');

      // show thank you message
      successMSGSection.classList.remove('hide');

      // copy to clipboard function
      copyCode.addEventListener('click', copyToClipboard);
    });
};

function copyToClipboard() {
  const successMSG = successMSGSection.querySelector('span#success-copy');
  const discountCode = successMSGSection.querySelector('.discount-code__text').innerHTML;
  
  navigator.clipboard.writeText(discountCode);

  successMSG.classList.remove('hide');
  setTimeout(() => {
    successMSG.classList.add('hide');
  }, 1500);
}
