const express =require('express');
const router = express.Router();
const CartController = require('../../Controllers/Cart.controller')

router.post('/',CartController.add);

router.get('/',CartController.getList);

router.get('/:id',CartController.getOne);


router.delete("/:id",CartController.delete);


router.patch("/:id",CartController.editCart);

router.patch("/addProducts/:id",CartController.addProducts);

router.patch("/removeProducts/:id/:pid",CartController.removeProducts);

router.patch("/editProducts/:id",CartController.editProducts);

module.exports =router;