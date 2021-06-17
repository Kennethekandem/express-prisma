const router = require('express').Router();
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');

// register
router.post('/', user.register);

// login
router.post('/login', user.login);

// all users
router.get('/', auth, user.all);

module.exports = router;