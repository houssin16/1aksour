/* const tokeen = sessionStorage.getItem('token')
if (!tokeen) {
    // إعادة التوجيه قبل أي عملية DOM
    window.location.replace('index.html')
}
 */



function ProfileClicked(userId){
  /*  const username = localStorage.getItem('username')
   const userid  = JSON.parse(username) */
   /* window.location = `Profail.html?userid=${userId}`  */
  window.location =`testProfile.html?userid=${userId}` 
} 
/*  const Result = document.querySelector('.ComentsInput')
 const IconeSend = document.querySelector('.fa-paper-plane')
 const ButtonCommentsSend = document.querySelector('.ButtonCommentsSend')
 Result.addEventListener('input' , ()=>{

   if(Result.value.length > 0){
  console.log("eeeeeeeeferghthbrnjteyuy,kuk;yiu;i;liuk;ki;");
  

 }else{
 console.log("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

 }
 }) */



 function ShowAltert(Msg){
  const Container = document.getElementById('Alert')
  if(!Container){
     console.log('Alert Container is not Found')
     return 
     }
     const Div = document.createElement ('div')
     Div.textContent = Msg
     Div.classList.add('alert')
     Container.appendChild(Div)
     setTimeout(() => {
     Div.remove()
     }, 2500);
} 

 const res = document.getElementById('Alert')

 const Url = "http://localhost:3000"
let urlxdown = `${Url}/posts`
const PlaceInComments = document.querySelector(".placeCommentsPost");


 const ButtonCreatet__Post =  document.getElementById('Buttonbox1') 
 const ImageInput = document.getElementById('ImageInput')
const Img1 = document.querySelector('.Img1')
const video = document.querySelector('.video')
const videoInput = document.getElementById('videoInput')
const feelings = document.querySelector('.feelings')
const feelingInput =document.getElementById('feelingInput')
const InputCreatepost = document.getElementById('InputCreatepost')
const CreatePost1 = document.querySelector('.CreatePost1') /////parent
const PageTextAndImageAndVideo = document.querySelector('.PageTextAndImageAndVideo') //child
const IconeX = document.getElementById('IconeX')
const ImageInput2 = document.getElementById('ImageInput2')
const Img12 = document.querySelector('.Img12')
let Mood = "Create"

/* ************************************************Login************************************************************* */

const Login = document.querySelector('.buttonlogin')


 if (Login) {
  const passwordVissssibile = document.getElementById('Icones') ////Icone
const Inpitpassword = document.getElementById('passwordlOGIN') ///Input
passwordVissssibile.addEventListener('click' , () =>{
  if (Inpitpassword.type === "password") {
     Inpitpassword.type = "text"
     /*  Inpitpassword.classList.remove('fa-eye')
     Inpitpassword.classList.add('fa-eye-slash')  */
  }else{

    Inpitpassword.type ="password"
   /*  Inpitpassword.classList.remove('fa-eye-slash')
    Inpitpassword.classList.add('fa-eye') */
  }
 
})
let buttonlout = document.getElementById('buttonlogin')


document.querySelector('.buttonlogin').addEventListener("click",  function ()  {
const email = document.getElementById('username').value;
const password = document.getElementById('passwordlOGIN').value;  

axios.post("http://localhost:3000/login", {
  email: email,
  password: password
})
.then((respone)=>{
    
     if (respone) {
        const res = respone.data.user
        
       // localStorage.setItem("token", respone.data.token);
        const Token = respone.data.token
        localStorage.setItem('username' ,JSON.stringify(res))
         localStorage.setItem('user' ,JSON.stringify(res.name))
        
        localStorage.setItem("token" , (Token))
            ShowAltert("تم تسجيل الدخول بنجاح");
            setTimeout(()=> {  window.location = "testDachbored.html" ; },100 ); 
     }
   
   }).catch((e) =>{

  ShowAltert(e.response?.data?.message || "حدث خطأ");

  
})
 
});
 }
/* ********************************************************************************End login***************************************************************************************** */

/* ************************************************************************ Logout start************************************************************************************************************************************* */
 const re = document.getElementById('Logout')
