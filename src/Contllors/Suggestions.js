
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
const SuggestionsFriends = await user.find( 
  {//// هنا استبعدنا الايدي المستخدم الحالي  ////
  _id: {
    $ne: user_id,
    $nin: result
  },
  },
   {
        password: 0
    }
)

const Users_Bettwen =await Promise.all( SuggestionsFriends.map( async resulte => {   ////// هنا الصدقاء المقترحون 
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

res.json({Users_Bettwen , currentUserId : user_id , Frindes ,result ,SearchFrindes , FindesAccepted})

}
const SearchFrindes = async   (req , res) =>{

  try{    
     const {Frindes , result} = await GetUserSuggestions(req)
     const iduser = req.user.id
     const Search_Result_FrontEnd = req.query.Searching
     if(!Search_Result_FrontEnd) return res.json([])
     
     const Result_user = await user.find({
       name : {$regex:Search_Result_FrontEnd , $options:'i'},
       _id  : {$in:result}

    }).limit(7)
   /*   console.log("Frindes =", Frindes)
      console.log("result =", result)
     console.log("Search =", Search_Result_FrontEnd) */
  res.json(Result_user)

  }catch(error){
   console.log(error)
  }

}
const GetJustFrinedAll =  async (req , res)=>  {
const {result} = await  GetUserSuggestions(req)
const FindesAccepted = await  user.find({
  _id : {
  $in : result
  }

})
res.json(FindesAccepted)
}
module.exports = {GetUserSuggestions ,SearchFrindes ,GetJustFrinedAll}