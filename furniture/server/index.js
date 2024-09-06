const express = require('express');
const mongoose = require('mongoose');

const cors = require('./src/middlewares/cors');
const catalogController = require('./src/controllers/catalog');
const usersController = require('./src/controllers/users');
const auth = require('./src/middlewares/auth');


start();

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/furniture', {
            // useUnifiedTopology: true,
            // useNewUrlParser: true
        });
        console.log('Database ready');
    } catch (err) {
        console.error('Database connection failed');
        process.exit(1);
    }

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(auth());
    app.use('/data/catalog', catalogController);
    app.use('/users', usersController);

    app.get('/', (req, res) => res.json({ message: 'REST service operational'}));

    app.listen(3030, () => console.log('REST service started on port 3030'));
}