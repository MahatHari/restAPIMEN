const express = require('express');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connecting to mongoo db
mongoose.connect('mongodb://localhost/ninjago', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //initilize routes
app.use('/api', require('./routes/api'));
//error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({
    error: err.message,
  });
});

//listening to request
app.listen(process.env.port || 3000, function () {
  console.log('listening for http request');
});
