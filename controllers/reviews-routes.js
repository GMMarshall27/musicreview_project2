const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const dataPost = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = dataPost.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
      layout: 'reviews',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'reviews',
  });
});



module.exports = router;