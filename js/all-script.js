// Istifadecinin qirish ucun modal pencere
const joinusBtn = document.querySelector('#joinusBtn');
const modalWin = document.querySelector('#modalWin');
const modalOver =modalWin.querySelector('.overlay')


joinusBtn.addEventListener('click', (e)=>{
    e.preventDefault;
    document.body.classList.toggle('ovHid')
    modalWin.classList.toggle('modal-active')
})

modalOver.addEventListener('click', ()=>{

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

burgerBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('active');
    mobileNavigation.classList.toggle('open');
    headerOpenMenu.classList.toggle('openMenu')
})