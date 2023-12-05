const express =require('express');
const router = express.Router();
const ProductController = require('../../Controllers/Product.controller')

router.post('/',ProductController.add);

router.get('/',ProductController.getList);

router.get('/:id',ProductController.getOne);


router.delete("/:id",ProductController.delete);


router.put("/:id",ProductController.editProduct);

module.exports =router;