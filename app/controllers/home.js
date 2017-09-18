var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.Article.findAll().then(function (articles) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.post('/', function (req, res, next) {
  db.Article.create({
    title: req.body.title,
    url: req.body.url,
    text: req.body.text
  }).then(function() {
    res.send(200);
  }).catch(err => {
    //console.log('e', err);
    res.send(400, {'error': err.errors});
  })
});
