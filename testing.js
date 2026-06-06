

  
const ImageHeaderClassAll= document.querySelectorAll('.UlDfd li')
const Usernameandimage   = document.querySelectorAll('.usernameandimage i')
const ImageHeader        = document.getElementById('ImageHeader')
const ImageHeaderClass   = document.querySelector('.ImageHeaderClass')
const InputLocation      = document.querySelector('.InputLocation')
const LocationValue2     = document.querySelector('.LocationValue2')
const container          = document.querySelector('.ConDiv_w')

ImageHeaderClassAll.forEach((e , index) =>{
 e.addEventListener('mouseenter' ,()=>{
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

