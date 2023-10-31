import { ref, set, onValue, get, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './firebase.js';


document.addEventListener('DOMContentLoaded', function () {
  let BooksAll = document.querySelector('.all-books-slider .swiper-wrapper')
  onValue(ref(db, 'kitablar/'), function (valueKateqoriyalar) {
    const butunKateqoriyalar = Object.entries(valueKateqoriyalar.val());
    for (let [key, value] of butunKateqoriyalar) {




      let bookAll = document.createElement('div');
      bookAll.classList.add('swiper-slide')
      bookAll.innerHTML = `
          <div class="target-book">
          <div class="picture">
              <img src="${value.image}" alt="">
          </div>
          <h4 class="title">
          ${value.name}
          </h4>
          <p class="auther">${value.author}</p>
          <a href="./book.html#${key}" class="btn">
              Read more
          </a>
      </div>
          `;
      BooksAll.appendChild(bookAll)




      var swiper = new Swiper(".all-books-slider", {
        slidesPerView: 2,
        spaceBetween: 62,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 62,
          },
        },
      });




    }
  });

})




























var swiper = new Swiper(".all-books-slider", {
  slidesPerView: 2,
  spaceBetween: 62,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 62,
    },
  },
});






// Kateqoriyala 

const allCategory_block_show = document.querySelector('#showAllKateqoriylar')

onValue(ref(db, 'kateqoriya/'), function (valueAllKat) {
  const valueAllKat_const = Object.entries(valueAllKat.val());
  allCategory_block_show.innerHTML = ''
  for (let [key, value] of valueAllKat_const) {

    let liCat = document.createElement('li');
   


    liCat.innerHTML = `<a href="#" data-id="${key}" class="active"> ${value.name} </a>`;
    allCategory_block_show.appendChild(liCat)


  }



  const liCatAll = allCategory_block_show.querySelectorAll('li');
  for (let pp of liCatAll) {
    let dataAtt = pp.querySelector('a').dataset.id;

    pp.addEventListener('click', function (e) {
      e.preventDefault()
      editCategory(dataAtt);
    })
  }

})




function editCategory(catId) {

  let BooksAll__category = document.querySelector('.all-books-slider .swiper-wrapper')
  onValue(ref(db, 'kitablar/'), function (valueKateqoriyalar) {
    const butunKateqoriyalar = Object.entries(valueKateqoriyalar.val());

    BooksAll__category.innerHTML = '';
    for (let [key, value] of butunKateqoriyalar) {

      if (value.kateqoriya == catId) {
        let bookAll_book = document.createElement('div');
        bookAll_book.classList.add('swiper-slide')
        bookAll_book.innerHTML = `
          <div class="target-book">
          <div class="picture">
              <img src="${value.image}" alt="">
          </div>
          <h4 class="title">
          ${value.name}
          </h4>
          <p class="auther">${value.author}</p>
          <a href="./book.html#${key}" class="btn">
              Read more
          </a>
      </div>
          `;
        BooksAll__category.appendChild(bookAll_book)




        var swiper = new Swiper(".all-books-slider", {
          slidesPerView: 2,
          spaceBetween: 62,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 62,
            },
          },
        });


      }




    }
  });
}