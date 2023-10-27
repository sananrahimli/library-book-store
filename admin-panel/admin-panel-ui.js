import { ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from '../../js/firebase.js';

const push_btn = document.querySelector('.push_icon');
const push_content = document.querySelector('#pushBase')

push_btn.addEventListener('click', () => {
    document.querySelector('.push__content').classList.toggle('open')
});


onValue(ref(db, 'contactSite/'), function (feedback) {
    const userFeedback = Object.entries(feedback.val());
    let numPush_number = 0;
    push_content.innerHTML = '';
    for (let [key, value] of userFeedback) {
        if (value.option == false) {
            let liPush = document.createElement('li');
            liPush.innerHTML = `<li><a href="./pages/admin-feedback.html#yakor"><b>!!!</b> <span class="name">Qonaq: <i>${value.fullname}</i></span> <span class="cavab">Cavablandır</span></a></li>`;
            push_content.appendChild(liPush)
            numPush_number++
        }
     
    }
    push_btn.querySelector('span').innerHTML = numPush_number


})



const burgerMenu_btn = document.querySelector('#mobileBurger_btn');
const burgerMenu_content = document.querySelector('#sidebar ul.navigation');

burgerMenu_btn.addEventListener('click', function(e){
    e.preventDefault();
    burgerMenu_btn.classList.toggle('active');
    burgerMenu_content.classList.toggle('active');
    document.body.classList.toggle('active');

   
});

function bad_auth() {
    if(localStorage.getItem("adminSession") == "false") {
        window.location.href = '/admin.html';
    } 
}


bad_auth()


const logout_btn = document.querySelector('.logout a');

logout_btn.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(() => {

        localStorage.setItem("adminSession", false);
        window.location.href = "/admin.html"
    }, 500)
})










