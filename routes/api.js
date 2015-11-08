var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET all users */
router.get('/users', function(req, res, next) {
  models.User.findAll().then(function(users) {
    res.send(users);
  });
});

/* POST a new user */
router.post('/user', function(req, res, next) {
  models.User.create(req.body).then(function() {
    res.send({'success': true});
  }, function() {
    res.send({'success': false});
  });
});

/* GET one user */
router.get('/user/:id', function(req, res, next) {
  if (!req.user) {
    res.status(401).send();
  }
  models.User.findOne({
    where: {id: req.params.id}
  }).then(function(user) {
    res.send(user);
  }, function() {
    res.send({'success': false});
  });
});

/* PUT an update to one user */
router.put('/user/:id', function(req, res, next) {
  models.User.update(req.body, {
    where: {id: req.params.id}
  }).then(function() {
    res.send({'success': true});
  }, function() {
    res.send({'success': false});
  });
});

/* GET all tasks */
router.get('/tasks', function(req, res, next) {
  models.Task.findAll().then(function(tasks) {
    res.send(tasks);
  }, function() {
    res.send({'success': false});
  });
});

/* POST a new task */
router.post('/user', function(req, res, next) {
  models.Task.create(req.body).then(function() {
    res.send({'success': true});
  }, function() {
    res.send({'success': false});
  });
});

/* GET one task */
router.get('/task/:id', function(req, res, next) {
  models.Task.findOne({
    where: {id: req.params.id}
  }).then(function(task) {
    res.send(task);
  }, function() {
    res.send({'success': false});
  });
});

/* PUT an update to one task */
router.put('/task/:id', function(req, res, next) {
  models.Task.update(req.body, {
    where: {id: req.params.id}
  }).then(function() {
    res.send({'success': true});
  }, function() {
    res.send({'success': false});
  });
});

/* GET all users with their tasks */
router.get('/users/tasks', function(req, res, next) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.send(users);
  }, function() {
    res.send({'success': false});
  });
});

module.exports = router;
