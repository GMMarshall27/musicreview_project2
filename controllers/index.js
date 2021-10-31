const router = require('express').Router();

const homeRoutes = require('./home-routes');
const reviewRoutes = require('./reviews-routes');
const apiRoutes = require('./api');
const evalLogin = require('./evalLogin');

router.use('/', homeRoutes);
router.use('/reviews', reviewRoutes);
router.use('/api', apiRoutes);
router.use('/users', evalLogin);

module.exports = router;