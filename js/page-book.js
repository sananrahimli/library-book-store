import { ref, set, onValue, get, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './firebase.js';

let bookId;

var currentURL = window.location.href;

// Разбить URL по символу '#'
var urlFragments = currentURL.split('#');

// Проверить, есть ли фрагмент после '#'
if (urlFragments.length >= 0) {
  // Фрагмент находится во втором элементе массива
  var fragment = urlFragments[1];

  // Присвоить фрагмент переменной
  bookId = fragment;
}
let lookGen;
window.addEventListener('DOMContentLoaded', (e) => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      onValue(ref(db, `kitablar/${bookId}/look`), function (lookValue) {
        lookGen = lookValue.val();
        resolve(lookGen);
      });
    });
  }

  fetchData()
    .then((lookGen) => {

      set(ref(db, `kitablar/${bookId}/look`), lookGen += 1)
    })
    .catch((error) => {
      console.error(error);
    });
})







let nameBook = document.querySelector('.about__textContent h2');
let yearBook = document.querySelector('.about__textContent span.year')
let authorBook = document.querySelector('.about__textContent h4')
let addDate = document.querySelector('.about__textContent h3')
let descriptionBook = document.querySelector('.about__textContent > p')
let imageBook = document.querySelector('.about__picture > img')

let look_span = document.querySelector('span.new > span#look')




onValue(ref(db, `kitablar/${bookId}`), function (valueKateqoriyalar) {
  const infoBook = valueKateqoriyalar.val()


  nameBook.innerHTML = infoBook.name;
  yearBook.innerHTML = infoBook.year;
  authorBook.innerHTML = infoBook.author;
  descriptionBook.innerHTML = infoBook.description;
  imageBook.src = infoBook.image;
  look_span.innerHTML = infoBook.look;
  addDate.innerHTML = infoBook.addDate;


});



//   Add Comment

let addCommentForm = document.querySelector('#addCommentForm')

addCommentForm.addEventListener('submit', function (e) {
  e.preventDefault()

  let todayDate = new Date();
  const date = todayDate.toLocaleDateString();
  const time = todayDate.toLocaleTimeString();
  let now = date + " " + time; // Объявление переменной происходит здесь

  const objectBookAdd = {
    name: "Anonim",
    comment: e.target.commentContent.value,
    date: now, // Теперь можно использовать переменную now
  };


  const commentsRef = ref(db, `/kitablar/${bookId}/comments`); // Путь к комментариям внутри книги
  const newCommentRef = push(commentsRef); // Генерируем уникальный ключ для комментария
  set(newCommentRef, objectBookAdd);

  alert('Comment elave edildi!')
  addCommentForm.reset()
  book_comments_api.innerHTML = '';
  showCommentAll()
})



// Show comments
let book_comments_api = document.querySelector('#book_comments_api');
function showCommentAll() {
  onValue(ref(db, `kitablar/${bookId}/comments`), function(valueKateqoriya) {
    let x = Object.entries(valueKateqoriya.val())
    for (let [key, value] of x) {
      

      let commentItem = `
            <div class="flex date_and_auther">
                <h2 class="anonim-person">${value.name}</h2>
                <span class="date">${value.date}</span>
            </div>
            <p>
                ${value.comment}
            </p>
        `;

      let commentItemDiv = document.createElement('div');
      commentItemDiv.classList.add('anonim-comment');
      commentItemDiv.innerHTML = commentItem;

      book_comments_api.appendChild(commentItemDiv);

      // let opt = document.createElement('option');
      // opt.value = key;
      // opt.innerHTML = value.name;
      // kateqoriyalarBook.appendChild(opt)
    }
  });
}

showCommentAll()