const Message = require('../Models/Message')

const SendMessageprsone = async ( req , res) => {

try{
   const  {receiver , message} = req.body;
   const  sender = req.user.id;
   const NewMessage = await Message.create({
    sender,
    receiver,
    message,
   })
   res.status(201).json({
    message:"تم ارسال الرسالة بنجاح",
    data:NewMessage,
   })
}catch(e){
  console.log(e);
    res.status(500).json({
     message: "حدث خطأ أثناء إرسال الرسالة"
 });
}
}
const GetMessages = async  (req , res)=>{
try{
    const userid = req.user.id
    const {receiver} = req.body
    const result = await Message.find({
       $or: [
         {
          sender : userid,
          receiver : receiver,
         },
         {
          sender : receiver,
          receiver : userid,
         }
        ]
    })
   res.json(result)
  

}catch(e){

}
}
module.exports = {
    SendMessageprsone ,GetMessages
}; 