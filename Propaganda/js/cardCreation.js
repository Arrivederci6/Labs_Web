const cardTitleInput = document.getElementById('title__field');
const cardPropagandaAmountInput = document.getElementById('amount__field');
const createButton = document.getElementById('create__button');

createButton.addEventListener('click', async () => {
  const cardTitle = cardTitleInput.value.trim();
  const cardPropagandaAmount = cardPropagandaAmountInput.value;

  const card = { cardTitle, cardPropagandaAmount };

  if (!cardTitle || !cardPropagandaAmount) {
    alert("Fill in all the information");
    return;
  }

  console.log(card);

  try {
    const response = await fetch('http://localhost:3000/propaganda', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    alert('Card created successfully');
    cardTitleInput.value = '';
    cardPropagandaAmountInput.value = '';
  } catch (error) {
    console.log('HTTP ERROR: ', error);
    alert('Failed to create card');
  }
});
