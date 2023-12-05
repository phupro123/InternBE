
const Cart = require('../Models/Cart.model')


const createError =require('http-errors');


module.exports ={
    getList: async (req,res,next)=>{
        try {
            
            const data = await Cart.find()
               
            const count = await Cart.countDocuments();
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
            
          
           const cart =  new Cart(
                data
           )

           const saveCart = await cart.save();
           return res.status(200).json({
                status:'okay',
                elements: saveCart 
           })

        }catch(e){
            next(e);
        };
    },
  
    
    getOne: async (req,res,next)=>{
        try {
            const data = await Cart.findOne({userId:req.params.id})
                                  
            
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
            await Cart.findByIdAndDelete(req.params.id);
          
            res.status(200).json({
                status:'deleted',
            })
            
        } catch (error) {
            next(error)
        }
    },
    editCart: async(req,res,next)=>{
        try {
            
           const newCart = await Cart.findByIdAndUpdate(req.params.id , req.body, { new: true })
           res.status(200).json({
            status:'okay',
            elements: newCart,
        })
           
            
        } catch (error) {
            next(error)
        }
    },
    addProducts: async(req,res,next)=>{
        try {
           
           const newCart = await Cart.findOneAndUpdate({userId:req.params.id} ,  { $push: {products:req.body } }, { new: true })
           res.status(200).json({
            status:'okay',
            elements: newCart,
        })
           
            
        } catch (error) {
            next(error)
        }
    },
    removeProducts: async(req,res,next)=>{
        try {
           const newCart = await Cart.findOneAndUpdate({userId:req.params.id} , 
                                                        {$pull: {
                                                            products: {_id: req.params.pid},
        },}, { new: true })
           res.status(200).json({
            status:'okay',
            elements: newCart,
        })
           
            
        } catch (error) {
            next(error)
        }
    },
    editProducts: async(req,res,next)=>{
        try {
            const data = req.body
            let newCart
            if(data.quantity!==0){
                 newCart = await Cart.findOneAndUpdate({userId:req.params.id,"products._id":data._id} , 
                {$set: 
                    {"products.$.quantity":data.quantity }
                }, { new: true })
            }else{
                 newCart = await Cart.findOneAndUpdate({userId:req.params.id} , 
                    {$pull: {
                        products: {_id: data._id},
                },}, { new: true })
            }
        
           res.status(200).json({
            status:'okay',
            elements: newCart,
        })
           
            
        } catch (error) {
            next(error)
        }
    },
}