async function AccptedRequestFrineds(id){
const Response_the_AccptedRequest =await axios.post(`${BACKEND_LOCAL_URL}AccptedRequestFrineds`,
  {id: id},
{
headers :{
  Authorization : `Bearer ${localStorage.getItem('token')}`
}
}
  
)

console.log(Response_the_AccptedRequest)
}
/*  async function SendInvition(id , button){
   console.log("TOKEN:", localStorage.getItem('token'));
    console.log("ID:", id);
const Invition = await axios.post(`${BACKEND_LOCAL_URL}SendFriendRequest`,
  {
    receiver:id
  },

  {
     headers:{Authorization :`Bearer ${localStorage.getItem('token')}`
    
    }
  }
 )  
 console.log(Invition);
 
 button.textContent = "تم ارسال الطلب"
} */
async function SendInvition(id, button) {

    console.log("🔥 دخلت SendInvition");
    console.log("TOKEN:", localStorage.getItem("token"));
    console.log("ID:", id);

    const Invition = await axios.post(
        `${BACKEND_LOCAL_URL}SendFriendRequest`,
        {
            receiver: id
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    );

    console.log(Invition);

    button.textContent = "تم ارسال الطلب";
}

async function RejectedInvition(){


}

