const cardTitleInput = document.getElementById('title__field');
const cardPropagandaAmountInput = document.getElementById('amount__field');
const createButton = document.getElementById('create__button');

createButton.addEventListener('click', async () => {
  const cardTitle = cardTitleInput.value.trim();
  const cardPropagandaAmount = cardPropagandaAmountInput.value;
  
  if (!cardTitle || !cardPropagandaAmount) {
    alert("Fill in all the information");
    return;
  }

  const card = { cardTitle, cardPropagandaAmount };

  try {
    const response = await fetch('http://localhost:3000/propaganda', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    alert('Card created successfully');
    cardTitleInput.value = '';
    cardPropagandaAmountInput.value = '';
  } catch (error) {
    console.error('HTTP ERROR: ', error);
    alert('Failed to create card');
  }
});
