
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
  const result = Frindes.map(f =>{
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
}).select('-password')

console.log(SuggestionsFriends)
res.json(SuggestionsFriends)
}
module.exports = {GetUserSuggestions}