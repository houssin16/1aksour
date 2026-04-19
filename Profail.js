



document.querySelector('.fa-building-user').addEventListener('click' , function(){
window.location.href =`testProfile.html` 

})
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
let user = w()
let userID = user.id
document.addEventListener('DOMContentLoaded'  , () =>{
 const Urlparams = new URLSearchParams(window.location.search)
 const id = Urlparams.get('userid');
 const token = localStorage.getItem('token')
 if (id){
    GetOnepost(id) 
    console.log("nnn");
    ////////////////// الحساب الدي ليس مسجل دخولو 
 }else if(token){
 getuserpostId()
  console.log("eeeeee");
 ////////////////////  الحساب الدي مسجل دخولو
 }else{
  window.location = 'index.html'
 } 
  
})

const logoutE = document.getElementById('Buttonlogout')
 if (logoutE) {
 document.getElementById('Buttonlogout').addEventListener("click" , function(){
   

        axios.post('http://localhost:3000/logout' , {

           Headers :{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
           } 
      }).then((respone) =>{

           console.log(respone);
           localStorage.removeItem('token')
           ShowAltert('تم التسجيل الخروج بنجاح')
          
            window.location = `index.html`
            
         
           
      })
     })   
    }
/*  function Profile(){

const token = localStorage.getItem("token");

if (token) {

  axios.get("http://localhost:3000/profile", {
  headers: {
    authorization: `Bearer ${token}`
  }
}).then(res => {
  const user = res.data.user;

  
    document.getElementById('Dachbord').innerHTML = ""
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

      document.getElementById('Dachbord').innerHTML = result

});
}

}   */
/* Profile() */

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

