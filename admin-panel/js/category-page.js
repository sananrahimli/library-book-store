const categoryAdd_btn = document.querySelector('#categoryAdd_btn');
const categoryAdd_content = document.querySelector('.categoryAdd_content')
const categoryPage_content = document.querySelector('.categoryPage')

categoryAdd_btn.addEventListener('click', function(){
    categoryAdd_content.classList.toggle('active')
    categoryPage_content.classList.toggle('active')
})