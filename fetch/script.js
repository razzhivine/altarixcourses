function searchLogin(){
    let login=document.getElementById("login").value
    fetch('https://api.github.com/search/users?q='+login)
    .then(function(response){
        return response.json();
    })
    .then(function(login){
        let arr = login.items.splice(1, 5);
        if (arr.length >= 1) {
            list.innerHTML=arr.map(function(i) {
              return "<li>"+i.login+"</li>";
            }).join(" ");
        } ;
    })
    .catch(function(error){
        list.innerHTML = error;  
    });
};