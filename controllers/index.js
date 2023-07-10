const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// all of these routes (in this file) are prefixed with '/'
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;