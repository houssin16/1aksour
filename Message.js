

const TokenMessage         = localStorage.getItem('token');
const localStorageId       = localStorage.getItem('username')
const Id_user              = JSON.parse(localStorageId)
const button = document.querySelector('.ButtonSendig')
const Input_Send =document.querySelector('.Input_Send')
const name_Image_To_Person = document.querySelector('.name_Image-To-Person')
 async function prsone() {
  try{

   const Search = document.querySelector('.SearchFrindes').value.trim();
    if(!Search) return 
    const response = await axios.get(`${BACKEND_LOCAL_URL}ResultuserFrindes?Searching=${Search}`,
        {headers :{ Authorization:  `Bearer ${TokenMessage}`},})
        console.log( "respone" , response);
        
 const SearchVoidvalue = document.querySelector('.SearchFrindes').value.trim();
   if (!SearchVoidvalue)return;
   let Result =""
    response.data.forEach(element => {
     console.log(element);
     
         Result +=`
         <div class="BoxFrindesChat" data-prsone=${element._id}>
                        <div class="mage_Person_And_Name_person">
                        <div class="Image_Person"> 
                          <img src="${BACKEND_LOCAL_URL}uploads/${encodeURIComponent(element.avatar)}" alt="">
                        </div>
                            <div class="Name_person">
                                <h2>${element.name}<h2> 
                                 <h3>السلام عليكم كيف حالكم</h3>
                            </div>
                            </div>
                             <div class="TimingMessage">
                        <h3>مند ساعيتن</h3>
                        <h3 class="Message_Chat">2</h3>
                       </div>
          </div>
        
        `
  
     
 
}); 
 console.log(Result);
document.querySelector('.Friends_list_chat').innerHTML = Result 

}catch(erorrs){

 console.log(erorrs);
 

}
 
 
}

document.addEventListener('input' ,prsone) 
document.addEventListener("DOMContentLoaded" , ()=> {
  document.addEventListener('input' , (e)=>{
  const input = e.target.closest('.SearchFrindes')
   if (!input) return;
   if (input.value.trim().length === 0) {
       document.querySelector('.Friends_list_chat').innerHTML = ""
       GetFrindesAllReq()
  }
})

})


let ResultPrsone;
document.addEventListener('click' , (e)=>{
    const Person    = e.target.closest(".BoxFrindesChat")
    if (!Person) return
    const Person_id = Person.dataset.prsone
    ResultPrsone = Person_id
    GetMessages()
    if (ResultPrsone) {
        document.querySelector('.LisT-Onther-user').classList.remove('visibilityToheader')
    }
   GetFrindesContactAk(Person_id)
 
  
})
async function Kia (){
   const ResultText = document.getElementById('PlaceMessage')
   ResultText.addEventListener('input' , ()=>{
  if (ResultText.value.trim().length > 0) {
    button.classList.add('ButtonVisible')
    document.querySelector('.fa-paper-plane').classList.add('ColorWhiteIcone')
   }else{
     button.classList.remove('ButtonVisible')
    document.querySelector('.fa-paper-plane').classList.add('ColorWhiteIcone')

   }
  console.log(button.className);
   })
  if (!ResultPrsone) {

        document.querySelector('.Chat').innerHTML = ` <div class="StartingChat">
                      <i class="fa-solid fa-paper-plane"></i>
                       <h1>ابدأ محادثة</h1>
                       <h2>اختر صديقاً من القائمة لبدء المحادثة</h2>
                     </div>
                  `
    document.querySelector('.Chat').classList.add('ChatingAddclass') 
    document.querySelector('.LisT-Onther-user').classList.add('visibilityToheader')
    Input_Send.classList.remove('DisplayNonDivInputAndbutton')
  }
  
} 
Kia()
async function SendMessage() {
      console.log(ResultPrsone)
      const ResultText = document.getElementById('PlaceMessage').value.trim()
   if (ResultText.value === "" && !ResultPrsone) return
    const res = await axios.post(`${BACKEND_LOCAL_URL}messages`,
    { receiver:ResultPrsone,message: ResultText,},{
    headers :{ Authorization:  `Bearer ${TokenMessage}`}}) 

}
document.getElementById('ButtonSendMessage').addEventListener('click' ,  SendMessage ) 
async function GetMessages (){
   try{
       
      const res = await axios.post(`${BACKEND_LOCAL_URL}getmessage`
        ,
        {
        receiver : ResultPrsone
        },{
        headers :{ Authorization:  `Bearer ${TokenMessage}`}}

    )
 
     if(res.data){
           document.querySelector('.Chat').innerHTML = ` <div class="StartingChat">
                      <i class="fa-solid fa-paper-plane"></i>
                       <h1>ابدأ محادثة</h1>
                       <h2>اختر صديقاً من القائمة لبدء المحادثة</h2>
                     </div>
                     `
            document.querySelector('.Chat').classList.add('ChatingAddclass')
            Input_Send.classList.add('DisplayNonDivInputAndbutton')
      }
      let result =""
      
       
     let Position;
     res.data.forEach(e => { 
  
        const date  = new Date(e.createdAt) 
        ///////ناخذ الساعة ودقائق ///
        let hour = date.getHours();
        let minute = date.getMinutes();
   
         // هل الوقت صباح أم مساء؟
        let period;
        if(hour >= 12 ){
            period = "م"
        }else{
             period = "ص"
        }
        // تحويل نظام 24 ساعة إلى نظام 12 ساعة
        if(hour > 12){
          hour = hour - 12
        }
        // الساعة 0 تعني 12 منتصف الليل
        if(hour === 0) {
         hour = 12
        }
        minute = minute.toString().padStart(2 , "0")
        const time = `${hour}:${minute} ${period}`
      
        if(e.sender === Id_user._id ){
          Position = 'right'
        }else{
          Position = 'left'
        }

       result += `
                    <div class="message ${Position}">
                          <p>${e.message}</p>
                          <span>${time}</span>
                        </div>         
                    
                       
                   ` 
             document.querySelector('.Chat').innerHTML = result                      
           
        })  
        

   }catch(e){
        console.log(e)
   }
  }
