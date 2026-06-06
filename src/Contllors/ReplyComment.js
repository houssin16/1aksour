const Replaysec = require('../Models/ReplyComments')

const ReplyComment =  async (req , res)=>{
try {
    
  const {text  , commentId} = req.body;
  const reply  = await  Replaysec.create({
  text,
  userId:req.user.id,
  commentId,

  })
  const PopulatedReplay = await reply.populate('userId' , 'name avatar')
   res.status(201).json(PopulatedReplay) 
} catch (error) {
    console.log(error)
    res.status(500).json({message:error.message})
}

}
const GetReplyComment = async (req  ,  res) =>{

   try{
    const replise = await Replaysec.find()
    .populate('commentId', '_id')
    .populate('userId', 'name avatar')
    res.json(replise)
   } catch(err){
    res.status(500).json({message:err.message})
    console.log(err)
   }

}
module.exports = {ReplyComment , GetReplyComment};