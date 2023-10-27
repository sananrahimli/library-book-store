
import { ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from '../../js/firebase.js';


let catContentAll = document.querySelector('.kateqoriyalar__items .json')
onValue(ref(db, 'kateqoriya/'), function(valueKateqoriyalar){
    const butunKateqoriyalar = Object.entries(valueKateqoriyalar.val());
    for(let [key, value] of butunKateqoriyalar) {

        let imageCate;
        if(value.image == "") {
            imageCate = 'https://mmpd.ru/public/frontend/amazy/img/63a097e2368bc.png'
        } else {
            imageCate = value.image;
        }



        let catLi = document.createElement('li');

        catLi.innerHTML = `
        <a href="" class="item">
                      <div class="picture"><img src="${imageCate}" alt=""></div>
                      <p class="name">${value.name}</p>
                    </a>
       
        `;
        catContentAll.appendChild(catLi)




    }
  });




//   Index books All

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






//   Kitab sayi
let barBooks = document.querySelector('.stat__base');
let barBooks_active = barBooks.querySelector('i.active');
let numSay;

onValue(ref(db, 'kitablar/'), function (valueKateqoriyalar) {
  const butunKitabSayi = Object.keys(valueKateqoriyalar.val());

  numSay = butunKitabSayi.length;

  // Устанавливаем ширину элемента barBooks_active после получения numSay
  barBooks_active.style.width = numSay + '%';
  barBooks_active.querySelector('span').innerHTML = numSay;
});




// Top kitablar

const topThreeHome = document.querySelector('#topThreeHome')
onValue(ref(db, 'kitablar/'), function (valueKateqoriyalar) {
  const butunKitabSayi = Object.entries(valueKateqoriyalar.val());
  let arr_top = {}
  for (let [key, value] of butunKitabSayi) {
    arr_top[`${value.name}`] = `${value.look}`
  }
  const keyValueArray = Object.entries(arr_top);

  keyValueArray.sort((a, b) => b[1] - a[1]);

  const topThree = keyValueArray.slice(0, 3);


  topThree.forEach(([key, value], index) => {
    const li = document.createElement("li");

    const i = document.createElement("i");
    i.textContent = index + 1;
    li.appendChild(i);

    const h4 = document.createElement("h4");
    h4.textContent = key;
    li.appendChild(h4);

    const p = document.createElement("p");
    p.className = "auther";
    p.textContent = `Baxış sayı: ${value}`;
    li.appendChild(p);

    topThreeHome.appendChild(li);
  });
});
