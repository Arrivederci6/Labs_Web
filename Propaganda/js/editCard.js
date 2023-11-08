document.addEventListener("DOMContentLoaded", function() {
  const editAmountInput = document.getElementById('edit-amount__field');
  const editButton = document.getElementById('edit__button');

  const urlParams = new URLSearchParams(window.location.search);
  const editCardTitle = urlParams.get('title');
  const editCardAmount = urlParams.get('amount');

  editAmountInput.value = editCardAmount;

  editButton.addEventListener('click', async () => {
    const updatedAmount = editAmountInput.value;

    if (!updatedAmount) {
      alert('Fill in the new propaganda influence amount');
      return;
    }

    const cardData = {
      card__title: editCardTitle,
      card__propaganda__amount: updatedAmount
    };

    try {
      const response = await fetch(`http://localhost:3000/propaganda/${editCardTitle}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        alert('Card updated successfully');
      } else {
        alert('Failed to update card');
      }
    } catch (error) {
      console.error('HTTP ERROR: ', error);
    }
  });
});
