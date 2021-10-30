const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');
//changed
router.post('/', withAuth, async (req, res) => {
  
    Comment.create(req.body).then((comment) => {
      console.log(comment)
      res.redirect(`/${comment.userId}`);
    }).catch((err) => {
      console.log(err.message);
    });

  });

module.exports = router;