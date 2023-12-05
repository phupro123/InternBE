const Joi = require('joi');

const productValidate = data =>{
    const productSchema = Joi.object({
        image: Joi.string().required(),
        name: Joi.string().required(),
        description:Joi.string(),
        price:Joi.number().required(),
        color:Joi.string().required(),
        
    })
    return productSchema.validate(data)
}

module.exports = {
    productValidate,
   
}