
   

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
let   Index              = "false"
/* ShowAltert("rereg") */
/* _______________________________________________________________________________________________________ */
/*  */
/* _________________________________________________________________________________________________________ */
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


function ChengeFhotoInProfile(e){
e?.preventDefault();
const ValueFile = document.getElementById('FileInUploadFhoto').files[0]
const Formdate = new FormData()
Formdate.append("avatar" , ValueFile)
const token = localStorage.getItem("token");
axios.put('http://localhost:3000/ChengeImage' ,Formdate,{
    headers: {
      Authorization : `Bearer ${token}`
}
}).then((r)=>{
   
})
}

document.getElementById('FileInUploadFhoto').
addEventListener('change' , ChengeFhotoInProfile)
 const TokenProfile = localStorage.getItem('token')
 const Profilex = async ()=>{
axios.get("http://localhost:3000/profile", {
  headers: {
    authorization: `Bearer ${TokenProfile}`
  }
}).then(res => {
  console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",res);
  ImageHeader.src  =  `http://localhost:3000/uploads/${res.data.avatar}` 
  ImageProfile.src =  `http://localhost:3000/uploads/${res.data.avatar}`

});
}
Profilex()

  
/*   FileInUploadFhoto.addEventListener('change' , (e)=>{
const file  = e.target.files[0]
const ulr   = URL.createObjectURL(file)
ImageHeader.src  = ulr
ImageProfile.src = ulr
})
  */