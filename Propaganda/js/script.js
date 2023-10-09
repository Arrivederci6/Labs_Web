const searchInput = document.getElementById('input');
const cards = document.querySelectorAll('.card');
const countButton = document.getElementById('counter__button');
const counterTotal = document.getElementById('counter__total');
const sortButton = document.getElementById('sort__button');

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const cardTitle = card.querySelector('.card__title').textContent.toLowerCase();
    const cardPropagandaAmount = card.querySelector('.card__propaganda__amount').textContent;

    if (cardTitle.includes(searchText) || cardPropagandaAmount.includes(searchText)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

countButton.addEventListener('click', () =>{
    let totalPropagandaAmount = 0;
    
    cards.forEach(card =>{
        if(card.style.display !== 'none'){
            const cardPropagandaAmount = card.querySelector('.card__propaganda__amount').textContent;

            totalPropagandaAmount += parseInt(cardPropagandaAmount);
        }  
    });
    counterTotal.textContent = `Total amount: ${totalPropagandaAmount}`
});

sortButton.addEventListener('click', () => {
    Array.from(cards).sort((a,b) =>{
        const cardPropagandaAmountFirst = parseInt(a.querySelector('.card__propaganda__amount').textContent);
        const cardPropagandaAmountSecond = parseInt(b.querySelector('.card__propaganda__amount').textContent);

        return cardPropagandaAmountSecond - cardPropagandaAmountFirst;
    })
    .forEach(card => {
        card.parentNode.appendChild(card);
      });
});
// :TODO expression function