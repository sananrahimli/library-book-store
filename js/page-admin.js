var form=document.querySelector("#form");
var div=document.querySelector("#error")
var h2=document.createElement("h2");
div.append(h2) ;
var p=document.createElement("p");
div.append(p) ;

form.addEventListener("submit",function(e){
    e.preventDefault();
    const input=e.target;
    username=input.username.value.trim();
    password=input.password.value.trim();
 if(username=="adminadmin" && password=="12345"){
    h2.innerHTML="Sucsesful"    ;
    p.innerHTML="Welcome to admin panel"   
    div.classList.add("great_css");
    window.location.href="./login.html"}
 else{
    h2.innerHTML="Error"    ;
    p.innerHTML="please check form"   
    div.classList.add("error_css");

    }

})