const router = require('express').Router();
const auth = require('../controllers/auth.controller');

router.post('/', auth.register);

module.exports = router;