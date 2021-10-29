const router = require('express').Router();

const homeRoutes = require('./home-routes');
const reviewRoutes = require('./reviews-routes');
const apiRoutes = require('./api/');

router.use('/', homeRoutes);
router.use('/reviews', reviewRoutes);
router.use('/api/', apiRoutes);

module.exports = router;