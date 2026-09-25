async function GetUserSuggestionss(){
 const resGetUserSuggestionss = await  axios.get(`https://oneaksour.onrender.com/GetUserSuggestions`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    },
   
}); 
 
const user_idNow = resGetUserSuggestionss.data.currentUserId

resGetUserSuggestionss.data.Users_Bettwen.forEach(element => {
  
console.log(element)
const receiver = element.requset[0].receiver
console.log(receiver)
const sender = element.requset[0].sender
const person_who_sent_the_request =  element.requset[0]._id
let ButtonSendInv;
if(element.requset.length) {
 if(user_idNow === receiver) {
   ButtonSendInv = `
     <button id="user-plus" onclick="AccptedRequestFrineds('${person_who_sent_the_request}')">قبول <i class="fa-solid fa-check" ></i></button>
    <button>رفض<i class="fa-solid fa-xmark"></i></button>
  `
 }else if(user_idNow === sender) {
  
    ButtonSendInv = `
   <button id="user-plus">تم ارسال الطلب</button>
  `
 }

}else{
ButtonSendInv =`
<button id="user-plus">اضافة صديق<i class="fa-solid fa-user-plus"></i></button>`

} 
/* console.log(element.requset); */

    let Container = document.createElement('div')
    Container.classList.add('Aksour-Friends')
   Container = `
    <div class="Aksour-Friends">
                  <div class="Avatar-user">
                    <img src="https://oneaksour.onrender.com/uploads/${element.request2.avatar}" alt="">
                  </div>
                    <div class="AksourCurd">
                      <div id="TiminAgo">
                      <h1>${element.request2.name}</h1>
                       <span class="CreateAt">منذ 5 دقائق</span>
                      </div>
                      <h6>@aksourHoucine</h6>
                      <span>Devloberwebsite</span>
                      <span>20صديق مشنرك</span>
                    </div>
                   <div class="AccebteAnvition">
                    ${ButtonSendInv}
                   </div>
                   </div>
                
   `
  document.querySelector('.container').innerHTML += Container
});
}
GetUserSuggestionss()
async function AccptedRequestFrineds(id){
const Response_the_AccptedRequest =await axios.post(`https://oneaksour.onrender.com/AccptedRequestFrineds`,
  {id: id},
{

headers :{
  Authorization : `Bearer ${localStorage.getItem('token')}`
}

}
  
)
console.log(Response_the_AccptedRequest)
}
