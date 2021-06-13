const router = require('express').Router();
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');

router.post('/', user.register);
router.get('/', auth, user.all);

module.exports = router;