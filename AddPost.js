
const token = localStorage.getItem('token');  
const InputSearch   = document.querySelector('.InputSearch')
const ResultSearchQ = document.querySelector('.ResultSearch')
const Containerews = document.querySelector('.Parent');
 const containerAll = document.querySelector('.Cont');
const Container     = document.querySelector('.container')
const ResultSearch  = document.querySelector('.ResultSearch')


   const Url = "http://localhost:3000"  
   function ShowAltert(Msg){
   const Container = document.getElementById('Alert')
    if(!Container){
    
     return 
     }
     const Div = document.createElement ('div')
     Div.textContent = Msg
     Div.classList.add('alert')
     Container.appendChild(Div)
     setTimeout(() => {
     Div.remove()
     }, 4500);
} 


 const res = document.getElementById('Alert')
let urlxdown = `${Url}/posts`
const PlaceInComments = document.querySelector('.placeCommentsPost');
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
/* function ScriteToSite2(){
   const token = localStorage.getItem('token')
   if (!token) {
    window.location = 'index.html'
   }
}
ScriteToSite2() */
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

document.querySelector('.buttonlogin').addEventListener("click",  function ()  {
const email = document.getElementById('username').value.trim()
const password = document.getElementById('passwordlOGIN').value.trim()
 axios.post(`${Url}/login`, {
  email: email,
  password: password,
}) 
.then((respone)=>{
     
     if (respone) {
        const res = respone.data.user
         localStorage.setItem("imge", JSON.stringify(res.avatar));
        const Token = respone.data.token
        localStorage.setItem('username' ,JSON.stringify(res))
        localStorage.setItem('user' ,JSON.stringify(res.name))
        localStorage.setItem("token" , (Token))
        ShowAltert("تم تسجيل الدخول بنجاح");
       setTimeout(()=> {  window.location = "testDachbored.html" ; },100 ); 
     }
  
   }).catch((e) =>{
  ShowAltert(e.response?.data?.message || "حدث خطأ");
    console.log(e.response?.data?.message || "حدث خطأ");

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
        localStorage.clear()
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
 CreatePost1.classList.remove('ClassVisibleContainer') 
 document.body.classList.remove('no-scroll') 
CreatePost1.classList.remove('ClassVisibleContainer')

})
 
PageTextAndImageAndVideo.addEventListener("click" , (e)=>{ 
  e.stopPropagation()
})
IconeX.onclick = function(){
    CreatePost1.classList.toggle('ClassVisibleContainer')
    document.body.classList.remove('no-scroll')
    
}
//////////////////////////////////////////////////////////////////////////All Post//////////////////////////////////////////////////////////////////////////////////////////////////////////

const UsersArayys = JSON.parse(localStorage.getItem('Users'))
let SetTimeOutX = false
 document.addEventListener('click' ,(e)=>{
          if (!e.target.closest('.ResultVoid') && !e.target.closest('.ResultSearch')) {
             ResultSearch.classList.add('SetTimeOut')
            
          }
         })
InputSearch.addEventListener('input' , ()=>{

  if(InputSearch.value !== "" ){
    SetTimeOutX = true
     axios.get(`http://localhost:3000/SearchUser?search=${InputSearch.value}`,

     ).then((res)=>{
       
       ResultSearch.classList.add('blockSearch')
      
       const responsestatus = res.data
      
       
       const responeS =  responsestatus.map(e =>{  
      
         return `
        
               <div class="BoxUsers1">
                   <div class="Userimge">
                     <img class="ImgClass" src="http://localhost:3000/uploads/${e.avatar}" alt=""> 
                   </div>
                   <div class="NameUser">
                   <h2 style="font-size:20px;" class="TextUsername" onclick="GetOnepostPage('${e._id}')">${e.name}</h2>
                     <h4> @ Houcine to Mouhmad</h4>
                        <h4>50 صديق مشترك</h4>
                   </div>
                   <div class="invteFrindes">
                      <div class="BoxInvIcone">
                          <i class="fa fa-user-plus"></i><span>اضافة</span>
                      </div>
                   </div>
               </div>
           
       `
    
       }).join('')
        ResultSearch.innerHTML = `
         <div class="ResultUsers">
            <h2>نتيجة البحث(${responsestatus.length})</h2>
          </div>
          ${responeS}
        ` 
         
       if (responsestatus.length === 0) {
         const DivCreate  = document.createElement('div')
         DivCreate.className = "ResultVoid"
         const Createtext = document.createElement('h1')
         Createtext.textContent = "لا توجد نتائج"
         DivCreate.append(Createtext)
         ResultSearch.append(DivCreate)
       
       }
    }) 
     }else if(InputSearch.value === ""){
    SetTimeOutX= false
     }            
     if (!SetTimeOutX) {
     ResultSearch.classList.add('SetTimeOut')
     ResultSearch.innerHTML = ""
    }else{
    ResultSearch.classList.remove('SetTimeOut')
  }      
     
})


   /* ______Stop Function________ */
    GetPostsAll() /* ____________________________________________________________________________________________________________ */
function GetPostsAll(){

  axios.get('http://localhost:3000/posts', {
    headers: { Authorization: `Bearer ${token}`}
  })
  .then(response => {
    if(PlaceInComments){
           PlaceInComments.style.display = "none" 

    }
   
    
     const Likes = response.data
    const posts = response.data
    const containerAll = document.querySelector('.SideBar');
    containerAll.innerHTML = "";
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
                     <h4 id="ProfileClickede" onclick="ProfileClicked('${element.userId._id}','${element.userId.name}')">
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
                           <h3>اعجاب<span class="LikesCount-${element._id}">${element.likes.length}</span></h3>
                     </div>
                     
                  </div>
                  <div class="IconeLikesComentSharing">
                    <i class="fa-solid fa-share-nodes">مشاركة</i>
                    <i onclick="openPost('${element._id}')" class="fa-regular fa-message">تعليق</i>
                    <i class="fa-regular fa-heart"  data-id =${element._id} data-likes=""  onclick="LikesPost(this)"><span class="LikeSpan">اعجاب</span></i>
                  </div>
                   
                   <div class="fa-trash" data-id=${element._id}>
                  <ul>
                  ${ButtonDeUpdate}
                  <li><i class="fa-solid fa-eye-slash"></i>اخفاء المنشور</li>
                  <li><i class="fa-solid fa-flag"></i>ابلاغ</li>
                                  
             </ul>
            </div>
           
   

             <div class="BoxComments" data-box="${element._id}">
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
              </div>  
         </div>
             
            
            
`;
    
  
       containerAll.appendChild(container);
      GetComments(element._id)
     
    }              
   })
   loadLikedPosts()
  }).catch((e)=>{
  console.log(e);
  
    
  })
}

/* ************************************************************************ All Post End ******************************************************************************************************************** */
 async function openPost(id ,e){
  e.preventDefault()
  await GetComments(id);
   loadReplies(); 
   
}
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
  const Icone3biont  = document.querySelectorAll('.fa-ellipsis') //// Icone 3 biont
 //////// list
let OpenList = false ;
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
const Fratsh1996 = Fratch.dataset.id
 
const AksourOpenList = document.querySelector('.visibleIcone')
if (AksourOpenList && AksourOpenList !== Fratch) {
  AksourOpenList.classList.remove('visibleIcone')
}
  Fratch.classList.toggle('visibleIcone'); 


})
/* _______________________________________________________________________________________________ */
/* _______________________________________________________________________________________________ */
document.addEventListener('mousedown' , (e)=>{
if(e.target.closest('.fa-ellipsis') || e.target.closest('.fa-trash')) {
 return ;
}
document.querySelectorAll('.fa-trash').forEach((e)=>{
   e.classList.remove("visibleIcone") 
})
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

   
    const  headers =  {Authorization: `Bearer ${token}`}
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
        console.log("ezjugjgh");
        CreatePost1.classList.remove('ClassVisibleContainer')
      /* ShowAltert("✅ تم تعديل  البوست بنجاح"); */
      const containerAll = document.querySelector('.Cont');
// تنظيف فقط قبل التحديث
      GetPostsAll(); 
    
     }).catch((e)=>{
      console.log(e);

   })
   if (containerAll) {
          containerAll.innerHTML = ""; 
   }  
    } 
 })
 
/* ______________________________________________________________________________________ */
} 
/* axios.get("http://localhost:3000/profile", {
  headers: {
    authorization: `Bearer ${token}`
  }
})
.then(res => {
  
})
.catch(err => {

}); */

/* ************************************************************************ Upadte Start ********************************************************************************* **********************************/

/* ************************************************************************ Create Post Start ********************************************************************************* **********************************/
    function x(){
   ButtonCreatet__Post.addEventListener('click', async function(){
  
    const  headers =  {Authorization: `Bearer ${token}`}
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
      GetPostsAll();
     ShowAltert("✅ تم نشر البوست بنجاح");
      CreatePost1.classList.remove('ClassVisibleContainer')
      document.body.classList.remove('no-scroll')
     const containerAll = document.querySelector('.Cont');
  })
  if (containerAll) {
     containerAll.innerHTML = ""; 
  }
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
function SendComments(postId){


   const Inputtext = document.querySelector(`[data-box="${postId}"]`)
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
         headers : {Authorization : `Bearer ${token}`}
      }
    )
 
    .then(response => {
         
        Input.value = ""
       /*  GetPostsAll() */
       
       
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

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
function GetComments(id) {


  axios.get(`http://localhost:3000/posts/${id}/comments`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => {
    const comments = response.data
    const PlaceInCommentsq = document.querySelector(`.placeCommentsPost-${id}`);
    const ImageCommentsReplay = JSON.parse(localStorage.getItem('imge'))
    
    
    
    if (!PlaceInCommentsq) {
      console.warn("لا يوجد مكان لتعليقات البوست:", id);
      return;
    } 
    PlaceInCommentsq.innerHTML = ""


    if (comments.length === 0) {
      PlaceInCommentsq.innerHTML = `<h4 style="color:gray">لا يوجد تعليقات 😔</h4>`;
      return;
    }
   
    
    comments.forEach((comment )=> {
     /*  console.log(comment); ////// Object */
     
      const div = document.createElement('div');
      div.classList.add('comment');
      let Us            = r()

      let  DeleteUpdate = ""
     if (comment.userId._id === Us._id) {
        DeleteUpdate = `
         <ul>
            <li  class="UpdateThisElement" data-Object=${JSON.stringify(comment)}>تعديل<i class="fa-solid fa-pen"></i></li>
            <li>حدف<i class="fa-regular fa-trash-can"></i></li>
            <li><i class="fa-regular fa-flag"></i>ابلاغ</li>
           <ul>
        `
    } else {
      DeleteUpdate = `
      <ul>
            <li><i class="fa-regular fa-flag"></i>ابلاغ</li>
      <ul>
      
      `
     } 
       
      div.innerHTML = `
  <div class="titleimagenameANDUsernameAndComments">
    <div class="titleimagename">
      <img src="http://localhost:3000/uploads/${comment.userId.avatar}">
    </div>
         
    <div class="UsernameAndComments">
       <h3 onclick="ClikedPostComents('${comment.userId}')">${comment.userId.name}</h3>

    ${comment.text ? `<p class="TextIllzi">${comment.text}</p>` : ""}
      <div class="Secondebox">
      <span> ${TimeAgo(comment.createdAt)} </span>
      <span class="Reponde">رد</span>
      <span class="Likess">إعجاب</span>
       
    </div>
    <div class="PlaceAksourLikeAndSeconde" data-comments-id="${comment._id}">
  
    <div class="Reponded">
 
                 <button class="Send-CommentsReponded">
                      <i class="fa-regular fa-paper-plane"></i>
                </button>
                <input type ="text" placeholder = "اكتب الرد"  class="Repond" name ="text" style="direction: rtl;">
                    <img id="RepondImg" placeholder = "اكتب الرد"  src ="http://localhost:3000/uploads/${ImageCommentsReplay}">
                </div>
        <div class= "ReplayParghraf">
         
         
               </div>
        </div>
     
    </div> 
     <i class="fa-solid fa-ellipsis-vertical" id="CommentsDeleteAndUpdate" ></i>
      <div class="InputSaveValueNew">
  
         <input type="text" class="ValueNew">
         <button onclick="UpdateComments(this)" data-object='${btoa(unescape(encodeURIComponent(JSON.stringify(comment))))}' class="ButtonSavedata">حفض</button>
         <button class="Buttonexet">العاء</button>
         
      </div>
      <div class="DeleteUpdate Classhidden">
         ${DeleteUpdate}
      </div>
  </div>
`;
 
      PlaceInCommentsq.appendChild(div);
  
    });
     
    
  });  
  loadReplies(); 
}
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */
const BASE_URL = "http://localhost:3000"
// ✅ خارج أي دالة — يُسجَّل مرة واحدة فقط
document.addEventListener('click', (e) => {

  // فتح / إغلاق الرد
  const openBtn = e.target.closest('.Reponde');
  if (openBtn) {
    const commentContainer = openBtn.closest('.UsernameAndComments');
    const repondEl = commentContainer.querySelector('.Secondebox');
   const Reponded = document.querySelector('.PlaceAksourLikeAndSeconde')
   const ContinerInputANDButtonSen = commentContainer.querySelector('.Reponded')
    /* ContinerInputANDButtonSen.classList.toggle('active1996') */
     ContinerInputANDButtonSen.classList.toggle('hidden')
     
    /* commentContainer.classList.toggle('replace');  */
    return;
  }
 
  // إرسال الرد
  const sendBtn = e.target.closest('.Send-CommentsReponded');
 
  if (sendBtn) {
    const commentContainer = sendBtn.closest('.PlaceAksourLikeAndSeconde');
    const repondEl = commentContainer.querySelector('.Reponded');
    const input = commentContainer.querySelector('.Repond');

    const commentId = commentContainer.dataset.commentsId

    const text = input.value.trim();
    if (!text) return alert('لا يمكن إرسال رد فارغ');

    axios.post(
      `${BASE_URL}/replies`,
      { text, commentId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
    .then(({ data }) => {
      if (!data) return;
     
      const ReplayParghraf = commentContainer.querySelector('.ReplayParghraf')
      // تنظيف
      input.value = '';
      repondEl.classList.remove('active1996');
      commentContainer.classList.remove('replace');
      const Userid = data.userId
     
     
    })
    .catch(err => {
      console.error(err);
      alert('خطأ في الإرسال');
    });
    /*  GetPostsAll() */
  }

});

/* ----------------------------------------------------__Get response Reply Comments_______________________________-------------------------------------- */
/* function GetReplyComments (){

  axios.get(`${BASE_URL}/replies`)
  .then((res)=>{

    console.log(res);
    
  })
} 
GetReplyComments() 

 */
 
function loadReplies() {

  axios.get('http://localhost:3000/replies', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(({ data }) => {
     
    document.querySelectorAll('.ReplayParghraf').forEach((f)=>{

     f.innerHTML = ""
    })
/*     console.log("REPLIES:", data); */

    data.forEach(reply => {

      // 🟢 استخراج ID بشكل صحيح
      let id = reply.commentId;

      if (typeof id === "object") {
        id = id._id;
      }

      // 🟢 البحث عن comment الصحيح
      const commentContainer =
        document.querySelector(`[data-comments-id="${id}"]`);

   

      if (!commentContainer) return;

      const box = commentContainer.querySelector('.ReplayParghraf');
     
      if (!box) return;

      // 🟢 إضافة الرد
      const html = `
        <div class="reply">
        <div class= "uLIZICom">
          <img src="http://localhost:3000/uploads/${reply.userId.avatar}">
           
            <h4>${reply.userId.name}</h4>
            </div>
            <p>${reply.text}</p>
         
        </div>
      `;

      box.insertAdjacentHTML("beforeend", html);

    });

  }).catch(err => {
    console.error("Error loading replies:", err);
  });
 
}

/* ______________________________________________________________________________________________________________ */
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
  ContainerComnfirm.classList.add('ShowConfirm')
    const Canel1 = document.getElementById('Canel1')
   Canel1.addEventListener('click' , ()=>{
   ContainerComnfirm.classList.remove("ShowConfirm")
     
  })
  ButtonDelete.addEventListener('click'  , ()=>{
  axios.delete(`http://localhost:3000/posts/${id}`, {
     
     headers: {  Authorization: `Bearer ${token}`} ,

     })
      .then((respone)=>{
        /*  GetPostsAll() */
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
function Profile() {
 
  const Window_The_Profile = document.querySelector('.Window_The_Profile')
    let WindowToProfile      = ""
   /*  Window_The_Profile.innerHTML ="" */
  if (token) {
    axios.get("http://localhost:3000/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
       
    }).then((res) => {
    
       
      const response      = res.data;
      const ChekingAvatar =  response.avatar === "default.png" || response.avatar === "" ;
      document.getElementById('ImageHeader').src = ChekingAvatar ? "http://localhost:3000/images/defaulte.png" : `http://localhost:3000/uploads/${response.avatar}`;
      document.getElementById('IamgePrifilpageprencbal').src = ChekingAvatar ? "http://localhost:3000/images/defaulte.png" :`http://localhost:3000/uploads/${response.avatar}`;
      document.getElementById('MouhemdAksourImage').src = ChekingAvatar ? "http://localhost:3000/images/defaulte.png" :  `http://localhost:3000/uploads/${response.avatar}`
      document.getElementById('UsernameMouhmedAksour').innerHTML = `${response.name}`
   /*    WindowToProfile = `
                 <img id="MouhemdAksourImage" src="http://localhost:3000/uploads/${response.avatar}" alt="">
                       <h3 id="UsernameMouhmedAksour">${response.name}</h3>
                       <h4 class="UserDachbord">@Aksour_Houcine_Enf</h4>
      
      `
      Window_The_Profile.innerHTML = WindowToProfile */
    }).catch((e) => {
      console.log(e);
    
    });
  }
}

/* ************************************************************************ Profile End   ********************************************************************************* **********************************/
/* document.querySelector('.fa-building-user').addEventListener('click' , function(){
window.location.href =`testProfile.html` 
}) */
document.querySelector('.fa-house').addEventListener('click' , function(){
  window.location.href =`testDachbored.html` 
})

const Result = document.querySelector('.ComentsInput')
const IconeSend = document.querySelector('.fa-paper-plane')
const ButtonCommentsSend = document.querySelector('.Send-Comments')


 document.addEventListener('input' ,(e)=>{

   const Input  = e.target
   if(Input) return ;
   const Parent = Input.closest('.BoxComments') 
   const Button = Parent.querySelector('.Send-Comments')
    if(e.target.classList.contains('ComentsInput'))
      {

       if(e.target.value.trim().length > 0 ){
         
         Button.classList.add('InputNotVid')
        
       }else{
        Button.classList.remove('InputNotVid')
        
       }
   } 
}) 



async function LikesPost(heart) {
 
  if (heart.dataset.loading === "true") return;
  heart.dataset.loading = "true";

  const postId = heart.dataset.id;
  const countEl = document.querySelector(`.LikesCount-${postId}`);
  const isLikedNow = heart.classList.contains('likedee');
  heart.classList.toggle('likedee'); //// 
 heart.style.color = !isLikedNow ? "red" : "" ;
 
    
 try{
     const response = await axios.post(`http://localhost:3000/posts/${postId}/like` , {} ,{

        headers :{

          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
     })
      heart.style.color = response.data.liked ? "red" : "#db4444" 
    if(countEl) {
        
       countEl.textContent = response.data.likes;
    }
 }catch(e){



 }heart.dataset.loading = "false";
}
 function r(){
    let user = null
    let userid = localStorage.getItem('username')
    if (userid != null){
       user = JSON.parse(userid)
    }
    return user
 }

 
  let   UserId2 = r()
  const Xn = UserId2._id

async function loadLikedPosts() {
  try {
    const res = await axios.get("http://localhost:3000/posts/likes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    const likedPosts = res.data;

    likedPosts.forEach(post => {
      const heart = document.querySelector(`[data-id="${post._id}"]`);
     
     
      if (heart) {
        heart.classList.add("liked");
        heart.style.color = "red";
      }
    });

  } catch (err) {
   
  }
}
document.addEventListener('click' , (e)=>{  ///     ايقونة ثلاث نقاط   
const fa_ellipsis  = e.target.closest('.fa-ellipsis-vertical')
if (!fa_ellipsis) return
const titleimagenameANDUsernameAndComments = fa_ellipsis.closest('.titleimagenameANDUsernameAndComments')
if(!titleimagenameANDUsernameAndComments)return
const DeleteUpdate = titleimagenameANDUsernameAndComments.querySelector('.DeleteUpdate')
if(!DeleteUpdate) return
DeleteUpdate.classList.toggle('displayB')
}) 
 document.addEventListener('mousedown' , (e)=>{
if (e.target.closest('.Classhidden')) {
  return
}
 document.querySelectorAll('.Classhidden').forEach((e)=>{
e.classList.remove('displayB')
}) 
}) 
  
document.addEventListener('click', (e)=>{    //////////  زر التعديل
const element1 = e.target.closest('.UpdateThisElement')
if(!element1) return
const DeleteUpdate = e.target.closest('.DeleteUpdate').classList.add('DisplayNoNe') /* ____ نضيف له display None ________*/
const titleimagenameANDUsernameAndComments   = e.target.closest('.titleimagenameANDUsernameAndComments')
const Secondebox = titleimagenameANDUsernameAndComments.querySelector('.Secondebox').classList.add('DisplayNoNe')  /* ______Display None ________*/
const InputSaveValueNew = titleimagenameANDUsernameAndComments.querySelector('.InputSaveValueNew').classList.add('DiplayBlock') /*_______Display________*/
const UpdateThisElement = titleimagenameANDUsernameAndComments.querySelector('.UpdateThisElement')
const P                 = titleimagenameANDUsernameAndComments.querySelector('.TextIllzi') 
P.classList.add('DisplayNoNe') 

/* const Objects = JSON.parse(UpdateThisElement.dataset.object) */

})

function UpdateComments(bTn) {
const objects = JSON.parse(decodeURIComponent(escape(atob(bTn.dataset.object))));
const Input = bTn.closest('.titleimagenameANDUsernameAndComments').querySelector('.ValueNew')
const Value = Input.value
axios.put(`http://localhost:3000/comments/${objects._id}` , {
 text : Value
},
    {
      headers:{
       Authorization : `Bearer ${localStorage.getItem('token')}`
  },
  
 
}).then(({data}) =>{
     if(data){
     const Container = bTn.closest('.titleimagenameANDUsernameAndComments')
     Container.querySelector('.InputSaveValueNew').classList.add('VisisbltyHidden')
     }

    Input.value = ""
        GetPostsAll()
     }).catch((Error)=>{
    console.log(Error);
 })
}
const Suggestion = document.querySelector('.suggestion')


const Window_The_Profile = document.querySelector('.Window_The_Profile')
window.addEventListener('scroll' ,()=>{
    if (window.scrollY > 2) {
      Suggestion.classList.add('TopL')
      Window_The_Profile.classList.add('TopL')
       
    }else if (window.scrollY === 0){
      Suggestion.classList.remove('TopL')   
      Window_The_Profile.classList.remove('TopL')  
    }
})

function GetOnepostPage(id){
 window.location=`http://127.0.0.1:5501/testProfile.html?id=${id}` 
console.log(id)
} 

function Ape (id){
const fa_building_user = document.querySelector('.fa-building-user')
fa_building_user.addEventListener('click'  , function(){
window.location = `http://127.0.0.1:5501/testProfile.html?userid=${id}` 
console.log(id);
})
} function ProfileClicked(userId){
  window.location = `http://127.0.0.1:5501/testProfile.html?id=${userId}`
}
 let  IntervalId2 = null 
   async function ChekingFhotoProfile2(){
  const GetFormationUSER = await GetUserdata2()
  if (GetFormationUSER.avatar === "default.png" || GetFormationUSER.avatar === "") {
     IntervalId2 = setInterval(() => {
      AlertMessage2('انقر هنا لاضافة صورة');
     }, 10000);
    }
} 
 ChekingFhotoProfile2()
 function AlertMessage2(ms) {
    const box = document.querySelector('.AlertMessage');
    if (!box) return 
    box.addEventListener('click' , ()=>{
       window.location = "http://127.0.0.1:5501/UpdateAcount.html"
    })
    const div = document.createElement('div');
    div.textContent = ms;
    div.className = "AlertMessagee";
    box.appendChild(div)
    requestAnimationFrame(()=>{
      div.classList.add('show')
    })
    setTimeout(() => {
        div.classList.add('hide') 
    },5000);
}

async function GetUserdata2(){
  const userid =  r()
  const ResUserdata = await  axios.get(`http://localhost:3000/GetUser/${userid._id}` ,{headers :{Authorization : `Bearer ${token}`}})
  return ResUserdata.data
}
const GetProfilex =  async () =>{
   const TokenProfilex = localStorage.getItem('token');
   const res = await axios.get("http://localhost:3000/profile" , {
    headers: {
      authorization: `Bearer ${TokenProfilex}`
    }
  })
  return res
}

async  function yt(){
 const  data = await GetProfilex()
 const  Result = data.data.avatar
 const ChekingOfAvatarisFindOrNO = Result !== "default.png" || Result !== "" ; 
 if (!ChekingOfAvatarisFindOrNO){
     clearInterval(IntervalId2) 
  }
}
yt() 

