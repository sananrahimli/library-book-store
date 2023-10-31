import { ref, set, onValue, get, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from './firebase.js';



const searchForm = document.querySelector('form#search-form')
const searchInp = document.querySelector('form#search-form [name="search-inp"]')

searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const valueInp = searchInp.value
    const swiperWrapper = document.querySelector('.swiper-wrapper')
    swiperWrapper.innerHTML = ''



    onValue(ref(db, `kitablar/`), function (snapshot) {
        const data = Object.entries(snapshot.val())
        const regEx = new RegExp("^" + valueInp, "gi")
        

        for (let [key, value] of data) {
            
           
            
            let swiperSlide = document.createElement('div')
            swiperSlide.classList.add('swiper-slide')
            
           




            if (regEx.test(value.name)) {
                
               



                swiperSlide.innerHTML = `
                
                
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
                
            
                `
                swiperWrapper.append(swiperSlide)


            }
            



        }
        

    })
    
    searchInp.value = ''


})
