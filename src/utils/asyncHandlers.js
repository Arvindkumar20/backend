//promise method 
const asyncHandler = (requestHandler) =>{
     (req, res, next) => 
  Promise.resolve(requestHandler(req, res, next)).catch(next);
};




export { asyncHandler };
// try catch method 


// const asyncHandler=(func)=>async(req,res,next)=>{
// try {
//     await func(req,res,next);
// } catch (error) {
//   res.status(err.code||505).json({
//     success:false,
//     message:err.message||"something went wrong"
//   });
//   res.send({message:err.message}) ; 
// }
// }