if (re) 
  {
   
  re.onclick = function(){  
        axios.post('http://localhost:3000/logout' , 
   
          {}, 
     {
           headers :{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
           } ,
          

      }).then((respone) =>{ 
        localStorage.removeItem('token') 
       ShowAltert('تم التسجيل الخروج بنجاح')
        localStorage.removeItem('username')
           window.location.href = `index.html`
         
          

      })
     }

} 
//////////////////////////////الحماية عند تسجيل الخروج/////////////////////////////////////////////

 if (re) {
    re.onclick = function() {
        // حذف كل بيانات الدخول
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        localStorage.removeItem('username')
        sessionStorage.removeItem('username')

        // توجيه المستخدم للصفحة الرئيسية بدون إمكانية الرجوع
        window.location.replace('index.html')
    }
  } 

  
     /* ************************************************************************ Logout end************************************************************************************************************************************* */


Img12.addEventListener('click'  , function(){
  ImageInput2.click()
})
Img1.addEventListener('click' ,()=>{
 ImageInput.click() 
})

video.addEventListener('click' , ()=>{
videoInput.click()
})
feelings.addEventListener('click' , ()=>{
  feelingInput.click()
})
InputCreatepost.addEventListener('click' , ()=>{   //////////////Inbut
  CreatePost1.classList.add('ClassVisibleContainer')
  document.body.classList.add('no-scroll')
  Mood = "Create"

  document.querySelector('.TitleBox1 h2').innerHTML = "إنشاء منشور"
  document.querySelector('.TitleCreatePost h4').innerHTML = "اضافة الي منشورك"
  document.querySelector('.ButtonCreateNewPost button').innerHTML = "نشر" 

})
CreatePost1.addEventListener('click' ,function(){   ///////////////////////Box1
/* CreatePost1.classList.remove('ClassVisibleContainer') */
 document.body.classList.remove('no-scroll') 
CreatePost1.classList.remove('ClassVisibleContainer')

})
 
PageTextAndImageAndVideo.addEventListener("click" , (e)=>{ 
  e.stopPropagation()
})
IconeX.onclick = function(){
   CreatePost1.classList.toggle('ClassVisibleContainer')
}
//////////////////////////////////////////////////////////////////////////All Post//////////////////////////////////////////////////////////////////////////////////////////////////////////
 




GetPostsAll()
function GetPostsAll(){

  
  const token = localStorage.getItem('token');
  axios.get('http://localhost:3000/posts', {
    headers: { Authorization: `Bearer ${token}`}
  })
  .then(response => {

   /*  PlaceInComments.style.display = "none" */
    const posts = response.data
    const containerAll = document.querySelector('.SideBar');
    containerAll.innerHTML = "";
    console.log(posts);

    posts.forEach(element => {
      const container = document.createElement('div');
      container.classList.add('content');
     
               
       let result =r() 
       if (result) {
       let ButtonDeUpdate = ""
  
        if (result) { 
         if (element.userId?._id === result._id){
         ButtonDeUpdate = `
          <li onclick="UdpatePost('${encodeURIComponent(JSON.stringify(element))}')"><i class="fa-solid fa-pen"></i> تعديل المنشور</li>
          <li onclick = "FunctionDelete('${element._id}')"> <i class="fa-regular fa-trash-can"></i>حذف المنشور</li>
         `
      
        }else{
          ButtonDeUpdate =""
        } 
       }
       
      container.innerHTML = `
   <div class="UsernameAndImageImageUser">
                <i class="fa-solid fa-ellipsis"></i>
                <div class="UsernameAndImage1">
                   <div class="UsernameAndImage">
                     <h4 onclick="ProfileClicked('${element.userId._id}'">
                      ${element.userId?.name || "Unknown User"}
                     </h4>
                     <h6>${element.createdAt}</h6>
                   </div>
                   <div class="ImageUser">
                 <img src="http://localhost:3000/uploads/${element.userId?.avatar}"></div>
                   </div> 
                   </div>
                   <div class="Paraghraf">
                    <p>${element.text}</p>
                  
                   </div>
                  <div class="ImagePost">
                  <img src="http://localhost:3000/uploads/${element.image}">
                  </div>
                  
                 <div class="CommentAndLikesAndshir">
                     <div class="sharing">
                        <h3>مشاركة<span>12</span></h3>
                     </div>
                     <div class="CommentsandLikes"> 
                         <h3>تعبيق<span >${element.CoummentsCount}</span></h3>                         
                           <h3>اعجاب<span>1200</span></h3>
                     </div>
                     
                  </div>
                  <div class="IconeLikesComentSharing">
                    <i class="fa-solid fa-share-nodes">مشاركة</i>
                    <i class="fa-regular fa-message">تعليق</i>
                    <i class="fa-regular fa-heart">اعجاب</i>
                  </div>
                   
                   <div class="fa-trash">
                  <ul>
                  ${ButtonDeUpdate}
                  <li><i class="fa-solid fa-eye-slash"></i>اخفاء المنشور</li>
                  <li><i class="fa-solid fa-flag"></i>ابلاغ</li>
                                  
             </ul>
            </div>
           
   

             <div class="BoxComments">
                 <div class="InputINCoumments">
                    <input type ="text" class="ComentsInput" name ="text">
                    <img src = http://localhost:3000/uploads/${result.avatar}>
              </div>
                 <div class="ButtonCommentsSend">
                  <div class="Box1Button">
                 <button class="Send-Comments" data-id="${element._id}">
                      <i class="fa-regular fa-paper-plane"></i>
                </button>
                </div>
                <div class="OtherIcones">
                <i class="fa-solid fa-camera-retro"></i>
                 <i class="fa-regular fa-face-grin"></i>
                </div>
                </div>     
                  <div class="placeCommentsPost-${element._id}">
  <div class="titleimagenameANDUsernameAndComments">

    <div class="titleimagename">
    <img src="houssin.jpg" alt="user">
    </div>
   
    <div class="UsernameAndComments">
      <h3>xxxxxxxxxxxxxxxxxxxxxxx</h3>

      <div class="pico">
        <p>cccccccccccccccccccccccccc</p>
      </div>

      <div class="PlaceAksourLikeAndSeconde">
             
          
        <div class="Secondebox">
       
          <div class="TitleName">
            <span>منذ 30 دقيقة</span>
           
          </div>
          <span>رد</span>
          <span>إعجاب</span>
        </div>
      </div>

    </div>

  </div>
</div>  
                </div>
                
            
`;


       containerAll.prepend(container);
    
      GetComments(element._id)
        
        
    }       


   })
  }).catch((e)=>{

    console.log(e);
    
  })
}

