const router = require('express').Router();
const appRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/apps', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
