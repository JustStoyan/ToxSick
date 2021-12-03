const router = require('express').Router();
const authCotroller = require('./controllers/authController');
const homeController = require('./controllers/homeController');


router.use('/', homeController)
router.use('/auth', authCotroller);



module.exports = router;