var _ = require('lodash'),
  express = require('express'),
  aircraft = require('./model.js'),
  repo = require('./repo.js'),
  router = express.Router();

router.get('/aircraft', function(req, res, next) {
  repo.load(null)
    .then(onSuccess)
    .catch(onFailure);

  function onFailure(err) {
    if (err) return next(err);
    res.status(404).json(null);
  }

  function onSuccess(data) {
    res.json(data);
  }
});

router.get('/aircraft/:id', function(req, res, next) {
  if (!req.params.id) {
    res.status(412).json(null);
    return;
  }

  repo.load(req.params.id)
    .then(onSuccess)
    .catch(onFailure);

  function onFailure(err) {
    if (err) return next(err);
    res.status(404).json(null);
  }

  function onSuccess(data) {
    res.json(data);
  }
});

router.post('/aircraft', function(req, res, next) {
  if (!req.body.aircraft) {
    res.status(412).json(null);
    return;
  }

  var item = req.body.aircraft;
  var model = new aircraft();

  _.assign(model, item);

  repo.save(model)
    .then(onSuccess)
    .catch(onFailure);

  function onFailure(err) {
    if (err) return next(err);
    res.status(500).json(null);
  }

  function onSuccess(data) {
    res.status(201).json(data);
  }
});

router.put('/aircraft/:id', function(req, res, next) {
  if (!req.params.id) {
    res.status(412).json(null);
    return;
  }

  var item = req.body.aircraft;

  repo.load(req.params.id)
    .then(saveAircraft)
    .then(onSuccess)
    .catch(onFailure);

  function onFailure(err) {
    if (err) return next(err);
    res.status(500).json(null);
  }

  function onSuccess(data) {
    res.status(201).json(data);
  }

  function saveAircraft(model) {
    _.assign(model, item);
    return repo.save(model);
  }
});

router.delete('/aircraft/:id', function(req, res, next) {
  if (!req.params.id) {
    res.status(412).json(null);
    return;
  }

  repo.load(req.params.id)
    .then(deleteAircraft)
    .then(onSuccess)
    .catch(onFailure);

  function deleteAircraft(model) {
    return repo.remove(model);
  }

  function onFailure(err) {
    if (err) return next(err);
    res.status(404).json(null);
  }

  function onSuccess() {
    res.status(204).json(null);
  }
});

console.log('Loaded Aircraft API Router');

module.exports = router;