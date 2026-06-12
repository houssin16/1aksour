
const ImageHeaderClassAll= document.querySelectorAll('.UlDfd li')
const Usernameandimage   = document.querySelectorAll('.usernameandimage i')
const ImageHeader        = document.getElementById('ImageHeader')
const ImageHeaderClass   = document.querySelector('.ImageHeaderClass')
const InputLocation      = document.querySelector('.InputLocation')
const LocationValue2     = document.querySelector('.LocationValue2')
const container          = document.querySelector('.ConDiv_w')
const PlaceImage         = document.querySelector('.PlaceImage')
const UploadeFile        = document.getElementById('UploadeFile')
const FileInUploadFhoto  = document.getElementById('FileInUploadFhoto')
const ImageProfile       = document.getElementById('ImageProfile')
const ButtonSevgred1     = document.getElementById('ButtonSevgred1')
/* ________________________________________________________________________________________________ */

  
  ImageHeaderClassAll.forEach((e , index) =>{
 e.addEventListener('mouseover' ,()=>{
    if (e.length === e[index]) {
        e.classList.add('LogOutandIconecez')
    }
 })
   e.addEventListener('mouseleave' ,()=>{
    if (e.length === e[index]) {
        e.classList.remove('LogOutandIconecez')
    }
 })  
 e.addEventListener('click' , ()=>{
  event.stopPropagation();
     if (e.classList.contains('ProfileIcone')){
         window.location = `testProfile.html`
        
     }else if(e.classList.contains('Notifction')){
        window.location = `Notification.html`
      
     }else if(e.classList.contains('UpdateProfile')){
      window.location = `UpdateAcount.html`
      
     }else if(e.classList.contains('LogOutandIcone')){
       window.location = `index.html`
     }
 })
 
}) 


ImageHeader.addEventListener('click' , (e)=>{
e.stopPropagation()
if(!ImageHeaderClass) return 
ImageHeaderClass.classList.toggle('ImageHeaderVisible')
window.scroll({top:0, behavior:"smooth"}) 
const ImageHeaderTarget = document.getElementById('ImageHeader')
}) 
    
 document.addEventListener('click' ,(e)=>{
if(!ImageHeaderClass) return
    if (!ImageHeaderClass.contains(e.target)){
      ImageHeaderClass.classList.remove('ImageHeaderVisible')  
    }
  })  
 

Usernameandimage.forEach((element,index)=> { 
    element.addEventListener('click' , (e)=>{
    
    if (element.classList.contains('fa-bell')) {
         window.location = `Notification.html`
        
    }else if(element.classList.contains('fa-message')){
    
    }else if(element.classList.contains('fa-user-group')){
     console.log("2");
    }else if(element.classList.contains('fa-building-user')){
     window.location = `testProfile.html`
    }else if (element.classList.contains('fa-house')) {
     window.location = `testDachbored.html`
    }else if(element.classList.contains('fa-right-from-bracket')){
         
    }
 
    })
}); 
 PlaceImage.addEventListener('mouseenter' , ()=>{
 UploadeFile.classList.add('classVisibilety') 
})
PlaceImage.addEventListener('mouseleave' , ()=>{
UploadeFile.classList.remove('classVisibilety')
}) 
const token = localStorage.getItem("token");
 
/* _______________________________________________________________________________________________________________________
 */

async function ChengeFhotoInProfile() {
  console.log("START UPLOAD");

  const ValueFile = FileInUploadFhoto.files[0];
  const token = localStorage.getItem("token");

  if (!token) {
    AlertMessage("يجب تسجيل الدخول أولاً ❌");
    return;
  }

  if (!ValueFile) {
    AlertMessage("اختر صورة أولاً ❌");
    return;
  }

  const Formdate = new FormData();
  Formdate.append("avatar", ValueFile);

  const response = await axios.put(
    "http://localhost:3000/ChengeImage",
    Formdate,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  // ← بعد الرفع حدث الصورة مباشرة
  const newAvatar = response.data.avatar;
  const newSrc = `http://localhost:3000/uploads/${newAvatar}?t=${Date.now()}`;
  ImageProfile.src = newSrc;
  ImageHeader.src = newSrc;

  return response;
}
const alertBox = document.querySelector(".AlertMessage");



/* ____________________________________________________________________________________________________________________________________*/
async function Profilex() {
  const TokenProfile = localStorage.getItem('token');

  // ← أضف هذا التحقق
  if (!TokenProfile) {
    console.log("لا يوجد توكن، يرجى تسجيل الدخول");
    return;
  }

  axios.get("http://localhost:3000/profile", {
    headers: {
      authorization: `Bearer ${TokenProfile}`
    }
  }).then(res => {
    console.log(res);
    ImageHeader.src = `http://localhost:3000/uploads/${res.data.avatar}`
    ImageProfile.src = `http://localhost:3000/uploads/${res.data.avatar}`
  });
}
  Profilex() 

/* ____________________________________________________________________________________________________________________________________*/


 function AlertMessage(ms) {
    const box = document.querySelector('.AlertMessage');
    const div = document.createElement('div');
    div.textContent = ms;
    div.className = "AlertMessagee";
    box.appendChild(div)
    requestAnimationFrame(()=>{
      div.classList.add('show')
    })
    setTimeout(() => {
        div.classList.add('hide') 
    }, 2000);
} 
 
  ButtonSevgred1.addEventListener('click', async (e) => {
  e.preventDefault();
  const FileInUploadFhoto = document.getElementById('FileInUploadFhoto');
  if (!FileInUploadFhoto.files || FileInUploadFhoto.files.length === 0 ) {
    AlertMessage("لا توجد صورة!")
    return
  }else{
    AlertMessage("تم حفض التغيرات بنجاح")
  }
  try {
    await  ChengeFhotoInProfile()
    FileInUploadFhoto.value = ""
    window.scrollX = "0"
  } catch (err) {
    console.log(err);
    AlertMessage("حدث خطأ ");
  }
}); 
/* ____________________________ */