/* getuserpostId() */
function getuserpostId(){////////////////////  الحساب الدي مسجل دخولو //////////////////////////////////
 
  const Token = localStorage.getItem('token')
axios.get("http://localhost:3000/posts/", {
  headers: {
    Authorization: `Bearer ${Token}`
  }
})
    .then((response) =>{

    
     
       
      const Data = response.data.reverse()
       const Header =  document.querySelector('.header')
    
       
      const Container = document.querySelector('.Parent');
       Container.innerHTML = "";
      
        for (let i = 0; i < Data.length; i++) { 
          const element = Data[i];
          const DivHtml = document.createElement('div')
          DivHtml.classList.add('ContanLe')

          const Userid = w()
          let ButtonDeleteANDupdate = ""
          if (Userid.id === element.id) {
           console.log("ezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
           
             ButtonDeleteANDupdate = `
          <li onclick="UdpatePost('${encodeURIComponent(JSON.stringify(element))}')"><i class="fa-solid fa-pen"></i>  تعديل المنشور</li>
          <li onclick = "FunctionDelete(${element.id})"> <i class="fa-regular fa-trash-can"></i>حذف المنشور</li>
         `
          }else{
           ButtonDeleteANDupdate = ""

          }
           DivHtml.innerHTML =`
            
          
              
               <div class="UsernameAndImageImage" >
                <i class="fa-solid fa-ellipsis"></i>
                <div class="UsernameAndImage2">
                   <div class="UsernameAndImagE">
                     <h4 onclick="ProfileClicked(${element.userId})"> ${element.username}  </h4>
                          
                 
                     <h6> ${element.createdAt}</h6>
                   </div>
                   <div class="ImageUserM">
                    <img src=" ${element.userImage}"default.jpg alt="">
                   </div>
                   </div> 
                   </div>
                   <div class="Paraghraf">
                    <p>${element.text}</p>
                  
                   </div>
                  <div class="ImagePost">
                    <img src="${element.image}" alt="">
                  </div>
                  <div class="CommentAndLikesAndshir">
                     <div class="sharing">
                        <h3>مشاركة<span>12</span></h3>
                     </div>
                     <div class="CommentsandLikes"> 
                         <h3>تعبيق<span>182</span></h3>                         
                           <h3>اعجاب<span>1200</span></h3>
                     </div>
                     
                  </div>
                  <hr>
                  <div class="IconeLikesComentSharing">
                    <i class="fa-solid fa-share-nodes">مشاركة</i>
                    <i class="fa-regular fa-message">تعليق</i>
                    <i class="fa-regular fa-heart">اعجاب</i>
                  </div>
                   
                   <div class="fa-trash">
                  <ul>
                   ${ButtonDeleteANDupdate}
                  <li><i class="fa-solid fa-eye-slash"></i>اخفاء المنشور</li>
                  <li><i class="fa-solid fa-flag"></i>ابلاغ</li>
                                  
             </ul>
            </div>
           


             <div class="BoxComments">
                 <div class="InputINCoumments">
                    <input type ="text" class="ComentsInput" name ="text">
                    <img src="houssin.jpg">
              </div>
                 <div class="ButtonCommentsSend">
                  <div class="Box1Button">
                 <button class="Send-Comments" data-id="${element.id}">
                      <i class="fa-regular fa-paper-plane"></i>
                </button>
                </div>
                <div class="OtherIcones">
                <i class="fa-solid fa-camera-retro"></i>
                 <i class="fa-regular fa-face-grin"></i>
                </div>
                </div>     
                  <div class="placeCommentsPost-${element.id}" >
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
                
               
              
           ` 
        
      Container.appendChild(DivHtml);
          GetComments(element.id)
        const SideBar = document.querySelector('.Sidebar')
        let Profaile = ""
        if (SideBar) {
           Profaile = `
            <div class="ImageProfile">
                     <img src="./TTTTTTTt.jpg" alt="">
                 </div>
                 <div class="ImageProfile2">
                    <div class="UsernameAndPhoto">
                         <img src="${element.userImage}" alt="">
                    </div>
                    
                 </div>
                 <div class="Username">
                 <div class="Username1">
                    <h1>${element.username}</h1>
                    </div>
                     <div class="information">
                         <span>|مطور برمجيات</span>
                         <span> |💻مهتم بالتقنية والابتكار </span>
                         <span> 📸أحب السفر والتصوير </span>
                     </div>
                     <div class="Place">
                        <span>انضم في يناير 2020<i class="fas fa-shopping-bag"></i></span>
                        <span><a href="">www.Aksour.com</a><i class="fas fa-link"></i></span>
                        <span>الرياض، المملكة العربية السعودية<i class="fas fa-map-marker-alt"></i></span>
                         
                     </div>
                     <div class="follow">
                          <div class="Boxing1">
                               <span>127</span>
                               <p>منشور</p>
                          </div>
                          <div class="Boxing1">
                               <span>2,543</span>
                               <p>متابع</p>
                          </div>
                          <div class="Boxing1">
                                <span>389</span>
                                <p>يتابع</p>

                          </div>
                     </div>
                 </div>  
                 <div class="ImageansFriends">
                    <div class="Houcine">
                       <div class="Friends1" id="About">
                          <h4>حول</h4>
                          <i class="fas fa-circle-info"></i>
                       </div>
                       <div class="Friends1" id="Friend">
                        <h4>الاصدقاء</h4>
                           <i class="fas fa-user-friends"></i>
                       </div>
                       <div class="Friends1" id="Image">
                        <h4>الصور</h4>
                        <i class="fas fa-image"></i>+
                       </div>
                       <div class="Friends1" id="manshorat">
                        <h4>المنشورات</h4>
                        <i class="fas fa-image"></i>
                       </div>
                       </div>
                 </div> 
           `
           SideBar.innerHTML = Profaile
        }
        
        }
         
    }).catch((e)=>{

     console.log(e); 
    
    })
           
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



 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 // ///////////////////////////////////  

function GetOnepost(id){////////////////// الحساب الدي ليس مسجل دخولو ///////////////////////////////////////////////////////////////
   axios.get(`http://localhost:3000/user/${id}/posts`)
 
 
   .then(response => { 
      
      
   
           const Container = document.querySelector('.Parent');
     
         
         const posts = response.data.posts.reverse();
        // const post =  response.data.posts;
         
         
         Container.innerHTML ="" 
        for (let i = 0; i < posts.length; i++) {
                

              const element = posts[i];     
              let ButtonDeletAndUpdate ="";
              let user = w();
              let id = user.id;
              if (user) {
              if(element.userId  === id){
                
                   ButtonDeletAndUpdate = `
          <li onclick="UdpatePost('${encodeURIComponent(JSON.stringify(element))}')"><i class="fa-solid fa-pen"></i>  تعديل المنشور</li>
          <li onclick = "FunctionDelete(${element.id})"> <i class="fa-regular fa-trash-can"></i>حذف المنشور</li>
         `
                   
              }else{
                  ButtonDeletAndUpdate =""
              }
              }  
              const CreateDivElement = document.createElement('div')
              CreateDivElement.classList.add('ContanLe')


              CreateDivElement.innerHTML = `
           
               <div class="UsernameAndImageImage" >
                <i class="fa-solid fa-ellipsis"></i>
                <div class="UsernameAndImage2">
                   <div class="UsernameAndImagE">
                     <h4 onclick="ProfileClicked(${element.userId})"> ${element.username}</h4>
                        
                     <h6> ${element.createdAt}</h6>
                   </div>
                   <div class="ImageUserM">
                    <img src="http://localhost:3000/uploads/${element.userId?.avatar || 'default.png'}">
                   </div>
                   </div> 
                   </div>
                   <div class="Paraghraf">
                    <p>${element.text}</p>
                  
                   </div>
                  <div class="ImagePost">
                    <img src="http://localhost:3000/uploads/${element.userId?.avatar || 'default.png'}">
                  </div>
                  <div class="CommentAndLikesAndshir">
                     <div class="sharing">
                        <h3>مشاركة<span>12</span></h3>
                     </div>
                     <div class="CommentsandLikes"> 
                         <h3>تعبيق<span>182</span></h3>                         
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
                    <input type ="text" class="ComentsInput" name ="text">
                    <img src="houssin.jpg">
              </div>
                 <div class="ButtonCommentsSend">
                  <div class="Box1Button">
                 <button class="Send-Comments" data-id="${element.id}">
                      <i class="fa-regular fa-paper-plane"></i>
                </button>
                </div>
                <div class="OtherIcones">
                <i class="fa-solid fa-camera-retro"></i>
                 <i class="fa-regular fa-face-grin"></i>
                </div>
                </div>     
                  <div class="placeCommentsPost-${element.id}" >
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
                
                  
                  
             `
             
                Container.appendChild(CreateDivElement) 
                GetComments(element.id)
     
      
                document.querySelector('.Sidebar').innerHTML = ""

                let profaile2 = `
                  <div class="ImageProfile">
                     <img src="./TTTTTTTt.jpg" alt="">
                 </div>
                 <div class="ImageProfile2">
                    <div class="UsernameAndPhoto">
                         <img src="${element.userImage}" alt="">
                    </div>
                    
                 </div>
                 <div class="Username">
                 <div class="Username1">
                    <h1>${element.username}</h1>
                    </div>
                     <div class="information">
                         <span>|مطور برمجيات</span>
                         <span> |💻مهتم بالتقنية والابتكار </span>
                         <span> 📸أحب السفر والتصوير </span>
                     </div>
                     <div class="Place">
                        <span>انضم في يناير 2020<i class="fas fa-shopping-bag"></i></span>
                        <span><a href="">www.Aksour.com</a><i class="fas fa-link"></i></span>
                        <span>الرياض، المملكة العربية السعودية<i class="fas fa-map-marker-alt"></i></span>
                         
                     </div>
                     <div class="follow">
                          <div class="Boxing1">
                               <span>127</span>
                               <p>منشور</p>
                          </div>
                          <div class="Boxing1">
                               <span>2,543</span>
                               <p>متابع</p>
                          </div>
                          <div class="Boxing1">
                                <span>389</span>
                                <p>يتابع</p>

                          </div>
                     </div>
                 </div>  
                 <div class="ImageansFriends">
                    <div class="Houcine">
                       <div class="Friends1" id="About">
                          <h4>حول</h4>
                          <i class="fas fa-circle-info"></i>
                       </div>
                       <div class="Friends1" id="Friend">
                        <h4>الاصدقاء</h4>
                           <i class="fas fa-user-friends"></i>
                       </div>
                       <div class="Friends1" id="Image">
                        <h4>الصور</h4>
                        <i class="fas fa-image"></i>
                       </div>
                       <div class="Friends1" id="manshorat">
                        <h4>المنشورات</h4>
                        <i class="fas fa-image"></i>
                       </div>
                       </div>
                 </div> 
          `
             
               let  header =   document.querySelector('.Sidebar')
                    if (header) {
                    header.innerHTML = "";
                   header.innerHTML += profaile2;
                    }   
                  /*   GrtComments(element.id)  */
  
          } 
   }).catch((e) =>{
  console.log(e); 
  
   })
                 ;   

                
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


console.log(ImageansFriends);
console.log(ImageansFriends.length)
ImageansFriends[3].classList.add('active');
if(sidebar){
   
  
 
    sidebar.addEventListener('click', (e) => {
        const clicked = e.target.closest('.Friends1');
      /*    const H4 = e.target.closest("h4")
        if (H4) {
           if (H4.innerHTML === "حول") {
              H4.style.color ="rgb(17, 103, 233)"
             
           }
        }  */
        if(!clicked) return;
        
        // إزالة الكلاس active من كل العناصر
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

}  */
document.addEventListener('click' , (e)=>{
 const IconrSendCoumment = e.target.closest('.Send-Comments')
if (!IconrSendCoumment) return ;
e.preventDefault()
const PostId = IconrSendCoumment.dataset.id
console.log(PostId);
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
   console.log(ResponeComents);
   
   })
}
function GetComments(id) {
  const Token = localStorage.getItem('token');
 
  
  axios.get(`http://localhost:3000/posts/${id}/comments`, {
    headers: { Authorization: `Bearer ${Token}` }
  })
  .then(response => {
    const comments = response.data.reverse();
    const PlaceInComments = document.querySelector(`.placeCommentsPost-${id}`);
 
    
    if (!PlaceInComments) {
      console.warn("لا يوجد مكان لتعليقات البوست:", id);
      return;
    }

    PlaceInComments.innerHTML = "";

    if (comments.length === 0) {
      PlaceInComments.innerHTML = `<h4 style="color:gray">لا يوجد تعليقات 😔</h4>`;
      return;
    }

    comments.forEach(comment => {

      const div = document.createElement('div');
      div.classList.add('comment');

      div.innerHTML = `
  <div class="titleimagenameANDUsernameAndComments">
    <div class="titleimagename">
      <img src="${comment.userImage}">
    </div>

    <div class="UsernameAndComments">
   <h3 onclick="ClikedPostComents('${comment.userId}')">${comment.username}</h3>

     
    ${comment.text ? `<p>${comment.text}</p>` : ""}
          
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
  });   

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


Profile()
function Profile(){

const token = localStorage.getItem("token");

if(token){

axios.get("http://localhost:3000/profile",{
 headers:{
   Authorization:`Bearer ${token}`
 }
}).then((res)=>{

 const image = res.data.user.avatar
 localStorage.setItem('imge' , JSON.stringify(image))
 const Container = document.querySelector('.Parent');
 const response = res.data.user
 const rescome = res.data.user.id
 console.log(response);
 document.getElementById('ImageHeader').src = response.avatar 
 const Div1 = document.createElement('div')
 Div1.classList.add('ContanLe')

 
})

}

}
////////////////////////////////////////////////////////////////Update ///////////////////////////////////////////
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

  urlxdown = `${Url}posts/${Objct.id}`
             axios.put(urlxdown , formdata, {headers:headers})
      .then((res) => {
      ShowAltert("✅ تم تعديل  البوست بنجاح");
      
      
      const containerAll = document.querySelector('.Cont');
      containerAll.innerHTML = ""; // تنظيف فقط قبل التحديث
       GetPostsAll();  // ← تحديث حقيقي للبوستات من السيرفر
     }).catch((e)=>{
   })  
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
 
  axios.delete(`http://localhost:3000/posts/${id}`, {
     
     headers: {  Authorization: `Bearer ${Token}`} ,

     })
      .then((respone)=>{
        console.log(respone);
        
         ContainerComnfirm.classList.remove('ShowConfirm')
        this.classList.add('CanelConfirm')
         ShowAltert("تم حدف البوست")
      }).catch((error)=>{
 
          ShowAltert(error)
  
      })

     })
  

  } 