/* ************************************************************************ All Post End ******************************************************************************************************************** */

/* ************************************************************************ Place  Comments Start ********************************************************************************* ***********************************/
 document.addEventListener('click', (e) => {
  const famessage = e.target.closest('.fa-message');
  
  if (!famessage) return; // تجاهل أي ضغط غير الأيقونة
  const Content = famessage.closest('.content')
  if (!Content)  return
  const BoxComments = Content.querySelector('.BoxComments')

  BoxComments?.classList.toggle('ShowPlaceCoumnets') 
   PlaceInComments?.classList.toggle('ShowPlaceCoumnets') 

    
 })
const Input =  localStorage.getItem('username')
const Id = JSON.parse(Input)
const Userid = Id.id
 document.addEventListener('click', (e)=> {
const IconeUbdate  = e.target.closest('.fa-ellipsis') 
if(!IconeUbdate)return
const Post = IconeUbdate.closest('.content')
if(!Post) return
const Fratch  = Post.querySelector('.fa-trash')
if (!Fratch) return
Fratch.classList.toggle('visibleIcone')

}) 

/* ************************************************************************ place Comments End ********************************************************************************* ***************************/

/* ************************************************************************ Upadte Start ********************************************************************************* **********************************/
function UdpatePost(object){  
  Mood = "update"
  const Objct = JSON.parse(decodeURIComponent(object))
  const CreatePost1 = document.querySelector('.CreatePost1')
  CreatePost1.classList.add('ClassVisibleContainer')
  document.querySelector('.TitleBox1 h2').innerHTML = "تعديل المنشور"
  document.querySelector('.TitleCreatePost h4').innerHTML = "اضافة الي تعديل"
  document.querySelector('.ButtonCreateNewPost button').innerHTML ="حفض"
  document.getElementById('TextArea1').value = Objct.text
  document.getElementById('ImageInput2').src = Objct.image
  
     ButtonCreatet__Post.addEventListener('click' , ()=>{
    if (Mood == "update") {

    const Token = localStorage.getItem('token');
    const  headers =  {Authorization: `Bearer ${Token}`}
    const TextArea1 = document.getElementById('TextArea1').value.trim();
    const ImagePost = document.getElementById('ImageInput2').files[0];
    let formdata = new FormData();
    formdata.append('text', TextArea1);
    formdata.append('image', ImagePost);
    if (TextArea1.length == 0 &&  !ImagePost){
      ShowAltert("الرجاء كتابة نص أو اختيار صورة قبل النشر");
        return;
    }

  urlxdown = `${Url}/posts/${Objct._id}`
             axios.put(urlxdown , formdata, {headers:headers})
      .then((res) => {
      ShowAltert("✅ تم تعديل  البوست بنجاح");
      
      
      const containerAll = document.querySelector('.Cont');
      containerAll.innerHTML = ""; // تنظيف فقط قبل التحديث
       GetPostsAll();  // ← تحديث حقيقي للبوستات من السيرفر
     }).catch((e)=>{
      console.log(e);
      
   })  
    } 
 })

} 
/* ************************************************************************ Upadte Start ********************************************************************************* **********************************/

