const express = require('express');
require('dotenv').config();
const db = require('./config/dbConfig');
const cors = require('cors'); // cross origin resource sharing
const app = express();

// routes
const routes = require('./core/routes/routes');

app.use(cors());
app.use(express.json());

// DB Connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

app.listen(process.env.PORT || 3000, () =>
  console.log(`App listening on port ${process.env.PORT}!`)
);

// call routes
app.get('/', (req, res) => res.send('Hello World!'));

// PREFIX "/api/endpoint"
app.use('/api', routes);
