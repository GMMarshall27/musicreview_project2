const router = require('express').Router();
const evalLogin = require('./evalLogin');

router.use('/users', evalLogin);

module.exports = router;