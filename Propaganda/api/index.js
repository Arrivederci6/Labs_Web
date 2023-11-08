const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.options('*', cors());
app.use(express.json())

const propaganda = [];

app.get('/propaganda', (req, res) => {
  if (propaganda.length === 0) {
    res.json([]);
  } else if (!req.query.search) {
    res.json(propaganda);
  } else {
    const search = req.query.search.toLowerCase();
    const response = propaganda.filter(card => card.card__title.toLowerCase().includes(search) || card.card__propaganda__amount.toString().includes(search));
    res.json(response);
  }
});

app.get('/propaganda/:propagandaId', (req, res) => {
  const id = req.params.propagandaId;
  const propagandaItem = propaganda.find(card => card.id.toString() === id.toString());

  if (!propagandaItem) {
    return res.sendStatus(404);
  }

  res.json(propagandaItem);
});


app.get('/propaganda/amount', (req, res) => {
  res.json(propaganda.map(card => card.card__propaganda__amount).reduce((sum, pr) => sum + pr));
})

app.put('/propaganda/:propagandaId', (req, res) => {
  const id = req.params.propagandaId;
  const propagandaItem = propaganda.find(card => card.id.toString() === id.toString());

  if (!propagandaItem) {
    return res.sendStatus(404);
  }

  propagandaItem.card__title = req.body.card__title;
  propagandaItem.card__propaganda__amount = req.body.card__propaganda__amount;

  res.sendStatus(200);
})

app.post('/propaganda', (req, res) => {
  const newCard = {
    id: req.body.id,
    card__title: req.body.card__title,
    card__propaganda__amount: req.body.card__propaganda__amount,
  };

  propaganda.push(newCard);

  res.sendStatus(201);
});


app.delete('/propaganda', (req, res) => {
  propaganda.splice(0,propaganda.length);

  res.sendStatus(204);
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(port, () => {
  console.log(`Server is currently running on port ${port}`)
})