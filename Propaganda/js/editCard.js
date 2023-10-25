document.addEventListener("DOMContentLoaded", function() {
    const editAmountInput = document.getElementById('edit-amount__field');
    const editButton = document.getElementById('edit__button');
  
    const urlParams = new URLSearchParams(window.location.search);
    const editCardTitle = urlParams.get('title');
    const editCardAmount = urlParams.get('amount');
  
    editAmountInput.value = editCardAmount;
  
    editButton.addEventListener('click', () => {
      const updatedAmount = editAmountInput.value;
  
      if (!updatedAmount) {
        alert('Fill in the new propaganda influence amount');
        return;
      }
  
      let cards = JSON.parse(localStorage.getItem('cards')) || [];
  
      const cardToUpdate = cards.find(card => card.cardTitle === editCardTitle);
  
      if (cardToUpdate) {
        cardToUpdate.cardPropagandaAmount = updatedAmount;
  
        localStorage.setItem('cards', JSON.stringify(cards));
  
      } else {
        alert('Card not found for update');
      }
    });
  });
  