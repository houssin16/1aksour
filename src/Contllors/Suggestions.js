
const user = require('../Models/UsersModel')
const FriendRequest = require('..//Models/FriendRequest')
const GetUserSuggestions = async (req , res)=> {
 const user_id = req.user.id
   const Frindes = await FriendRequest.find({
    status : "accepted",
    $or :[
        {sender :user_id },
        {receiver :user_id}
    ]
 })
  const result = Frindes.map(f =>{   /// الان اصبح لدينا [Array : 200 , 300 , 500]
    if (f.sender.toString() === user_id.toString()) {
    return  f.receiver
    }else{
        return f.sender
    }
 } )


const SuggestionsFriends = await user.find({
  _id: {
    $ne: user_id,
    $nin: result
  }
})
const Users_Bettwen =await Promise.all( SuggestionsFriends.map( async resulte => {
  const requset = await FriendRequest.find({
    $or: [
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

res.json({Users_Bettwen , currentUserId : user_id})

}

module.exports = {GetUserSuggestions}