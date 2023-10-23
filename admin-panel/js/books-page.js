

const booksAdd_btn = document.querySelector('#booksAdd_btn');
const addBook_content = document.querySelector('.addBook_content')
const bookPage_all = document.querySelector('.bookPage_all')

booksAdd_btn.addEventListener('click', function(e){
    e.preventDefault()
    addBook_content.classList.toggle('active')
    bookPage_all.classList.toggle('active')
})