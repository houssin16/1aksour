
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
    const res   = await axios.get('')
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
   const res = await axios.post(`http://localhost:3000/messages`,
    { receiver:ResultPrsone,message: ResultText,},{
    headers :{ Authorization:  `Bearer ${TokenMessage}`}}) 
}
document.getElementById('ButtonSendMessage').addEventListener('click' ,  SendMessage ) 

async function GetMessages (){
   
    const res = await axios.post(`http://localhost:3000/getmessage`
        ,
        {
        receiver : ResultPrsone
        },{
        headers :{ Authorization:  `Bearer ${TokenMessage}`}}

    )


    
     console.log(res.data);
     let Position;
     res.data.forEach(e => {
        if(e.sender === Id_user._id ) {
          Position = 'right'
        }else{
          Position = 'left'
        }
        let result =""
       result += `
                    <div class="message left">
                          <p>السلام عليكم كيف حالك انت تمام</p>
                          <span>ص 10:55</span>
                        </div>         
                           <div class="message right " data-user_id="18853">
                            <p>وعليكم السلام >السلام عليكم كيف حالك انت تما</p>  
                            <span>ص 10:55</span>
                            </div>
                       
                   ` 
             document.querySelector('.Chat').innerHTML = result                      
      
        })  
        
}  
