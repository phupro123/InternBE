const express =require('express');
const router = express.Router();
const CartController = require('../../Controllers/Cart.controller')

router.post('/',CartController.add);

router.get('/',CartController.getList);

router.get('/:id',CartController.getOne);


router.delete("/:id",CartController.delete);


router.put("/:id",CartController.editCart);

router.put("/addProducts/:id",CartController.addProducts);

router.put("/removeProducts/:id/:pid",CartController.removeProducts);

router.put("/editProducts/:id",CartController.editProducts);

module.exports =router;