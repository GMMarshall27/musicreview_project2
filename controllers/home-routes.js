const router = require('express').Router();

router.get('/', async (req, res) => {
    // sends to handlebars
    res.render('homepage');
});

module.exports = router;