
const Cart = require('../models/Cart');
const {verifyToken,verifyTokenAndAuthorization, verifyAndAuthorizationAndAdmin} = require('./veriftToken');

const router=require('express').Router()


router.post("/",verifyToken,async(req,res)=>{
    const newCart=new Cart(req.body)
    try{
        const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct)
        res.send("data saved")
    }catch(e){
         res.status(500).json(e)
    }
})


router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{

try{
const updateCart=await Cart.findByIdAndUpdate(req.params.id,{
    $set:req.body
},{new:true})
res.status(200).json(updateCart);
}catch(e){
    res.status(500).json(err)
}

})
  
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
try{
await Cart.findByIdAndDelete(req.params.id)
res.status(200).json("product has been delete")
}catch(e){
   res.status(500).json(e) 
}
}),

router.get("/find/:UserId",verifyTokenAndAuthorization,async(req,res)=>{
    try{
  const cart=  await cart.findBy({userId:req.params.UserId})
  res.status(200).json(cart)
    }catch(e){
       res.status(500).json(e) 
    }
    }),
    router.get("/", verifyAndAuthorizationAndAdmin, async (req, res) => {
        try {
          const carts = await Cart.find();
          res.status(200).json(carts);
        } catch (err) {
          res.status(500).json(err);
        }
      });
module.exports=router

