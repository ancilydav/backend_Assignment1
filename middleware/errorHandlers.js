const errorHandlers =(err,req,res,next)=>{
    res.status(500).json({
        sucess:false,
        mesage:err.message
    });
}
export default errorHandlers;