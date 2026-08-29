async function GetRequestsFrindes (){
 try {
    const TokenMessage         = localStorage.getItem('token');
    const res = await axios.get(`${BACKEND_LOCAL_URL}GetRequiest` ,
    {
        headers :{ Authorization:  `Bearer ${TokenMessage}`}
    }
  )
  const resulting = res.data.requests
  const Container =  document.querySelector('.ConDiv_w')
  resulting.forEach(element => {
  const Create_At    = new Date(element.createdAt)
  const now = new Date()
  const diff = now - Create_At 
  let hour = Math.floor(diff / (60 * 60 * 1000))
  let munets =Math.floor(diff / 60000)
  let seconde =""
  let Day = parseInt(hour / 24)
  let ResultDayandHour = ""
  if(hour === 48) {
      ResultDayandHour =`<span class="TimeCreate"> مند يومين </span>`
  }else if(hour === 24){
 ResultDayandHour =`<span class="TimeCreate"> مند يوم </span>`
  }else if(hour >= 24){
ResultDayandHour = `<span class="TimeCreate"> مند ${Day}ايام</span>` 
  }else if(hour < 24){
 ResultDayandHour =`<span class="TimeCreate"> مند ${hour} ساعات</span>` 
  }else if (hour < 1){
ResultDayandHour =`<span class="TimeCreate"> مند ${munets} دقايق</span>` 
  }

  const CreateDiding = document.createElement('div')
  CreateDiding.classList.add('ListLikesAndFollowing')
  CreateDiding.innerHTML =`
  <div class="HisLikes">
                <div class="HisLikesAndImg">
                    <div class="Malrboro">

                    </div>
               <img src="./uploads/1760719220011.jpg" alt="">
            </div>
           </div>
           <div class="Boxing1">
            
                <div class="CardAksour2">
                    <h3>${element.sender.name}<span>اعجب بمنشورك</span></h3>
                     ${ResultDayandHour}
                </div>
                <div class="CaredImageUser">
                    <img src="${BACKEND_LOCAL_URL}./uploads/${element.sender.avatar}" alt="">
                </div>
               
           </div>
  `
 Container.appendChild(CreateDiding)
 console.log(element)
  })
 }catch(e){
   console.log(e)
 }

}

GetRequestsFrindes()
 
