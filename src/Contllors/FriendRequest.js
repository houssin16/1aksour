
const FriendRequestModels = require('../Models/FriendRequest')
const User                = require('../Models/UsersModel')
const SendFriendRequest = async  ( req , res) => {
 console.log("🔥🔥 RENDER TEST - SendFriendRequest");
 try{
   const SenderMyAcount = req.user.id
   const {receiver} = req.body
   const UserReceiver    = await User.findById(receiver)
   if (!UserReceiver) {
    return res.json({
        message: "المستخدم غير موجود"
    })
}
     if (SenderMyAcount === receiver) {
      return res.json({
        message: "لا يمكنك إرسال طلب صداقة لنفسك"
    })
}
   const ExistingRequest = await FriendRequestModels.findOne({
    $or: [
        {
            sender: SenderMyAcount,
            receiver: receiver
        },
        {
            sender: receiver,
            receiver: SenderMyAcount
        }
    ]
   })
 
   if(ExistingRequest) {
     return res.json({
         message: "طلب الصداقة موجود بالفعل"
     })
     
   }
   const NewRequest = await FriendRequestModels.create({
     sender : SenderMyAcount,
     receiver : receiver, /////الايدي المستخدم الدي ضغطنا عليه/////
   })
return res.json({
    message: "تم إرسال طلب الصداقة بنجاح"
})
 }catch(erorrs){
  console.log("SEND FRIEND REQUEST ERROR:", errors);

    return res.status(500).json({
        success: false,
        message: "حدث خطأ في السيرفر",
        error: errors.message
    });

 }
}
const GetFrindesRequest = async  (req , res) => {

try{
  const User_id = req.user.id
  const GetRequest = await FriendRequestModels.find({
   receiver : User_id
   
  }).populate("sender" , "name avatar")
   
 return res.json({
    requests : GetRequest
    
 })
}catch(e){
console.log(e)
}
} 
const AccptedRequestFrineds = async (req , res)=>{
const id_user_Now   = req.user.id
const Id_Requesting = req.body.id
const result  = await FriendRequestModels.findById(Id_Requesting)
/* if(!result) {
  return res.json("لا يوجد طلب")   
} */
if(id_user_Now === result.receiver.toString()) {
 result.status = "accepted"
}
 await result.save()
 res.json(result)
}
module.exports = {SendFriendRequestQ , GetFrindesRequest ,AccptedRequestFrineds}