import { ref, set, onValue, get  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from '../../js/firebase.js'; 

let inputLogin = document.querySelector('#loginAdmin');
let inputPass = document.querySelector('#passAdmin');
let inputName = document.querySelector('#nameAdmin')
let formSetting = document.querySelector('#settingForm')
let passBar = document.querySelector('.pass-tehlukesizliyi > .bar > i');
let submitBtn = document.querySelector('.submitBtn')


function settingDeyish(newLogin, newPass, newName) {
    set(ref(db, 'adminLogin/login'), newLogin)
    set(ref(db, 'adminLogin/pass'), newPass);
    set(ref(db, 'adminLogin/name'), newName);
  }


formSetting.addEventListener('submit', (e)=>{
    e.preventDefault()
    settingDeyish(inputLogin.value, inputPass.value, inputName.value);
})

onValue(ref(db, 'adminLogin/'), function(valueAdmin){
  inputLogin.value = valueAdmin.val().login
  inputPass.value = valueAdmin.val().pass
  inputName.value = valueAdmin.val().name
  checkPasswordLength()
});



function checkPasswordLength() {
  const passVal = inputPass.value;
  const passwordLength = passVal.length;

  if (passwordLength >= 8) {
    passBar.querySelector('i').innerHTML = 'Şifrə təhlükəsizdir!'
    passBar.classList = [];
    passBar.classList.add('good')
    submitBtn.removeAttribute('disabled');
  } else if(passwordLength >= 3) {    
    passBar.querySelector('i').innerHTML = 'Şifrə normaldı!'
    passBar.classList = [];
    passBar.classList.add('normal')
    submitBtn.removeAttribute('disabled');
  } else {
    passBar.querySelector('i').innerHTML = 'Şifrə təhlükəsiz deyil!'
    passBar.classList = [];
    passBar.classList.add('bad');
    submitBtn.setAttribute('disabled', 'disabled');
  }

}
inputPass.addEventListener('input', checkPasswordLength);

document.addEventListener('DOMContentLoaded', checkPasswordLength);