const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.reslove(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}

export {asyncHandler}





//
// onst asyncHandler =(func)  => async ()=>{
   // try{
       // await fn(req,res,next)
//
   // }catch(error){
       // res.status(error.code || 500).json({
           // success:false,
           // message: err.message
       // })
   // }
// 




