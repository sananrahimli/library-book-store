
import { ref, set, onValue, get  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './firebase.js'; 

var form=document.querySelector("#form");
var div=document.querySelector("#error")
var h2=document.createElement("h2");
div.append(h2) ;
var p=document.createElement("p");
div.append(p) ;


form.addEventListener("submit",function(e){
    e.preventDefault();
    const input=e.target;
    var  username=input.username.value.trim();
    var password=input.password.value.trim();

   const x=ref(db,"adminLogin/");
   get(x).then(function(snapshot){
      const admin=snapshot.val();
 if(username==admin.login && password==admin.pass){
   h2.innerHTML="Sucsesful"    ;
   p.innerHTML="Welcome to admin panel"   ;
   div.classList.add("great_css");
   localStorage.setItem("adminSession", true);
   setTimeout(delay,2000)

  }
 else{
    h2.innerHTML="Error"    ;
    p.innerHTML="please check form"   
    div.classList.add("error_css");
    localStorage.setItem("adminSession", false);
    }
   })
})

function delay(){  
   window.location.href="/admin-panel/admin-panel.html"
}

