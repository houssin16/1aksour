
const user = require('../Models/UsersModel')
const FriendRequest = require('..//Models/FriendRequest')
const GetUserSuggestions = async (req , res)=> {
 const user_id = req.user.id
   const Frindes = await FriendRequest.find({ /////// هنا جبنا الاصدقاء للحساب الحالي وشكرا  
    status : "accepted",
    $or :[
        {sender :user_id },
        {receiver :user_id}
    ]
 })
  const result = Frindes.map(f =>{  /// الان اصبح لدينا [Array : 200 , 300 , 500]  ////الان استخرجنا معرف الاشخص الالاصدقاء ////
    
    if (f.sender.toString() === user_id.toString()) {
    return  f.receiver
    }else{
        return f.sender
    }
 } )


const SuggestionsFriends = await user.find({  //// هنا استبعدنا الايدي المستخدم الحالي  ////
  _id: {
    $ne: user_id,
    $nin: result
  }
})
console.log("SuggestionsFriends:", SuggestionsFriends);
console.log("Count:", SuggestionsFriends.length);
const Users_Bettwen =await Promise.all( SuggestionsFriends.map( async resulte => {
  const requset = await FriendRequest.find({
    $or:[
   {
      sender: user_id,
      receiver: resulte._id,
   },
   {
      sender: resulte._id,
      receiver: user_id,
   }
] 
  })
 return {
      requset,
      request2 : resulte,  
 }
})
) 

res.json({Users_Bettwen , currentUserId : user_id , Frindes ,result})

}

module.exports = {GetUserSuggestions}