const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');
//get all posts for homepage

router.get('/', (req, res) => {
  res.redirect('/');
})

router.get('/login', (req, res) => {
  if (req.session.logged) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
