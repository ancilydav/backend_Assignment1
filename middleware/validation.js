
const validateItem =(req,res,next)=>{
    const {name,category,quantity}=req.body;

    if (!name||!category||quantity===undefined){
        return res.status(400).json({sucess:false,message:"all fields required"});
    }
    if(typeof quantity!=="number"){
        return res.status(400).json({
            sucess:false,
            message:"quantity must be number"
        });
    }
    next();
}
export  default validateItem;