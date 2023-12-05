
const Product = require('../Models/Product.model')


const createError =require('http-errors');
const {productValidate}= require('../helpers/validation')

module.exports ={
    getList: async (req,res,next)=>{
        try {
            
            const data = await Product.find()
               
            const count = await Product.countDocuments();
            res.status(200).json({
                status:'okay',
                elements:data,
                total: count,
            });
          
            
        } catch (error) {
            next(error)
        }
    },
    add: async (req,res,next)=> {
        try{
            
            let data =req.body
            
            const {error} = productValidate(data);
            if(error){
                throw createError(error.details[0].message)
            }
         
           const product =  new Product(
                data
           )

           const saveProduct = await product.save();
           return res.status(200).json({
                status:'okay',
                elements: saveProduct 
           })

        }catch(e){
            next(e);
        };
    },
  
    
    getOne: async (req,res,next)=>{
        try {
            const data = await Product.findById(req.params.id)
                                  
            
            res.status(200).json({
                status:'okay',
                elements:data,
            });
            
        } catch (error) {
            next(error)
        }
    },
    delete: async(req,res,next)=>{
        try {
            await Product.findByIdAndDelete(req.params.id);
          
            res.status(200).json({
                status:'deleted',
            })
            
        } catch (error) {
            next(error)
        }
    },
    editProduct: async(req,res,next)=>{
        try {
            
           const newProduct = await Product.findByIdAndUpdate(req.params.id , req.body, { new: true })
           res.status(200).json({
            status:'okay',
            elements: newProduct,
        })
           
            
        } catch (error) {
            next(error)
        }
    },

}