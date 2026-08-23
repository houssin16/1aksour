
const TokenMessage         = localStorage.getItem('token');
const localStorageId       = localStorage.getItem('username')
const Id_user              = JSON.parse(localStorageId)
console.log(Id_user)
async function prsone() {
    const Search = document.querySelector('.SearchFrindes').value.trim();
    const Searchinput = document.querySelector('.SearchFrindes')
    if(!Search) return 
    const response = await axios.get(`${BACKEND_LOCAL_URL}SearchUser?search=${Search}`,
        {headers :{ Authorization:  `Bearer ${TokenMessage}`},})
   
    let  Result = ""
    response.data.forEach(element => {
        if(Searchinput.value !== ""){
            Result += `
         <div class="BoxFrindesChat" data-prsone=${element._id} >
                        <div class="mage_Person_And_Name_person">
                        <div class="Image_Person"> 
                          <img  src="http://localhost:3000/uploads/${element.avatar}" alt="">
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
        }else{
             

        }
        
    });
document.querySelector('.Friends_list_chat').innerHTML = Result
}
document.addEventListener('input' ,prsone)
let ResultPrsone;
document.addEventListener('click' , (e)=>{
    const Person    = e.target.closest(".BoxFrindesChat")
    if (!Person) return
    const Person_id = Person.dataset.prsone
    ResultPrsone = Person_id
    GetMessages()
})
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
   
    const res = await axios.post(`${BACKEND_LOCAL_URL}getmessage`
        ,
        {
        receiver : ResultPrsone
        },{
        headers :{ Authorization:  `Bearer ${TokenMessage}`}}

    )


      let result =""
   
     console.log(res.data);
     let Position;
     res.data.forEach(e => { 
        const date  = new Date(e.createdAt) 
        let hour = date.getHours();
        let minute = date.getMinutes();
        if(e.sender === Id_user._id ){
          Position = 'right'
        }else{
          Position = 'left'
        }
      
       result += `
                    <div class="message ${Position}">
                          <p>${e.message}</p>
                          <span>${hour}</span>
                        </div>         
                    
                       
                   ` 
             document.querySelector('.Chat').innerHTML = result                      
      
        })  
        
}  

