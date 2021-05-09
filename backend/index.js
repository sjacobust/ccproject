const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

const { newsRouter } = require('./routes');

dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/news', newsRouter);

app.get('/', (req, res) => {
    res.send('Welcome to Express App!');
});


app.listen(port, () => {
    console.log(`App is listening in ${port}`);
});