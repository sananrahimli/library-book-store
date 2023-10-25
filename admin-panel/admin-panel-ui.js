

const push_btn = document.querySelector('.push_icon');
push_btn.addEventListener('click', ()=>{
    document.querySelector('.push__content').classList.toggle('open')
});


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

