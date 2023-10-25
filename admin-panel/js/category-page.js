import { ref, set, onValue, get, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from '../../js/firebase.js';



let categoryAddForm = document.querySelector('form#categoryAddForm');



categoryAddForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const input = e.target;

    if (input.categoryName.value.length > 0) {

        const object = {
            name: input.categoryName.value,
            image: input.categoryImage.value
        }

        const snapshot = push(ref(db, '/kateqoriya'));
        set(ref(db, 'kateqoriya/' + snapshot.key), object);



        alert('Kateqoriya əlavə uğurla edildi!')

        input.categoryName.value = '';
    } else {
        alert('Kateqoriya adini qeyd edin!')
    }

})











































const categoryAdd_btn = document.querySelector('#categoryAdd_btn');
const categoryAdd_content = document.querySelector('.categoryAdd_content')
const categoryPage_content = document.querySelector('.categoryPage')

categoryAdd_btn.addEventListener('click', function () {
    categoryAdd_content.classList.toggle('active')
    categoryPage_content.classList.toggle('active')
})