/* ************************************************************************ Create Post Start ********************************************************************************* **********************************/
 function x(){
   ButtonCreatet__Post.addEventListener('click', function(){
   const Token = localStorage.getItem('token');
    const  headers =  {Authorization: `Bearer ${Token}`}
    const TextArea1 = document.getElementById('TextArea1').value.trim();
    const ImagePost = document.getElementById('ImageInput2').files[0];
    let formdata = new FormData();
    formdata.append('text', TextArea1);
    formdata.append('image', ImagePost);
    if (TextArea1.length == 0 &&  !ImagePost) {
      ShowAltert("الرجاء كتابة نص أو اختيار صورة قبل النشر");
        return;
     } 
    if (Mood == "Create") { 
    
     urlxdown = `${Url}/posts`  
     axios.post(urlxdown , formdata, {headers:headers})
    .then((res) => {
      
     ShowAltert("✅ تم نشر البوست بنجاح");
    // 🟢 جلب كل البوستات من السيرفر بعد الحف
    const containerAll = document.querySelector('.Cont');
    containerAll.innerHTML = ""; // تنظيف فقط قبل التحديث
    GetPostsAll(); 
   
    // ← تحديث حقيقي للبوستات من السيرفر
  })
}
});
 } 
x();
/* ************************************************************************ Create Post End ********************************************************************************* **********************************/

/* ************************************************************************ Create Comments Start ********************************************************************************* **********************************/


document.addEventListener("click", (e) => {
  const IconSendComments = e.target.closest('.Send-Comments');
  if (!IconSendComments) return;
  e.preventDefault();
  const PostId = IconSendComments.dataset.id;
  SendComments(PostId)
  
});
 


function SendComments(postId) {
 
   const Token = localStorage.getItem('token')
   const Inputtext = document.querySelector(`[data-id="${postId}"]`).closest('.BoxComments')
   const Result = Inputtext.querySelector('.ComentsInput').value
   const Input = Inputtext.querySelector('.ComentsInput')
   if(!Result) {
     ShowAltert("eeeeeeeeeeeeeeeeeeeeeeeeeeeee")
     return
   }
   axios.post(
    `http://localhost:3000/posts/${postId}/comments` ,
    {
      text : Result,
    
    },
      {
         headers : {Authorization : `Bearer ${Token}`}
      }
    )
 
    .then(response => {
         
        Input.value = ""
        GetPostsAll()
       
       
    })
 
  .catch(err =>{
    console.error(err.response?.data || err);
  });
}
 /* ///////////////////////////////////////////////////////////////////////////////Time Comments/////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

function TimeAgo(date){

const Now = new Date()
const Past = new Date(date)
const diff = Math.floor((Now - Past) / 1000)

if(diff < 60 ) return `مند ${diff}ثانية`
if(diff < 3600) return `مند${Math.floor(diff / 60 )}دقيقة`
if(diff < 86400) return `مند${Math.floor(diff / 3600)}ساعة`
return `مند ${Math.floor(diff  / 86400)} يوم`
}

/* ///////////////////////////////////////////////////////////////////////////////Time Comments/////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

function GetComments(id) {
  const Token = localStorage.getItem('token');

  axios.get(`http://localhost:3000/posts/${id}/comments`, {
    headers: { Authorization: `Bearer ${Token}` }
  })
  .then(response => {
    const comments = response.data
    const PlaceInComments = document.querySelector(`.placeCommentsPost-${id}`);
    console.log(response);
    
    if (!PlaceInComments) {
      console.warn("لا يوجد مكان لتعليقات البوست:", id);
      return;
    }

    PlaceInComments.innerHTML = "";

    if (comments.length === 0) {
      PlaceInComments.innerHTML = `<h4 style="color:gray">لا يوجد تعليقات 😔</h4>`;
      return;
    }

    comments.forEach((comment )=> {
     /*  console.log(comment); ////// Object */
     
      const div = document.createElement('div');
      div.classList.add('comment');
  
      div.innerHTML = `
  <div class="titleimagenameANDUsernameAndComments"">
    <div class="titleimagename">
      <img src="http://localhost:3000/uploads/${comment.userId.avatar}">
    </div>
         <div class="Reponded">
                    <input type ="text" class="Repond" name ="text">
                    <img id="RepondImg" src = http://localhost:3000/uploads/1760716520848.jpg>
            </div> 
    <div class="UsernameAndComments">
   <h3 onclick="ClikedPostComents('${comment.userId}')">${comment.userId.name}</h3>

     
    ${comment.text ? `<p>${comment.text}</p>` : ""}
          
    </div>
  </div>

  <div class="PlaceAksourLikeAndSeconde">
    <div class="Secondebox">
      <span> ${TimeAgo(comment.createdAt)} </span>
      <span class="Reponde">رد</span>
      <span class="Likess">إعجاب</span>
      
    </div>
    
  </div>
`;
 
      
      PlaceInComments.appendChild(div);
    });
     
  });   

}  

