import { ref, set, onValue, get, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './firebase.js';



const searchForm = document.querySelector('form#search-form')
const searchInp = document.querySelector('form#search-form [name="search-inp"]')
const searchBtn = document.querySelector('form#search-form [name="search-btn"]')

searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const valueInp = searchInp.value
    const swiperSlider = document.querySelector('.swiper-slide .book_page')
    const mySwiper = document.querySelector('.swiper_search')
    const ajaxBooks = document.querySelector('.ajax_books')
    
    

    onValue(ref(db, `kitablar/`), function (snapshot) {
        const data = Object.entries(snapshot.val())
        

        for (let [key, value] of data) {
            const  result  = (value.name?.trim()?.toLowerCase()).startsWith(valueInp.trim().toLowerCase())
             
            
            if (result) {
                
                mySwiper.innerHTML = `
                <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="book_page">
                        <div class="flex">
                            <div class="picture">
                                <img src="${value.image}" alt="">
                            </div>
                            <div class="swiper_content_text">
                                <h2>${value.name}</h2>
                                <p class="auther">${value.author}</p>
                                <p class="description">
                                  ${value.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
                `
                ajaxBooks.appendChild(mySwiper)
                
            }
           
           
        }
    })
    searchInp.innerHTML = ''
     
    
})
