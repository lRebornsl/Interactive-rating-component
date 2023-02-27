const items = Array.from(document.querySelectorAll('.rating li'));
const btnSubmit = document.querySelector('.button');
const divMain = document.querySelector('.main-container');
let ratingValue = 0;

items.forEach(item => {
  item.addEventListener('click', () => {

    if (item.classList.contains('selected')) {
      item.classList.remove('selected', 'no-hover')
      ratingValue = 0;
    } else {
      items.forEach(otherItem => {
        otherItem.classList.remove('selected', 'no-hover');
      });

      item.classList.add('selected', 'no-hover');
      const getValue = () => {
        let value = document.querySelector('.selected').value;
        return value;
      };
      ratingValue = getValue();
    }
  });
});

btnSubmit.addEventListener('click', () => {
  divMain.innerHTML = "";
  newMain();
});

function newMain(){
  divMain.innerHTML = `
  <div class="text-center">
    <img src="./images/illustration-thank-you.svg" alt="" class="thank-you">
  </div>
  <div class="text-center">
    <div class="msg-container">
      <p id="msg">
        You selected ${ratingValue} out of 5
      </p>
    </div>
    <h1>Thank you!</h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need more support, don't hestitate to get in touch!
    </p>
  </div>`;
}