const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to My ' });
});

router.get('/about', (req, res) => {
  const name = req.query.name || 'Guest';
  res.render('about', { title: 'About Us', name });
});

router.get('/about', (req, res) => {
  const name = req.query.name || 'Guest';
  res.render('about', { title: 'Welcome', name });
});

router.post('/about', (req, res) => {
  const name = req.body.name || 'Guest';
  res.redirect(`/about?name=${encodeURIComponent(name)}`);
});

module.exports = router;
