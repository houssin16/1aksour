

 function ShowAltert(x ,){
   
     const div = document.createElement('h1')
     const text = document.createTextNode(`${x}`)
     div.classList = "alert"
     div.appendChild(text)
     document.getElementById('Alert').appendChild(div)
     setTimeout(()=>{

        div.style.display = "none"
     },3000)

   
} 

 
/* window.addEventListener("DOMContentLoaded", () => {
  //SetpUI();
}); */


///////////*/////////////*///////////////////////////************************************************************************************ */




function CreatePost(){
 document.querySelector('.Post').style.display = "block"
 window.scrollTo({top:0 , behavior: "smooth"})
}
;
/* 
function CreatePostInPage(){
 
window.location.href = `regester.html`
}*/


/////////////////*//////////////*//////////////*///////////////////////////////////*////////////////////////***************************** */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
/* Profile() */
function Profile(){

const token = localStorage.getItem("token");

if (token) {

  axios.get("https://oneaksour-1.onrender.com/profile", {
  headers: {
    authorization: `Bearer ${token}`
  }
}).then(res => {
  const user = res.data.user;
 
    const Dachboredw = document.getElementById('Dachbord')
     if (Dachboredw) {
     Dachboredw.innerHTML = ""
    } 
    
    const result = `
         <div  id="DachbordeNew">
         <b id="buttone" onclick = "ProfileUser(${user._id})" id="username" style=" text-transform: capitalize; color: rgba(255, 255, 255, 1);cursor: pointer;">${user.name}</b>
        <img id="image" src=${user.avatar} alt="" style="width: 35px; height: 35PX; border-radius: 50%;">
            </div>           
    `
    document.querySelector('.header').innerHTML =""
          let profaile2 = `
            <img src="${user.avatar}" alt="" style=" width: 100%; height: 100%; border-radius: 7px;">
                    <div class="oneheader">
                       <div class="pro" style=" width: 50% ;" >
                           <img src="${user.avatar}" alt="">
                            <h1 class="username">${user.name}</h1>
                       </div> 
                    
                </div> 
          `  
          document.querySelector('.header').innerHTML += profaile2
                      
    document.getElementById('Dachbord').innerHTML = result
    
    const button = document.getElementById('buttone')
    if (user.id == true) {
       setTimeout(()=>{
         button.disabled = true  
       },1000)
    }
    
});
}


} 
////////////////////////////////////////////////////////////////////////////////////////////*//////////*/*/*/******************************************************************************************* */
   
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-///////////////////////////////

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 const hedarere = document.getElementById('aksour')
 if (hedarere) {
  hedarere.classList.add('m')
 }
 
 function ProfileUser(id){

 axios.get(`https://oneaksour-1.onrender.com/user/${id}/posts`)
   .then((response)=>{
           const UserPost = response.data.posts
           console.log(response);
           
           let posts = '';
            for(let result of UserPost){
      
               posts = `
               
                     <div class="content">
              <div class="user-image"  style="margin-top:10px ;">
                 <b>${result.username}</b>
                 <img src="${result.userImage}" alt="" >
                </div>
                <div>
                    <img src="${result.image}" alt="">
                     <h3>${result.text}</h3>
                 </div>    

               `
                         document.querySelector('.Cont').innerHTML+= posts
                      document.querySelector('.header').innerHTML = ""
                       
                        let profaile2 = `
                      <img src="${result.userImage}" alt="" style="width: 100%; height: 100%; ">
                        <div class="oneheader">
                         <div class="pro" style=" width: 50% ;" >
                           <img src="${result.userImage}" alt="" style="width: 100px; height: 100px; border-radius: 50%;">
                            <h1 style="display: inline;">${result.username}</h1>
                       </div> 
                    
                    </div>
                  `
                    document.querySelector('.header').innerHTML += profaile2
                
             }         
         window.location = `Profail.html?userid=${id}`  
     }) 

} 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /* function FuntionUpdate(object){
  
   const obJ = JSON.parse(decodeURIComponent(object))
   document.getElementById('input').value = obJ.id
   document.getElementById('Textbody').value = obJ.text
    const InnerPost = document.querySelector('.Post')
  InnerPost.style.display = "block"
  const Button = document.getElementById('buttonCretenewpost')
  Button.textContent = "تحديث"
  const Title = document.getElementById('title')
  Title.textContent = "Update Post"
  const buttonUpdate =  document.querySelector('.update')
  const preview = document.getElementById('preview');

 if (obJ.image) {
   preview.src = obJ.image; 
  preview.style.display = "block";
 }else{
  preview.style.display = "none";
 }
  } */
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////

const ButtonExit = document.getElementById('ButtonExit')
const PostI = document.querySelector('.Post')
if (ButtonExit) 
ButtonExit.addEventListener('click'  ,   ()=>{
 PostI.style.display = "none"
})
 function PostClick(id){
axios.get(`https://oneaksour-1.onrender.com/user/${id}/posts`)
.then((response)=>{
           const UserPost = response.data.posts
     
          
           let posts = '';
            for(let result of UserPost){
      
               posts = `
               
                     <div class="content">
              <div class="user-image"  style="margin-top:10px ;">
                 <b>${result.username}</b>
                 <img src="${result.userImage}" alt="" >
                </div>
                <div>
                    <img src="${result.image}" alt="">
                     <h3>${result.text}</h3>
                 </div>    

               `
                         document.querySelector('.Cont').innerHTML+= posts
                      document.querySelector('.header').innerHTML = ""
                       
                        let profaile2 = `
                      <img src="${result.userImage}" alt="" style="width: 100%; height: 100%; ">
                        <div class="oneheader">
                         <div class="pro" style=" width: 50% ;" >
                           <img src="${result.userImage}" alt="" style="width: 100px; height: 100px; border-radius: 50%;">
                            <h1 style="display: inline;">${result.username}</h1>
                       </div> 
                    
                    </div>
                  `
                    document.querySelector('.header').innerHTML += profaile2
             }              
        window.location = `Profail.html?userid=${id}` 
   }) 
   
  }
