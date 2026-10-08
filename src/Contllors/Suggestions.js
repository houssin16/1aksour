
const user = require('../Models/UsersModel')
const FriendRequest = require('..//Models/FriendRequest')
const GetUserSuggestions = async (req)=> {
 const user_id = req.user.id
   const Frindes = await FriendRequest.find({ /////// هنا جبنا الاصدقاء للحساب الحالي وشكرا  
    status : "accepted",
    $or :[
        {sender :user_id },
        {receiver :user_id}
    ]
 })

  const result = Frindes.map(f=>{  /// الان اصبح لدينا [Array : 200 , 300 , 500]  ////الان استخرجنا معرف الاشخص الالاصدقاء ////
    
    if (f.sender.toString() === user_id.toString()) {
    return  f.receiver
    }else{
        return f.sender
    }
 }) 
 

 return{
   Frindes,
   result,
  
 }
}
const SuggestionsFriends = async (req , res )=> {
const user_id = req.user.id
const {Frindes , result} = await GetUserSuggestions(req)

const SuggtionFrindes =  await user.find(
{
  _id:{
   $ne:user_id,
   $nin:result

  }
},
{

  password :0
}
)
const Users_Bettwen = await Promise.all(
  SuggtionFrindes.map(async resulte => {
    const requset = await FriendRequest.find({
      $or:[
          {
            sender: user_id,
            receiver : resulte._id
          },
          {
            sender:resulte._id,
            receiver: user_id
          }
      ]

    })
     return {
        requset,
        request2: resulte
     }
  })
)
  res.json({
    Users_Bettwen,
    currentUserId: user_id,
    Frindes,
    result
  })
}

const GetJustFrinedAll =  async (req , res)=>  {
const {result} = await  GetUserSuggestions(req)
const FindesAccepted = await  user.find({
  _id : {
  $in : result
  }

})
res.json(FindesAccepted)


////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = {GetUserSuggestions ,SearchFrindes ,GetJustFrinedAll ,SuggestionsFriends}