
import { ref, set, onValue, get,push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from "../../js/firebase.js";



const booksAdd_btn = document.querySelector('#booksAdd_btn');
const addBook_content = document.querySelector('.addBook_content')
const bookPage_all = document.querySelector('.bookPage_all')
const formAddBig = document.querySelector('form#addBookForm')
const name_book = document.querySelector('form#addBookForm [name="titleBook"]')
const img_book = document.querySelector('form#addBookForm [name="imgBook"]')
const author_book = document.querySelector('form#addBookForm [name="authorBook"]')
const book_year = document.querySelector('form#addBookForm [name="yearBook"]')
const category = document.querySelector('form#addBookForm [name="kateqoriyalarBook"]')
const descriptionBook = document.querySelector('form#addBookForm [name="descriptionBook"]')
const addDate = document.querySelector('form#addBookForm [name="addDate"]')
const elave_et_btn = document.querySelector('.submitBtn')


let todayDate = new Date();

addDate.value = todayDate.toISOString().split('T')[0];

let search_content = document.querySelector('.searchList')
let searchList = document.querySelector('.searchList ul')

const inputSearch_google = document.querySelector('#inputSearch_google')

const google_api_books = 'https://www.googleapis.com/books/v1/volumes?q=';


inputSearch_google.addEventListener('input', function (e) {
    search_content.style.display = 'block'
    let input_value = e.target.value;
    let xx = google_api_books + input_value;

    const urlFetch = fetch(xx);

    if (input_value.length >= 1) {
        urlFetch.then(next => next.json()).then(data => {
            // Ваш код создания элементов li и добавления их в searchList
            for (let item = 0; item < data.items.length; item++) {
                let dataBook = data.items[item];
                let urlImage = data.items[item].volumeInfo.imageLinks;

                if (urlImage && urlImage.thumbnail) {
                    let li = document.createElement('li');
                    li.classList.add('flex')
                    li.dataset.num = dataBook.id;

                    li.innerHTML = `
                        <div class="picture"><img src=${urlImage.thumbnail}></div>
                        <div class="name">${dataBook.volumeInfo.title}</div>
                        <div class="option">
                        <button data-title="${dataBook.volumeInfo.title}"
                         data-description="${dataBook.volumeInfo.description}"
                          data-img="${urlImage.thumbnail}" 
                          data-year="${dataBook.volumeInfo.publishedDate}"
                           data-author="${dataBook.volumeInfo.authors}" class="elaveet-btn" title="Kitabı əlavə elə">+</button>
                           
                        </div>
                    `;
                    const elaveEt_btn = document.querySelectorAll('.elaveet-btn')

                    for (let add of elaveEt_btn) {



                        add.addEventListener('click', function (e) {
                            name_book.value = add.getAttribute('data-title')
                            author_book.value = add.getAttribute('data-author')
                            img_book.value = add.getAttribute('data-img')
                            book_year.value = add.getAttribute('data-year')
                            descriptionBook.value = add.getAttribute('data-description')

                               search_content.style.display = 'none'

                        })

                       


                    }
                    
                    
                    searchList.appendChild(li);
                }
            }
        });

        searchList.innerHTML = ''; 
    } else {
        search_content.style.display = 'none'

    }
});
formAddBig.addEventListener('submit', function (e) {
    e.preventDefault()

    
    const objectBookAdd = {
        name: name_book.value,
        image: img_book.value,
        description:  descriptionBook.value,
        author: author_book.value,
        kateqoriya: category.value,
        year: book_year.value,
        addDate: addDate.value,
        look: 0,

    }

    const snapshot = push(ref(db, '/kitablar'));
    set(ref(db, 'kitablar/' + snapshot.key), objectBookAdd);

    
    let num = 0;
        onValue(ref(db, `kateqoriya/${category.value}/total`), function(numTotal){
            num = numTotal.val();
        })
    set(ref(db,`kateqoriya/${category.value}/total`), num += 1)

    alert('Kitab ugurla elave edildi!')
    formAddBig.reset()
})







// ??????
const kateqoriyalarBook = document.querySelector('#kateqoriyalarBook');

onValue(ref(db, 'kateqoriya/'), function(valueKateqoriya){
let x = Object.entries(valueKateqoriya.val())
    for (let [key,value] of x) {
        if(!document.querySelector(`select option[value="${key}"]`)) {
            
            let opt = document.createElement('option');
            opt.value = key;
            opt.innerHTML = value.name;
            kateqoriyalarBook.appendChild(opt)
        }
    }
  });





// ???










booksAdd_btn.addEventListener('click', function (e) {
    e.preventDefault()
    addBook_content.classList.toggle('active')
    bookPage_all.classList.toggle('active')
})




// Butun kitablar

let newBooksAll = document.querySelector('.newBooks')
onValue(ref(db, 'kitablar/'), function(valueKateqoriyalar){
    const butunKateqoriyalar = Object.entries(valueKateqoriyalar.val());
    for(let [key, value] of butunKateqoriyalar) {




        let bookAll = document.createElement('a');
        bookAll.classList.add('item__book')
        bookAll.innerHTML = `
                          <div class="picture">
                            <img src="${value.image}" alt="">
                          </div>
                          <h3>${value.name}</h3>
                          <p class="auther">${value.author}</p>
        `;
        newBooksAll.appendChild(bookAll)




    }
  });