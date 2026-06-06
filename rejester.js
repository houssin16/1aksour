
function ShowAltert(x){
   
     const div = document.createElement('h1')
     const text = document.createTextNode(`${x}`)
     div.classList = "alert"
     div.appendChild(text)
     document.getElementById('Alert').appendChild(div)
     setTimeout(()=>{

        div.style.display = "none"
     },3000)

   
}
const ButtonRegster = document.getElementById('ButtonRegster');

ButtonRegster.addEventListener('click', async () => {
    const name = document.getElementById('Name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value.trim();
    const ConfirmPassword = document.getElementById('ConfirmPassword').value.trim()
   const file = document.getElementById("avatarInput").files[0];

    if (!name.trim()) {
        ShowAltert("الاسم فارغ")
        return;
    }
    if (!Invaildtion(email)) {
        ShowAltert("الايمل غير صالح")
        return;
    }
    if (password.length === 0 ) {
        ShowAltert('كلمة المرور فارغة')
        return;
    } else if(!NvalidtionPassword(password)){ 
      ShowAltert("لمة المرور ضعيفة. يجب أن تحتوي على حرف كبير وصغير ورقم ورمز وطول 8 على الأق")
    
    } 
      if (password !== ConfirmPassword) {
        ShowAltert('كلمة السر غير متطابقة')
        return
    } 
      
/* const AddUser = {

    name: name,
    avatar : file,
    email : email,
    password : password,

} */
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
   formData.append("avatar", file);
    axios.post('http://localhost:3000/register', formData)
        .then(res => {
            console.log(res.data);
            ShowAltert("تم إنشاء الحساب بنجاح");
            window.location.href = "index.html";
        })
        .catch((Er)=>{
          ShowAltert(Er.response.data.message)
          console.log(Er);
          
        });  
        
});


function Invaildtion(email){

    const Pattene = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    return Pattene.test(email)
}


function NvalidtionPassword(passwordV){

    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return password.test(passwordV)
}


function ChekingPassowrdStrong(password){ //////////////// قوة كلمة المرور

    let StorngPssword = 0 ;

    if (/[a-z]/.test(password)) {
        StorngPssword++
    }
    if (/[A-Z]/.test(password)) {
        StorngPssword++
    }
    
    if (/[0-9]/.test(password)) {
        StorngPssword++
    }
    if (/[@$!%*?&]/.test(password)) {
        StorngPssword++
    }
    if (password.length  >= 8 ) {
        StorngPssword++
    }
    return StorngPssword
  
    
}


const PasswordInput = document.getElementById('password')
const StrenghtText  = document.getElementById('StrenghtText')
const StrenghtFill = document.getElementById('StrenghtFill')

PasswordInput.addEventListener('input' , ()=>{

    const pass = PasswordInput.value
    const storage = ChekingPassowrdStrong(pass)
     if (storage === 0) {
        StrenghtText.textContent = ""
        StrenghtFill.style.width = "0%"

     }else if(storage <= 2) {
        StrenghtText.textContent = "ضعيفة"
        StrenghtFill.style.width ="40%"
        StrenghtFill.style.background ="red"

     }else if (storage ===  3 ) {
        StrenghtText.textContent = "متوسطة"
        StrenghtFill.style.width ="70%"
        StrenghtFill.style.background = "orange"
     }else if(storage === 5 ){
        StrenghtText.textContent ="قوية"
        StrenghtFill.style.width = "100%"
        StrenghtFill.style.background ="green"
     }
})

document.getElementById('buttonlogin').addEventListener('click', ()=>{
window.document.location = "index.html"
})

const password = document.getElementById('password')
const ConfirmPassword = document.getElementById('ConfirmPassword')
ConfirmPassword.addEventListener('input' , ()=>{

    if (password.value !== ConfirmPassword.value) {
        ConfirmPassword.style.border = '3px solid rgba(110, 7, 7, 1)'
    }else{
        ConfirmPassword.style.border = '3px solid rgba(10, 110, 7, 1)'
    }
})
const IconesA = document.getElementById('IconesA')
const Input = document.getElementById('password')
IconesA.addEventListener('click' , ()=>{

    if (Input.type === "password") {
        Input.type = "text"
    }else{

        Input.type = "password"
    }
})

/* __________________________________________________________________________________________________________________________________ */

/* function AddUsers (AddUser){

  fetch('http://localhost:3000/users' ,{
   method :'POST',
   headers:{'Content-Type' : 'application/json'},
   body : JSON.stringify(AddUser)
  }).then(ress =>{

    console.log(ress);
    
  })
  console.log("eeeeeeeeeeeee");
  
} */