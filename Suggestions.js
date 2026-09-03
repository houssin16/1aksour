async function GetUserSuggestionss(){
 const resGetUserSuggestionss = await  axios.get("http://localhost:3000/GetUserSuggestions", {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
    
});
console.log(resGetUserSuggestionss.data)
}
GetUserSuggestionss()