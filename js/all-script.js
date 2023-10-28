import { ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './js/firebase.js';

localStorage.setItem("adminSession", false);

// Istifadecinin qirish ucun modal pencere
const joinusBtn = document.querySelector('#joinusBtn');
const modalWin = document.querySelector('#modalWin');
const modalOver = modalWin.querySelector('.overlay')


joinusBtn.addEventListener('click', (e) => {
    e.preventDefault;
    document.body.classList.toggle('ovHid')
    modalWin.classList.toggle('modal-active')
})

modalOver.addEventListener('click', () => {

    document.body.classList.toggle('ovHid')
    modalWin.classList.remove('modal-active')
})

// modal End


// Footer Fixed Effekti

const heightFooter = document.querySelector('footer').offsetHeight;
document.querySelector('.wrapper').style.marginBottom = heightFooter + "px"

// End




// Burger menu
const burgerBtn = document.querySelector('#burger');
const mobileNavigation = document.querySelector('nav#headerMenu');
const headerOpenMenu = document.querySelector('header')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileNavigation.classList.toggle('open');
    headerOpenMenu.classList.toggle('openMenu')
})







// Join Us codes

let joinUsForm = document.querySelector('form#signUpUser');

joinUsForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let userLogin = e.target.userLogin.value;
    let userEmail = e.target.userEmail.value;

    localStorage.setItem("userSession", "true");

    const objectUserLogin = {
        userLogin: userLogin,
        userEmail: userEmail,
        userBooks: {}
    }

    const snapshot = push(ref(db, '/userSite'));
    set(ref(db, 'userSite/' + snapshot.key), objectUserLogin);

    localStorage.setItem("userSessionId", snapshot.key);

    authoriz()
})


let joinUs_finish = document.querySelector('.joinUs_finish')



joinUs_finish.querySelector('a.checkoutUser').addEventListener('click', function (e) {
    e.preventDefault()
    localStorage.setItem("userSession", "false");
    setTimeout(() => {
        document.querySelector('.joinUs_start').style.display = 'block'
        joinUs_finish.style.display = 'none'
    }, 500)
})
function authoriz() {
    if (localStorage.getItem("userSession") == null) {
        document.querySelector('.joinUs_start').style.display = 'block'
        joinUs_finish.style.display = 'none'
    }
    if (localStorage.getItem("userSession") == "true") {
        document.querySelector('.joinUs_start').style.display = 'none'
        joinUs_finish.style.display = 'block';

        var userLocalId = localStorage.getItem("userSessionId");

        onValue(ref(db, `userSite/${userLocalId}`), function (userLocalVal) {
            let ulv = userLocalVal.val()
            joinUs_finish.querySelector('p.name > span').innerHTML = ulv.userLogin
            joinUs_finish.querySelector('p.email > span').innerHTML = ulv.userEmail
        })
    }
}

authoriz()