import { ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from '../../js/firebase.js';




let categoryAddForm = document.querySelector('form#categoryAddForm');



categoryAddForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const input = e.target;

  if (input.categoryName.value.length > 1) {

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





// Memmed
let catContentAll = document.querySelector('.categoryPage ul')
onValue(ref(db, 'kateqoriya/'), function (valueKateqoriyalar) {
  const butunKateqoriyalar = Object.entries(valueKateqoriyalar.val());
  for (let [key, value] of butunKateqoriyalar) {

    let imageCate;
    if (value.image == "") {
      imageCate = 'https://mmpd.ru/public/frontend/amazy/img/63a097e2368bc.png'
    } else {
      imageCate = value.image;
    }



    let catLi = document.createElement('li');

    catLi.innerHTML = `
        <li>
        <div class="picture">
          <img src="${imageCate}" alt="">
        </div>
        <div class="info flex">
          <h4>${value.name}</h4>
          <div class="books flex">
            <i class="icon-books-com"></i>
            <span> ${value.total}</span>
          </div>
        </div>
      </li>
        `;
    catContentAll.appendChild(catLi)




  }
});



