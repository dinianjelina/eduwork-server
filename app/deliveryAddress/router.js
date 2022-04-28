const router = require('express').Router();
const { police_check } = require('../../middlewares');
const deliveryAddressesController = require('./controller');

router.post('/delivery-addresses', police_check('create', 'DeliveryAddress'), deliveryAddressesController.store);
router.put('/delivery-addresses/:id', deliveryAddressesController.update);
router.get('/delivery-addresses', police_check('create', 'DeliveryAddress'), deliveryAddressesController.index);
router.delete('/delivery-addresses/:id', police_check('create', 'DeliveryAddress'), deliveryAddressesController.destroy);

module.exports = router;
