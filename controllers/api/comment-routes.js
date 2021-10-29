const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');
//got from homework will change
router.post('/', withAuth, async (req, res) => {
    try {
      const commentNew = await Comment.create({
        ...req.body,
        userId: req.session.userId,
      });
      res.json(commentNew);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;