const router = require('express').Router();
const { police_check } = require('../../middlewares');
const orderController = require('./controller');

router.post('/orders', police_check('create', 'order'), orderController.store);
router.get('/orders', police_check('create', 'order'), orderController.index);

module.exports = router;
