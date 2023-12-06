// import { getPropaganda, deletePropaganda } from "../api/routes/router.js";

document.addEventListener("DOMContentLoaded", async function() {
  const searchInput = document.getElementById('input');
  const counterTotal = document.getElementById('counter__total');
  const countButton = document.getElementById('counter__button');
  const sortButton = document.getElementById('sort__button');
  const deleteButton = document.getElementById('delete__button');
  const createdCards = document.getElementById('created__cards');

  // async function fetchAndDisplayPropaganda(search) {
  //   try {
  //     const propagandaData = await getPropaganda(search);
  //     displayPropaganda(propagandaData);
  //   } catch (error) {
  //     console.error('HTTP ERROR: ', error);
  //   }
  // }

  async function fetchAndDisplayPropaganda(search) {
    try {
      const response = await fetch(`http://localhost:3000/propaganda?search=${search}`);
      if (response.ok) {
        const propagandaData = await response.json();
        displayPropaganda(propagandaData);
      } else {
        alert('Failed to fetch propaganda data');
      }
    } catch (error) {
      console.error('HTTP ERROR: ', error);
    }
  }

  function displayPropaganda(propagandaData) {
    createdCards.innerHTML = '';

    propagandaData.forEach(card => {
      const cardElem = document.createElement('div');
      const cardTitle = document.createElement('p');
      const cardPropagandaAmount = document.createElement('var');
      const editButton = document.createElement('button');

      cardElem.className = 'card';
      cardTitle.className = 'card__title';
      cardTitle.textContent = card.card__title || '';
      cardPropagandaAmount.className = 'card__propaganda__amount';
      cardPropagandaAmount.textContent = card.card__propaganda__amount || '';
      editButton.innerText = 'Edit';
      editButton.className = 'edit__button button';

      editButton.setAttribute('data-id', card.id);

      cardElem.appendChild(cardTitle);
      cardElem.appendChild(cardPropagandaAmount);
      cardElem.appendChild(editButton);

      createdCards.appendChild(cardElem);

      editButton.addEventListener('click', () => {
        const editCardId = editButton.getAttribute('data-id');
        const editCardTitle = card.card__title;
        const editCardAmount = card.card__propaganda__amount;

        const editUrl = `edit_page.html?id=${editCardId}&title=${editCardTitle}&amount=${editCardAmount}`;        window.location.href = editUrl;
      });
    });
  }

  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    fetchAndDisplayPropaganda(searchText);
  });

  countButton.addEventListener('click', () => {
    let totalPropagandaAmount = 0;
    const visibleCards = createdCards.querySelectorAll('.card');

    visibleCards.forEach(card => {
      const cardPropagandaAmount = card.querySelector('.card__propaganda__amount').textContent;
      totalPropagandaAmount += parseInt(cardPropagandaAmount);
    });

    counterTotal.textContent = `Total amount: ${totalPropagandaAmount}`
  });

  sortButton.addEventListener('click', () => {
    const cardList = Array.from(createdCards.querySelectorAll('.card'));

    cardList.sort((a, b) => {
      const cardPropagandaAmountFirst = parseInt(a.querySelector('.card__propaganda__amount').textContent);
      const cardPropagandaAmountSecond = parseInt(b.querySelector('.card__propaganda__amount').textContent);

      return cardPropagandaAmountSecond - cardPropagandaAmountFirst;
    });

    cardList.forEach(card => {
      createdCards.appendChild(card);
    });
  });

  // deleteButton.addEventListener('click', async () => {
  //   try {
  //     const response = await deletePropaganda();
  //     if (response.ok) {
  //       createdCards.innerHTML = '';
  //     } else {
  //       alert('Failed to delete propaganda data');
  //     }
  //   } catch (error) {
  //     console.error('HTTP ERROR: ', error);
  //   }
  // });


  deleteButton.addEventListener('click', async () => {
    try {
      const response = await fetch('http://localhost:3000/propaganda', {
        method: 'DELETE',
      });

      if (response.ok) {
        createdCards.innerHTML = '';
      } else {
        alert('Failed to delete propaganda data');
      }
    } catch (error) {
      console.error('HTTP ERROR: ', error);
    }
  });

  fetchAndDisplayPropaganda('');
});
