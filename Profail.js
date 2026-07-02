
const Url = `http://localhost:3000/`
const Token = localStorage.getItem('token')
document.querySelector('.fa-house').addEventListener('click' , function(){
  window.location.href =`testDachbored.html` 
})
 const PlaceInComments = document.querySelector(".placeCommentsPost"); 
function ShowAltert(x ,){
     const div = document.createElement('h1')
     const text = document.createTextNode(`${x}`)
     div.classList = "alert"
     div.appendChild(text)
     document.getElementById('Alert').appendChild(div)
     setTimeout(()=>{

        div.style.display = "none"
     },5000)
}

/* ___________________________________________________________SidebarFunction________________________________________________________________________ */
 

/* _____________________________________________________________________________________________________________________________________ */
/* _________________________________________________________________________________________________________________________ _______*/
const Params = new URLSearchParams(window.location.search)
const ___Id = Params.get('id')
/* const Name  = Params.get('name') */
let user = w()

let userID = user.id
/* ___________________________________________________________________________________________________________________________ _____*/
function ScriteToSite(){
   const token = localStorage.getItem('token')
 if (___Id){ 
 GetUsersFindById(___Id)
    ////////////////// الحساب الدي ليس مسجل دخولو 
 }else if(token){
  GetpostUseranyUsers()  
 ////////////////////  الحساب الدي مسجل دخولو
 }else{
  window.location.href = 'index.html' 
 } 
}
ScriteToSite()

/* _________________________________________________________________________________________________________________________________ */
const logoutE = document.getElementById('Buttonlogout')
 if (logoutE) {
 document.getElementById('Buttonlogout').addEventListener("click" , function(){
   

        axios.post('http://localhost:3000/logout' , {

           Headers :{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
           } 
      }).then((respone) =>{

        
           localStorage.removeItem('token')
           ShowAltert('تم التسجيل الخروج بنجاح')
          
            window.location = `index.html`
            
         
           
      })
     })   
    }
/* _________________________________________________________________________________________________________________________________ */
 function Profile(){
const token = localStorage.getItem("token");
const DACHBORDE = document.getElementById('Dachbord')
if (!DACHBORDE)  return 
if (token){
  axios.get("http://localhost:3000/profile", {
  headers: {
    authorization: `Bearer ${token}`
  }
}).then(res => {
  console.log(res);
  const user = res.data.user;
    DACHBORDE.innerHTML = ""
    const result = `
         <b class="username"  onclick ="ProfileUser(${user.id})" >${user.name}</b>
        <img id="image" src=${user.avatar} alt="" style="width: 35px; height: 35PX; border-radius: 50%;">
    `
      document.querySelector('.header').innerHTML = ""
    let profaile2 = `
            <img src="${user.avatar}" alt="" style="width: 100%; height: 100%; border-radius: 7px;">
                    <div class="oneheader">
                       <div class="pro" style=" width: 50% ;" >
                           <img src="${user.avatar}" alt="">
                            <h1 class="username">${user.name}</h1>
                       </div> 
                    
                </div> 
               
          `
          document.querySelector('.header').innerHTML += profaile2
      DACHBORDE.innerHTML = result
});
}
}  
Profile() 
function CreatePostONS(){
const e = document.querySelector('.AksourPosts')
}
function TokenCheking(){
   const Token = localStorage.getItem('token')
   if (!Token) {
       window.location.href = "index.html"
       localStorage.removeItem('token')
     }
}
 TokenCheking()


 /* 8888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888*/
async  function GetUsersFindById(___Id){ ////h The Acount is no login //////////////////////////////////////////////
  const Res = await axios.get(`http://localhost:3000/user/${___Id}/posts`)
  return Res.data
/* 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */
}
const ImageansFriends = document.querySelectorAll('.Friends1')
const sidebar = document.querySelector('.Sidebar');
const allPosts = document.querySelector('.Parent');
const allImages = document.querySelector('.AllImages');
const AROUNDBOX = document.querySelector('.Around1')
const About = document.getElementById('About')
const AROUNDBOX2 =document.querySelector(".AROUNDBOX")
const ContanLe = document.querySelector('.ContanLe') 
const BoxFrindes = document.querySelector('.Frindes')


