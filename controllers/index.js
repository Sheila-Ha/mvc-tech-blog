const router = require('express').Router();
// Using multiple places - saved reference
const { logRequest } = require('../middleware/logging.js');

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

// router.use(logRequest);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;