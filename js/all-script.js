// Istifadecinin qirish ucun modal pencere
const joinusBtn = document.querySelector('#joinusBtn');
const modalWin = document.querySelector('#modalWin');
const modalOver =modalWin.querySelector('.overlay')


joinusBtn.addEventListener('click', (e)=>{
    e.preventDefault;
    document.body.style.overflow = 'hidden';
    modalWin.classList.add('modal-active')
})

modalOver.addEventListener('click', ()=>{

    document.body.style.overflow = 'initial';
    modalWin.classList.remove('modal-active')
})

// modal End


// Footer Fixed Effekti

const heightFooter = document.querySelector('footer').offsetHeight;
document.querySelector('.wrapper').style.marginBottom = heightFooter + "px"

// End


