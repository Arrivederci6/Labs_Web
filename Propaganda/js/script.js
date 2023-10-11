document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('input');
  const counterTotal = document.getElementById('counter__total');
  const countButton = document.getElementById('counter__button'); 
  const sortButton = document.getElementById('sort__button');
  const deleteButton = document.getElementById('delete__button');
  const createdCards = document.getElementById('created__cards');

  let cards = JSON.parse(localStorage.getItem('cards')) || [];

  cards.forEach(card => {
    const cardElem = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardTitle = document.createElement('p');
    const cardPropagandaAmount = document.createElement('var');

    cardElem.className = 'card';
    cardImg.src = '../Propaganda/img/mao.jpg';
    cardImg.alt = 'mao';
    cardImg.style.width = '200px';
    cardTitle.className = 'card__title';
    cardTitle.innerHTML = `<p>${card.cardTitle}</p>`;
    cardPropagandaAmount.className = 'card__propaganda__amount';
    cardPropagandaAmount.innerHTML = `<var>${card.cardPropagandaAmount}</var>`

    cardElem.appendChild(cardImg);
    cardElem.appendChild(cardTitle);
    cardElem.appendChild(cardPropagandaAmount);

    createdCards.appendChild(cardElem);
  });

  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();

    const cards = createdCards.querySelectorAll('.card');

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

  countButton.addEventListener('click', () => {
    let totalPropagandaAmount = 0;

    const visibleCards = createdCards.querySelectorAll('.card:not([style*="display: none"])');

    visibleCards.forEach(card => {
      const cardPropagandaAmount = card.querySelector('.card__propaganda__amount').textContent;
      totalPropagandaAmount += parseInt(cardPropagandaAmount);
    });

    counterTotal.textContent = `Total amount: ${totalPropagandaAmount}`
  });

  sortButton.addEventListener('click', () => {
    const cardList = Array.from(createdCards.querySelectorAll('.card:not([style*="display: none"])'));

    cardList.sort((a, b) => {
      const cardPropagandaAmountFirst = parseInt(a.querySelector('.card__propaganda__amount').textContent);
      const cardPropagandaAmountSecond = parseInt(b.querySelector('.card__propaganda__amount').textContent);

      return cardPropagandaAmountSecond - cardPropagandaAmountFirst;
    });

    cardList.forEach(card => {
      createdCards.appendChild(card);
    });
  });

  deleteButton.addEventListener('click', () => {
    cards = [];
    localStorage.setItem('cards', JSON.stringify([]));
  });
});
