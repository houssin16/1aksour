const UpdateCommentOne = require('../Models/CommentsUpdate')

const UpdateComment = async (req  , res)=>{
  
    try{
        const CommentId = req.params.id;
        const Userid    = req.user.id;
        const { text }    = req.body
        console.log("text المرسل:", text);

        const comment = await UpdateCommentOne.findById(CommentId)
        if(!comment){
           return res.status(404).json({message :"Comment not found"})
        }
        if(comment.userId.toString() !== Userid){
            return res.status(403).json({message : "Not allowed"})
        }
        comment.text = text
        await comment.save()
        res.json(comment)
       }catch(e){
      res.status(500).json({message : e.message})
      console.log(e);
      
    }
   
};
module.exports = {UpdateComment};