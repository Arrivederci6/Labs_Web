const cardTitleInput = document.getElementById('title__field');
const cardPropagandaAmountInput = document.getElementById('amount__field');
const createButton = document.getElementById('create__button');

createButton.addEventListener('click', () => {
  const cardTitle = cardTitleInput.value.trim();
  const cardPropagandaAmount = cardPropagandaAmountInput.value;
  
  if (!cardTitle || !cardPropagandaAmount) {
    alert("Fill in all the information");
    return;
  }

  const card = { cardTitle, cardPropagandaAmount };

  let cards = JSON.parse(localStorage.getItem('cards')) || [];

  cards.push(card);

  localStorage.setItem('cards', JSON.stringify(cards));

  cardTitleInput.value = '';
  cardPropagandaAmountInput.value = '';

});
