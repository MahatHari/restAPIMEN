const express = require('express');
const router = express.Router();
const Ninja = require('../model/ninja');

//get a list of ninja from database
router.get('/ninjas', (req, res) => {
  res.send({ type: 'GET' });
});

// add a new ninja to database
router.post('/ninjas', (req, res, next) => {
  Ninja.create(req.body)
    .then((ninja) => res.send(ninja))
    .catch(next);
});

// update a ninja in database
router.put('/ninjas/:id', (req, res) => {
  console.log(req.params.id);
  res.end();
});
router.delete('/ninjas/:id', (req, res, next) => {
  console.log(req.params.id);
  Ninja.findByIdAndRemove({ _id: req.params.id })
    .then((ninja) => {
      res.send(ninja);
    })
    .catch(next);
});

module.exports = router;
