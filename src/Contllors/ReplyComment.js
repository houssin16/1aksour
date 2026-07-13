const Replaysec = require('../Models/ReplyComments')
const Comments  = require("../Models/CommentsModel")
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
      const {postIdd}  = req.params
    if (!postIdd) {
       return res.status(400).json({ message: "postId مطلوب" });
      }
       const commentse = await Comments.find({
         postId : postIdd
       })
      const CommentsId = commentse.map(Comm => Comm._id) 
      const replise = await Replaysec.find({
         commentId: {
         $in:CommentsId
         }
      })
     .populate('commentId', '_id') 
     .populate('userId', 'name avatar')
      res.json(replise)
      } catch(err){
      res.status(500).json({message:err.message})
      console.log(err)
     }

   }
module.exports = {ReplyComment , GetReplyComment};