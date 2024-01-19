const mainContainer = document.querySelector('.pledge__container');
const headerSection = document.getElementById('pl-header');
const descriptionSection = document.getElementById('pl-description');
const formSection = document.getElementById('pl-form');
const form = formSection.querySelector('.pledge__form form');
const successMSGSection = document.querySelector('.pledge__success-msg');
const copyDiscountCodeBTN = successMSGSection.querySelector('.discount-code__copy');

const nextButton = headerSection.querySelector('button.pledge__next');
const pledgeButton = descriptionSection.querySelector('button.pledge__start');
const weightMultiplier = document.getElementById('promised-count').innerHTML;

const loader = document.querySelector('.loader-logo__img');
let responseData;

nextButton.addEventListener('click', (ev)=> {
  ev.preventDefault();
  descriptionSection.classList.remove('hide');
  headerSection.classList.add('hide');
  pledgeButton.addEventListener('click', openForm);
});

function openForm(ev) {
  ev.preventDefault();
  formSection.classList.remove('hide');
  descriptionSection.classList.add('hide');
  pledgeButton.removeEventListener('click', openForm);
  formSection.addEventListener('submit', handlePledgeSubmit);
}


function handlePledgeSubmit(ev) {
  loader.classList.remove('hide');
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
      const pledgeCountFromSheet = responseData.row;
      const pledgeCountUpdate = successMSGSection.querySelector('.pledge-count__update');

      actualWeight = (pledgeCountFromSheet - 1) * weightMultiplier;
      pledgeCountUpdate.innerHTML = actualWeight < 2500? `${actualWeight} Kgs`: `${actualWeight/1000} Tons`;
 
      mainContainer.classList.add('hide');
      successMSGSection.classList.remove('hide');
      loader.classList.add('hide');
      // copy to clipboard function
      copyDiscountCodeBTN.addEventListener('click', copyToClipboard);
    });
};

function copyToClipboard() {
  const successMSG = successMSGSection.querySelector('span#success-copy');
  const discountCode = successMSGSection.querySelector('.discount-code__text').innerHTML;
  const copiedTextBTN = document.querySelector('.discount-code__copied');
  
  navigator.clipboard.writeText(discountCode);

  successMSG.classList.remove('hide');
  copiedTextBTN.classList.remove('hide');
  copyDiscountCodeBTN.classList.add('hide');
  setTimeout(() => {
    successMSG.classList.add('hide');
  }, 1500);
}