async function GetJustFrined (){

  const res = await axios.get(`${BACKEND_LOCAL_URL}GetUserSuggestions`
    ,
    {headers :{ Authorization:  `Bearer ${TokenMessage}`},}
  )
/*   console.log(res.data.ResFrindes); */
  
}
GetJustFrined()
async function GetFrindesAllReq (){   ////// جلب الاصدقاء
  try{
   const res = await  axios.get(`${BACKEND_LOCAL_URL}GetFrindesAll`,
  {headers :{ Authorization:  `Bearer ${TokenMessage}`},}
  )
  if (res.data.length > 0) {
     let Result =""
    res.data.forEach(element => {
    /*  console.log(element); */
     
         Result += `
         <div class="BoxFrindesChat" data-prsone=${element._id}>
                        <div class="mage_Person_And_Name_person">
                        <div class="Image_Person"> 
                          <img src="${BACKEND_LOCAL_URL}uploads/${encodeURIComponent(element.avatar)}" alt="">
                        </div>
                            <div class="Name_person">
                                <h2>${element.name}<h2> 
                                 <h3>السلام عليكم كيف حالكم</h3>
                            </div>
                            </div>
                             <div class="TimingMessage">
                        <h3>مند ساعيتن</h3>
                        <h3 class="Message_Chat">2</h3>
                       </div>
          </div>
        
        `
  
     
 
  }); 
  document.querySelector('.Friends_list_chat').innerHTML = Result  
  }else{

   document.querySelector('.Friends_list_chat').innerHTML = `
                          <div class="Not_found_Frindes">
                        <p>لم تقم بإضافة أي أصدقاء بعد</p>
                    </div>
   `
  }
  }catch(er){
   console.log(er);
  }
}
GetFrindesAllReq()
const LisTOntheruser = document.querySelector('.NamePerson_Chat')
async  function GetFrindesContactAk(id){
try{

const response = await axios.get(`${BACKEND_LOCAL_URL}GetFrindesContact/${id}` ,
 {
  headers : {Authorization : `Bearer ${TokenMessage}`}
 }

)

response.data.forEach(el => {
const divelemenet = document.createElement('div')
divelemenet.classList.add('name_Image-To-Person')
divelemenet.innerHTML += `
<div class="name_Image-To-Person">
                           <img class="ImageContact" src="${BACKEND_LOCAL_URL}uploads/1762074942659.jpg" alt="">
                        </div>
                        <div class="NamePersonContact">
                           <h2> حسين</h2>
                           <h3>متصل الان</h3>
                        </div>

`

})
LisTOntheruser.innerHTML = divelemenet
}catch(e){
console.log(e);


}



}