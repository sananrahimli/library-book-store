import { ref, set, onValue, get, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './firebase.js';



const searcForm = document.querySelector('form#search-form')
const searchInp = document.querySelector('form#search-form [name="search-inp"]')
const searchBtn = document.querySelector('form#search-form [name="search-btn"]')

searchBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const valueInp = searchInp.value
    const swiperSlider = document.querySelector('.swiper-slide .book_page')
    const swiperSliderPage = document.querySelector('.book_page .flex')



    onValue(ref(db, `kitablar/`), function (snapshot) {
        const data = Object.entries(snapshot.val())

        for (let [key, value] of data) {
            if (valueInp.includes(value.name)) {
                swiperSliderPage.innerHTML = ''
                swiperSlider.innerHTML = ''
                
                swiperSliderPage.innerHTML += `
                <div class="picture"><img src="${value.image}"></div>
                <div class="swiper_content_text">
                <h2>${value.name}</h2>
                <p class="auther">${value.author}</p>
                <p class="description">
                    ${value.description}
                </p>
                </div>
                `
                swiperSlider.append(swiperSliderPage)

            }
           
        }
    })
    
})
searchInp.innerHTML = ''