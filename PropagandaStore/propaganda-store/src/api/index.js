const express = require('express')
const cors = require('cors')
const app = express()
const port = 5500

app.use(cors());
app.options('*', cors());
app.use(express.json())
app.use(express.static('src/img'));

const goodsData = [
    { id: 1, title: "Bing Chilling Chilling", price: "300", hasSmoking: true, image:'/bing_chilling.jpg' },
    { id: 2, title: "Bing Chilling Mao", price: "700", hasSmoking: false, image: '/bing_chilling_mao.jpg' },
    { id: 3, title: "Fake Bing Chilling", price: "150", hasSmoking: false, image: '/bing_chilling_fake.jpg' },
    { id: 4, title: "Buzz Lighter/ Max Khamuliak", price: "999", hasSmoking: true, image: '/buzz_lighter.jpg' },
];

app.get('/goods', (req, res) => {
    let filteredGoods = goodsData;

    if (req.query.hasSmoking !== undefined) {
        const hasSmoking = req.query.hasSmoking === 'true';
        filteredGoods = filteredGoods.filter(good => good.hasSmoking === hasSmoking);
    }
    if (req.query.priceGreaterThan500 !== undefined) {
        const priceGreaterThan500 = req.query.priceGreaterThan500 === 'true';
        filteredGoods = filteredGoods.filter(good => (priceGreaterThan500 ? good.price > 500 : good.price < 500));
    }

    res.json(filteredGoods);
});


app.get('/goods/:id', (req, res) => {
    const id = Number(req.params.id);
    const good = goodsData.find(good => good.id === id);
  
    if (!good) {
      return res.status(404).send('Good not found');
    }
  
    res.json(good);
  });
  

app.listen(port, () => {
  console.log(`Server is currently running on port ${port}`)
})