function ClikedPostComents(userid){


 
  if(!userid){
    console.error("userid undefined!");
    return;
  }
    window.location.href = `testProfile.html?userid=${userid}` 
}
/* ************************************************************************ Create Comments End ********************************************************************************* **********************************/

/* ************************************************************************ Delete Start ************************************************************************************************************************** */
 function FunctionDelete(id){

  const ContainerComnfirm = document.querySelector('.ContainerComnfirm')
  const ButtonDelete = document.getElementById('ButtonDelete')
  const Token = localStorage.getItem('token')
  /* const  */
  ContainerComnfirm.classList.add('ShowConfirm')
    const Canel1 = document.getElementById('Canel1')
   Canel1.addEventListener('click' , ()=>{
   ContainerComnfirm.classList.remove("ShowConfirm")
     
  })
  ButtonDelete.addEventListener('click'  , ()=>{
  axios.delete(`http://localhost:3000/posts/${id}`, {
     
     headers: {  Authorization: `Bearer ${Token}`} ,

     })
      .then((respone)=>{
         GetPostsAll()
         ContainerComnfirm.classList.remove('ShowConfirm')
        this.classList.add('CanelConfirm')
         ShowAltert("تم حدف البوست")
        
      }).catch((error)=>{
 
          ShowAltert(error)
  
      })

     })
  

  }   
/* ************************************************************************ Delete End   ********************************************************************************* **********************************/
/* ************************************************************************ Profile start   ********************************************************************************* **********************************/

  Profile()
function Profile(){


const token = localStorage.getItem("token");


if (token) {

  axios.get("http://localhost:3000/profile",{
  headers: {
    authorization: `Bearer ${token}`
  }
}).then((res)=>{

  const MainBar = document.querySelector('.Mainbar')
  const response = res.data

document.getElementById('ImageHeader').src = `http://localhost:3000/uploads/${response.avatar}`
document.getElementById('IamgePrifilpageprencbal').src = `http://localhost:3000/uploads/${response.avatar}`

})
}
}
 


/* ************************************************************************ Profile End   ********************************************************************************* **********************************/
document.querySelector('.fa-building-user').addEventListener('click' , function(){
window.location.href =`testProfile.html` 

})
document.querySelector('.fa-house').addEventListener('click' , function(){

  window.location.href =`testDachbored.html` 
})
const ImageHeader = document.getElementById('ImageHeader')
const ImageHeaderClass = document.querySelector('.ImageHeaderClass')
ImageHeader.addEventListener('click' , ()=>{
ImageHeaderClass.classList.toggle('ImageHeaderVisible')

})
const Result = document.querySelector('.ComentsInput')
const IconeSend = document.querySelector('.fa-paper-plane')
const ButtonCommentsSend = document.querySelector('.Send-Comments')


document.addEventListener('input' ,(e)=>{

   const Input  = e.target
   const Parent = Input.closest('.BoxComments') 
   const Button = Parent.querySelector('.Send-Comments')
   if(e.target.classList.contains('ComentsInput')){

       if(e.target.value.trim().length > 0 ){
         
         Button.classList.add('InputNotVid')
        
       }else{
        Button.classList.remove('InputNotVid')
        
       }
   }
})