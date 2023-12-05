const express = require('express')
const router = express.Router()

const ProductRouter = require('./Product.route')



const CartRouter = require('./Cart.route')




router.use('/products', ProductRouter)

router.use('/carts', CartRouter)





module.exports = router