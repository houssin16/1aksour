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
module.exports = {FriendRequest}