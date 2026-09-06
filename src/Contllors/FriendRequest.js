
const FriendRequestModels = require('../Models/FriendRequest')
const User                = require('../Models/UsersModel')
const FriendRequest = async  ( req , res) => {

 try{
   const Sender = req.user.id
   const {receiver} = req.body
   const UserReceiver    = await User.findById(receiver)
   if (!UserReceiver) {
    return res.json({
        message: "المستخدم غير موجود"
    })
}
     if (Sender === receiver) {
      return res.json({
        message: "لا يمكنك إرسال طلب صداقة لنفسك"
    })
}
   const ExistingRequest = await FriendRequestModels.findOne({
    $or: [
        {
            sender: Sender,
            receiver: receiver
        },
        {
            sender: receiver,
            receiver: Sender
        }
    ]
   })
 
   if(ExistingRequest) {
     return res.json({
         message: "طلب الصداقة موجود بالفعل"
     })
     
   }
   const NewRequest = await FriendRequestModels.create({
     sender : Sender,
    receiver : receiver,
   })
return res.json({
    message: "تم إرسال طلب الصداقة بنجاح"
})
 }catch(erorrs){
console.log(erorrs)

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
if(id_user_Now === result.receiver.toString()) {
 result.status = "accepted"

}
 await result.save()
 res.json(result)
}
module.exports = {FriendRequest , GetFrindesRequest ,AccptedRequestFrineds}