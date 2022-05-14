const router=require('express').Router()


const Order = require('../models/Order');
const {verifyToken,verifyTokenAndAuthorization, verifyAndAuthorizationAndAdmin} = require('./veriftToken');



router.post("/",verifyToken,async(req,res)=>{
    const newOrder=new Order(req.body)
    try{
        const savedOrder=await newOrder.save();
        res.status(200).json(savedOrder)
    }catch(e){
         res.status(500).json(e)
    }
})


router.put("/:id",verifyAndAuthorizationAndAdmin,async(req,res)=>{

try{
const updateOrder=await Order.findByIdAndUpdate(req.params.id,{
    $set:req.body
},{new:true})
res.status(200).json(updateOrder);
}catch(e){
    res.status(500).json(err)
}

})
  
router.delete("/:id",verifyAndAuthorizationAndAdmin,async(req,res)=>{
try{
await Order.findByIdAndDelete(req.params.id)
res.status(200).json("Order has been delete")
}catch(e){
   res.status(500).json(e) 
}
}),

router.get("/find/:UserId",verifyAndAuthorizationAndAdmin,async(req,res)=>{
    try{
  const orders=  await Order.find({userId:req.params.UserId})
  res.status(200).json(orders)
    }catch(e){
       res.status(500).json(e) 
    }
    }),
    router.get("/income", verifyAndAuthorizationAndAdmin, async (req, res) => {
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
      
        try {
          const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
              $project: {
                month: { $month: "$createdAt" },
                sales: "$amount",
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: "$sales" },
              },
            },
          ]);
          res.status(200).json(income);
        } catch (err) {
          res.status(500).json(err);
        }
      });
      
module.exports=router