if (ImageansFriends.length > 3) {
  ImageansFriends[3].classList.add('active');
}
if(sidebar){

    sidebar.addEventListener('click', (e) => {
        const clicked = e.target.closest('.Friends1');
      /*    const H4 = e.target.closest("h4")
        if (H4) {
           if (H4.innerHTML === "حول") {
              H4.style.color ="rgb(48, 70, 92)
             
           }
        }  */
        if(!clicked) return;
        // إزالة الكلاسactive من كل العناصر
        document.querySelectorAll('.Friends1').forEach(x => x.classList.remove('active'));
        clicked.classList.add('active');
        if(clicked.id === "About"){
        AROUNDBOX2.style.display = "block" 
        allPosts.style.display = "none"; 
        BoxFrindes.style.display = "none" 
        AROUNDBOX.style.display = "block";
        } else if(clicked.id === "Friend"){
        BoxFrindes.style.display = "block"
        allPosts.style.display = "none";
        AROUNDBOX2.style.display = "none"
        AROUNDBOX.style.display = "none" 
        } else if (clicked.id === "manshorat") {
        allPosts.style.display = "block";
        BoxFrindes.style.display ="none"
        AROUNDBOX2.style.display  = "none"
        }
      
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* document.querySelector('.Createposte').addEventListener('click' , function() {

 
  const PostId = document.getElementById('inputpostId').value  

  const TextBody = document.getElementById('Textbody').value;
  const ImagePost = document.getElementById('imageID').files[0];
  const Token = localStorage.getItem('token');
  let headers =  {
             Authorization: `Bearer ${Token}`
      }
  const formdata = new FormData();
  formdata.append('text', TextBody);
  formdata.append('image', ImagePost);
   if (TextBody.length == 0 ) {

      ShowAltert('يجب املاء الحقل ')
      return false 
      
    }else if(!ImagePost){
       ShowAltert("يجب تحديد الصورة")
      return false
    }else{
        
        ShowAltert("يجب تحديد الصورة")
      
    }
   if (!PostId) {
         axios.post('http://localhost:3000/posts', formdata, {headers}, {
           
       }).then((res) => {
    
    
    if (res) {
      console.log(res.data.post);
      document.querySelector('.Post').style.display ="none"
     }

     }).catch(err => {
    console.error(err);
    });
  
    }else if(PostId){

          axios.put(`http://localhost:3000/posts/${PostId}` , formdata , {headers} )
            .then((res)=>{

                   console.log(res);
                   
                
            }).catch((e)=>{
              console.log(e);
              
            })
    }

 
}) */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  function ProfileUser(id){
 axios.get(`http://localhost:3000/user/${id}/posts`)
   .then((response)=>{
         
           const UserPost = response.data.posts.reverse()
            window.location = `testProfile.html?userid=${id}`
           const Container =  document.querySelector('.Cont')
           Container.innerHTML = ""
           let posts = '';
           document.querySelector('.Cont').innerHTML = ""
           
            let ButtonDeletAndUpdate =""
            for(let result of UserPost){

                 if (result.id === '') {
                    ButtonDeletAndUpdate = `
                         <button id="delete" onclick="FuntionUpdate('${encodeURIComponent(JSON.stringify(result))}')">تحديث</button>
                        <button id="update" onclick="FunctionDelete('${encodeURIComponent(JSON.stringify(result))}')">مسح</button>
                     `
                 }else{

                  ButtonDeletAndUpdate =""
                 }
                const DivContiner = document.createElement('div')
                DivContiner.classList.add('content')
               DivContiner.innerHTML = `
               
               
              <div class="user-image"  style="margin-top:10px ;">
                 <b class="username">${result.username}</b>
                 <img  src="${result.userImage}" alt="">
                   <div class="deleteupdate">
                        ${ButtonDeletAndUpdate}
                </div>
                </div>
                    <img src="${result.image}" alt="">
                     <h3>${result.text}</h3>
                 </div>    
                  <div class="comments-container" id="comments-123">
              <button onclick="CreateComment(${result.id}, event)">إرسال</button>
              <input type="text" placeholder="    اكتب تعليق..." id="input-comment-${result.id}">

              </div>

                <button class="ShowComment">عرض التعليقات</button>
                       </div>
                     <div class="Hiddene">
                 <div id="commentsS-${result.id}" class="CommentsContainer"></div>
  
            </div>  
               `
               Container.appendChild(DivContiner)
                GrtComments(element.id)
                     document.querySelector('.header').innerHTML= ""
            let profaile2 = `
                 <div class="oneheader">
                <img id="ImageProfaileBig" src="${element.userImage}" alt="" style="width: 100%; height: 100%; ">
                     
                       <div class="pro" style=" width: 100% ; background-color:" >
                       <h1 class="username" style="display: inline ; color:black;">${element.username}</h1>
                           <img src="${element.userImage}" alt=""  border-radius: 50%;">
                            
                       </div> 
                    
                  </div>
          `
             document.querySelector('.header').innerHTML += profaile2 
            }
           
               
   })

}       */     
document.addEventListener('click' , (e)=>{
 const IconrSendCoumment = e.target.closest('.Send-Comments')
if (!IconrSendCoumment) return ;
e.preventDefault()
const PostId = IconrSendCoumment.dataset.id
SendMessage(PostId)
})
function SendMessage(id){
  const Token = localStorage.getItem('token')
  const ParentInputPlace = document.querySelector(`[data-id="${id}"]`).closest('.BoxComments')
  const ResultText = ParentInputPlace.querySelector('.ComentsInput').value

 
   axios.post(`http://localhost:3000/posts/${id}/comments`,
    {
      text: ResultText

    },
    {
     headers : {Authorization : `Bearer ${Token}`}
    }
   ).then((ResponeComents)=>{
  
   
   })
}
async function GetComments(id) {
  const Token = localStorage.getItem('token');
  const Response = await  axios.get(`http://localhost:3000/posts/${id}/comments`,{headers: { Authorization: `Bearer ${Token}`}})
  const res      = Response.data
  return ({
     PostId : id,
     comments : res

  })
}


//////////////////////////////////////////////////////////////////comment///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 document.addEventListener('click', (e) => {
  const famessage = e.target.closest('.fa-message');
  if (!famessage) return; // تجاهل أي ضغط غير الأيقونة
  const Content = famessage.closest('.ContanLe')
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
const Post = IconeUbdate.closest('.ContanLe')
if(!Post) return
const Fratch  = Post.querySelector('.fa-trash')
if (!Fratch) return
Fratch.classList.toggle('visibleIcone')
document.addEventListener("mousedown" ,function(e){
 if (!Fratch.contains(e.target)){
    Fratch.classList.remove('visibleIcone')
 }
})
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////الحماية عند تسجيل الخروج/////////////////////////////////////////////

  const re = document.getElementById('Logout')

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
 window.addEventListener('load', () => {
    // جلب token من sessionStorage
    const sessionToken = localStorage.getItem('token')

    // إذا لم يوجد → المستخدم دخل نافذة جديدة أو لم يسجل دخول
    if (!sessionToken) {
        window.location.replace('index.html') 
    }
})
/* window.addEventListener('load', () => {
    // جلب token من التخزين
    const token = localStorage.getItem('token')
    const sessionToken = sessionStorage.getItem('token')

    // إذا لم يوجد أي token → منع الوصول
    if (!token || !sessionToken) {
        window.location.replace('index.html') // يحول المستخدم مباشرة
    }

    // منع التخزين المؤقت للصفحة في المتصفح
    window.history.replaceState({}, document.title, window.location.href)
})
 */
///////////////////////////////////////////// CreatePost////////////////////////////////////////////////////////////

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


console.log(CreatePost1);

////////////////////////////////////////////////////////////////Update ///////////////////////////////////////////
async function UdpatePost(object){  
  Mood = "update"
  const Objct = JSON.parse(decodeURIComponent(object))

  
  /* const CreatePost1 = document.querySelector('.CreatePost1') */
  CreatePost1.classList.add('ClassVisibleContainer')
  document.querySelector('.TitleBox1 h2').innerHTML = "تعديل المنشور"
  document.querySelector('.TitleCreatePost h4').innerHTML = "اضافة الي تعديل"
  document.querySelector('.ButtonCreateNewPost button').innerHTML ="حفض"
  document.getElementById('TextArea1').value = Objct.text
  document.getElementById('ImageInput2').src = Objct.image
  
     ButtonCreatet__Post.addEventListener('click' , async ()=>{
      
    if (Mood == "update") {

    const Token = localStorage.getItem('token');
    const  headers =  {Authorization: `Bearer ${Token}`}
    const TextArea1 = document.getElementById('TextArea1').value.trim()
    const ImagePost = document.getElementById('ImageInput2').files[0];
    let formdata = new FormData();
    formdata.append('text', TextArea1);
    formdata.append('image', ImagePost);
    if (TextArea1.length == 0 &&  !ImagePost){
      ShowAltert("الرجاء كتابة نص أو اختيار صورة قبل النشر");
        return;
    }

       const urlxdown = `${Url}posts/${Objct._id}`
       await axios.put(urlxdown , formdata, {headers:headers}) 
       CreatePost1.classList.remove('ClassVisibleContainer')
       const containerAll = document.querySelector('.Cont');
       containerAll.innerHTML = ""; // تنظيف فقط قبل التحديث
       
        // ← تحديث حقيقي للبوستات من السيرفر
       
    } 
 })
 
} 


/////////////////////////////////////////////////////////////////Find Update ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////Delete///////////////////////////////////////////////////////
function FunctionDelete(id){
  const ContainerComnfirm = document.querySelector('.ContainerComnfirm')
  const ButtonDelete = document.getElementById('ButtonDelete')
  const Token = localStorage.getItem('token')
  /* const  */
  ContainerComnfirm.classList.add('ShowConfirm')
  ButtonDelete.addEventListener('click'  , ()=>{
  axios.delete(`http://localhost:3000/posts/${id}`,{
     
     headers: {  Authorization: `Bearer ${Token}`} ,

     })
      .then((respone)=>{
         ContainerComnfirm.classList.remove('ShowConfirm')
         this.classList.add('CanelConfirm')
         ShowAltert("تم حدف البوست")
      }).catch((error)=>{
 
          ShowAltert(error)
  
      })

     })

  } 

/* ___________________________________________________________________________________________________________________________________________ */
document.querySelector('.fa-building-user').addEventListener('click' ,GetpostUseranyUsers)

async function  GetpostUseranyUsers(){ /////The  acount is login/////////////////////////////////////////////////////////
const token = localStorage.getItem('token')
const Respons = await axios.get(`http://localhost:3000/My_User_Post`,{headers:{Authorization:`Bearer ${token}`}})
return Respons.data
}
const ChengeFhoto = document.getElementById('ChengeFhoto')
if (ChengeFhoto) {
  ChengeFhoto.addEventListener('click' ,()=>{
   window.location.href = "UpdateAcount.html"
})
}
/* _________________________________________________________________________________________________________________________________________*/


   /* ____________________________________________________________________________________________________________________________________________ */

    /* ___________________________________________________________________________________________________________________________________________ */
  async function inti(){
         const Container = document.querySelector('.Parent');
         if (Container) {
          Container.innerHTML = ""
         }
         
         if(___Id){
         const OthersPosts =  await  GetUsersFindById(___Id) 
         RenderOthersPost(OthersPosts)
           
          }else{
          const posts       =  await GetpostUseranyUsers() 
          const userdata    =  await GetMyDataUser() /////معلومات   الحساب الدي مسجل دخولو الاسم البريد الاكتروني 
          RenderSideBarUserPost( posts, userdata) 
          
          
          }
}        
 inti().catch((e)=>{
   console.log(e.message);                        
   
 })
/* _____________________________________________________________________________________________________________________________________________ */

   /* /*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ == Resnder To RenderSideBarUserPost==== $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

  async  function RenderSideBarUserPost(post , userdata){
  try{
  
  const SideBar = document.querySelector('.Sidebar')
  const Container = document.querySelector('.Parent');
  const CoverImage = userdata.coverImage
  const AvatarPoste = userdata.avatar
  console.log(AvatarPoste);
  const varfyAvatar = AvatarPoste === "default.png" || AvatarPoste === "" ;
  const resultAvatar = varfyAvatar ? "http://localhost:3000/images/defulte.png" : `http://localhost:3000/uploads/${userdata.avatar}` ;
  if (Container) {
     Container.innerHTML = ""
   }
       for(const element of post){
           let ButtonDeletAndUpdate = "";
      // ✅ تحقق أولاً قبل استخدام user.id
           
           ButtonDeletAndUpdate = `
          <li onclick="UdpatePost('${encodeURIComponent(JSON.stringify(element))}')">
            <i class="fa-solid fa-pen"></i> تعديل المنشور
          </li>
          <li onclick="FunctionDelete(${element._id})">
            <i class="fa-regular fa-trash-can"></i> حذف المنشور
          </li>
        `
      
      const CreateDivElement = document.createElement('div')
      CreateDivElement.classList.add('ContanLe')
      CreateDivElement.innerHTML = `
        <div class="UsernameAndImageImage">
          <i class="fa-solid fa-ellipsis"></i>
          <div class="UsernameAndImage2">
            <div class="UsernameAndImagE">
              <h4 onclick="ProfileClicked(${element.userId._id})">${element.userId.name}</h4>
              <h6>${element.createdAt}</h6>
            </div>
            <div class="ImageUserM">
              <img src="${resultAvatar}">
            </div>
          </div>
        </div>
        <div class="Paraghraf">
          <p>${element.text}</p>
        </div>
        <div class="ImagePost">
          <img src="http://localhost:3000/uploads/${element.image}"> 
        </div>
        <div class="CommentAndLikesAndshir">
          <div class="sharing"><h3>مشاركة<span>12</span></h3></div>
          <div class="CommentsandLikes">
            <h3>تعليق<span>182</span></h3>
            <h3>اعجاب<span>1200</span></h3>
          </div>
        </div>
        <hr>
        <div class="IconeLikesComentSharing">
          <i class="fa-solid fa-share-nodes">مشاركة</i>
          <i class="fa-regular fa-message Coment">تعليق</i>
          <i class="fa-regular fa-heart">اعجاب</i>
        </div>
        <div class="fa-trash">
          <ul>
            ${ButtonDeletAndUpdate}
            
            <li><i class="fa-solid fa-eye-slash"></i>اخفاء المنشور</li>
            <li><i class="fa-solid fa-flag"></i>ابلاغ</li>
          </ul>
        </div>
        <div class="BoxComments">
          <div class="InputINCoumments">
            <input type="text" class="ComentsInput" name="text">
            <img src="houssin.jpg">
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
          <div class="placeCommentsPost-${element._id}"></div>
        </div>
      `

      Container.appendChild(CreateDivElement)
     const result = await GetComments(element._id)
     ResnderComments(result)  
     }
      const AvatarStatus = userdata.avatar
      const InvaliedAvatar = !AvatarStatus || AvatarStatus === "" || AvatarStatus ===  "default.png" ;
      const ResultStatusAvatar = InvaliedAvatar ? "http://localhost:3000/images/defulte.png" : `http://localhost:3000/uploads/${userdata.avatar}` ;
      document.getElementById('ImageHeader').src = InvaliedAvatar ? "http://localhost:3000/images/defulte.png" : `http://localhost:3000/uploads/${userdata.avatar}`
       if (!sidebar) return ;
       sidebar.innerHTML = `
        <div class="ImageProfile">
          <img id="CoverPhoto" src="http://localhost:3000/uploads/${CoverImage}" alt="">
        </div>
        <div class="ImageProfile2">
          <div class="UsernameAndPhoto">
            <img src="${ResultStatusAvatar}"alt="">
          </div>
        </div>
        <div class="Username">
            <h1>${userdata.name}</h1>

          <div class="information">
            <span>|مطور برمجيات</span>
            <span>|💻مهتم بالتقنية والابتكار</span>
            <span>📸أحب السفر والتصوير</span>
          </div>
          <div class="Place">
            <span>انضم في يناير 2020<i class="fas fa-shopping-bag"></i></span>
            <span><a href="">www.Aksour.com</a><i class="fas fa-link"></i></span>
            <span>الرياض، المملكة العربية السعودية<i class="fas fa-map-marker-alt"></i></span>
          </div>
          <div class="follow">
            <div class="Boxing1"><span>127</span><p>منشور</p></div>
            <div class="Boxing1"><span>2,543</span><p>متابع</p></div>
            <div class="Boxing1"><span>389</span><p>يتابع</p></div>
          </div>
        </div>
        <div class="ImageansFriends">
          <div class="Houcine">
            <div class="Friends1" id="About"><h4>حول</h4><i class="fas fa-circle-info"></i></div>
            <div class="Friends1" id="Friend"><h4>الاصدقاء</h4><i class="fas fa-user-friends"></i></div>
            <div class="Friends1" id="Image"><h4>الصور</h4><i class="fas fa-image"></i></div>
            <div class="Friends1" id="manshorat"><h4>المنشورات</h4><i class="fas fa-image"></i></div>
          </div>
        </div>
      `
  }catch(e){

    console.log(e)
  }
 }
/* /*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ==Resnder To OthersPost==== $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
 
 async  function RenderOthersPost(OthersPosts){
  try{
   
    const RespOthersPosts    = OthersPosts.IU
    const RespNameandAvatar  = OthersPosts.user
    const CoverImage         = OthersPosts.user.coverImage
    const SideBar            = document.querySelector('.Sidebar')
    const Container          = document.querySelector('.Parent');
   /*  const ButtonAddCoverImeg = document.getElementById('DivButtonChengeFhotoTheProfile')
    ButtonAddCoverImeg.style.display ="none" */
    Container.innerHTML=""
    for(const element of RespOthersPosts) { 

           let ButtonDeletAndUpdate = "";
      //  ✅ تحقق أولاً قبل استخدام user.id
           if (user && element.userId === user.id){
           ButtonDeletAndUpdate = `

          <li onclick="UdpatePost('${encodeURIComponent(JSON.stringify(element))}')">
            <i class="fa-solid fa-pen"></i> تعديل المنشور
          </li>
          <li onclick="FunctionDelete(${element._id})">
            <i class="fa-regular fa-trash-can"></i> حذف المنشور
          </li>
        `
      }
      const CreateDivElement = document.createElement('div')
      CreateDivElement.classList.add('ContanLe')
      CreateDivElement.innerHTML = `
        <div class="UsernameAndImageImage">
          <i class="fa-solid fa-ellipsis"></i>
          <div class="UsernameAndImage2">
            <div class="UsernameAndImagE">
              <h4 onclick="ProfileClicked(${element.userId._id})">${element.userId.name}</h4>
              <h6>${element.createdAt}</h6>
            </div>
            <div class="ImageUserM">
              <img src="http://localhost:3000/uploads/${element.userId.avatar}">
            </div>
          </div>
        </div>
        <div class="Paraghraf">
          <p>${element.text}</p>
        </div>
        <div class="ImagePost">
          <img src="http://localhost:3000/uploads/${element.image}"> 
        </div>
        <div class="CommentAndLikesAndshir">
          <div class="sharing"><h3>مشاركة<span>12</span></h3></div>
          <div class="CommentsandLikes">
            <h3>تعليق<span>182</span></h3>
            <h3>اعجاب<span>1200</span></h3>
          </div>
        </div>
        <hr>
        <div class="IconeLikesComentSharing">
          <i class="fa-solid fa-share-nodes">مشاركة</i>
          <i class="fa-regular fa-message Coment">تعليق</i>
          <i class="fa-regular fa-heart">اعجاب</i>
        </div>
        <div class="fa-trash">
          <ul>
            ${ButtonDeletAndUpdate}
            <li><i class="fa-solid fa-eye-slash"></i>اخفاء المنشور</li>
            <li><i class="fa-solid fa-flag"></i>ابلاغ</li>
          </ul>
        </div>
        <div class="BoxComments">
          <div class="InputINCoumments">
            <input type="text" class="ComentsInput" name="text">
            <img src="houssin.jpg">
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
          <div class="placeCommentsPost-${element._id}"></div>
        </div>
      `
     Container.appendChild(CreateDivElement)  
    const result = await GetComments(element._id)
     ResnderComments(result)  
    }
       sidebar.innerHTML = `
        <div class="ImageProfile">
          <img src="http://localhost:3000/uploads/${CoverImage}" alt="">
        </div>
        <div class="ImageProfile2">
          <div class="UsernameAndPhoto">
            <img id="CoverPhoto" src="http://localhost:3000/uploads/${RespNameandAvatar.avatar}" alt="">
          </div>
        </div>
        <div class="Username">

            <h1>${RespNameandAvatar.name}</h1>

          <div class="information">
            <span>|مطور برمجيات</span>
            <span>|💻مهتم بالتقنية والابتكار</span>
            <span>📸أحب السفر والتصوير</span>
          </div>
          <div class="Place">
            <span>انضم في يناير 2020<i class="fas fa-shopping-bag"></i></span>
            <span><a href="">www.Aksour.com</a><i class="fas fa-link"></i></span>
            <span>الرياض، المملكة العربية السعودية<i class="fas fa-map-marker-alt"></i></span>
          </div>
          <div class="follow">
            <div class="Boxing1"><span>127</span><p>منشور</p></div>
            <div class="Boxing1"><span>2,543</span><p>متابع</p></div>
            <div class="Boxing1"><span>389</span><p>يتابع</p></div>
          </div>
        </div>
        <div class="ImageansFriends">
          <div class="Houcine">
            <div class="Friends1" id="About"><h4>حول</h4><i class="fas fa-circle-info"></i></div>
            <div class="Friends1" id="Friend"><h4>الاصدقاء</h4><i class="fas fa-user-friends"></i></div>
            <div class="Friends1" id="Image"><h4>الصور</h4><i class="fas fa-image"></i></div>
            <div class="Friends1" id="manshorat"><h4>المنشورات</h4><i class="fas fa-image"></i></div>
          </div>
        </div>
      `
  }catch(e){
  
  }
    
      
 }
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ==Resnder To Comments==== $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
 async function ResnderComments(Comment){
      const Comments = Comment.comments
     const Postid  = Comment.PostId 
     const PlaceInComments = document.querySelector(`.placeCommentsPost-${Postid}`); /* 11111111111111111111111111 */
     if (!PlaceInComments) {
      console.warn("لا يوجد مكان لتعليقات البوست:", id);
      return;
     }
   
     PlaceInComments.innerHTML = "";
     if (Comments.length === 0) {
      PlaceInComments.innerHTML = `<h4 style="color:gray">لا يوجد تعليقات 😔</h4>`;
      return;
     }
     Comments.forEach(commentsx =>{
      const div = document.createElement('div');
      div.classList.add('comment');
      div.innerHTML = `
      <div class="titleimagenameANDUsernameAndComments">
      <div class="titleimagename">
      <img src="http://localhost:3000/uploads/${commentsx.userId.avatar}">
    </div>
    <div class="UsernameAndComments">
    <h3 onclick="ClikedPostComents('${commentsx.userId}')">${commentsx.userId.name}</h3>
    ${commentsx.text ? `<p>${commentsx.text}</p>` : ""}
          
    </div>
  </div>

  <div class="PlaceAksourLikeAndSeconde">
    <div class="Secondebox">
      <span>منذ 30 دقيقة</span>
      <span>رد</span>
      <span>إعجاب</span>
    </div>
  </div>
  `;
      PlaceInComments.appendChild(div);
    });
}
  function w(){
                     
            let user = localStorage.getItem('username')
            let name = null
            if (user) {
              name =  JSON.parse(user)
          
            }
            return name
          }
w()
window.GetMyDataUser =  async function (){
 
 const Tokene = localStorage.getItem('token')
 const userId = w()
 const Response = await fetch(`http://localhost:3000/GetUser/${userId._id}`,{headers :{ Authorization :`Bearer ${Tokene}`}})
 const data = await Response.json()
 return data;
 
 }
const AddCoverImage = document.getElementById('AddCoverImage')
const InputAddcoverImage = document.getElementById('InputAddcoverImage')
AddCoverImage.addEventListener('click' , function(){
InputAddcoverImage.click()
})
InputAddcoverImage.addEventListener('change' ,function(){
  AddCoverImageSend()
})
const loading = document.getElementById('loadingy');
async function AddCoverImageSend(){
try{                      
  const Coverimage = document.getElementById('InputAddcoverImage').files[0]
  if (!Coverimage) {
    
                   
  }
const CoverPhoto = document.getElementById('CoverPhoto')
const TokenaddcoverImage = localStorage.getItem('token')
const Headers =  {Authorization :`Bearer ${TokenaddcoverImage}`}
const Form_Data  = new FormData()
Form_Data.append('coverImage' , Coverimage)
const res  = await  axios.post('http://localhost:3000/AddCover-image' , Form_Data  ,{headers:Headers})
const CoverImage = res.data.coverImage
CoverPhoto.src =`http://localhost:3000/uploads/${CoverImage}?t=${Date.now()}`
 await AlertMessage("الغلاف تم تغيير الصورة ")
return res.data
}catch(error) {
console.log(error);
} 

}
