import { ref, set, onValue, get } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from '../../js/firebase.js';





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



// Comment kitablar

const commentsThreeHome = document.querySelector('#commentsThreeHome')
onValue(ref(db, 'kitablar/'), function (valueKateqoriyalar) {
  const butunKitabSayi = Object.entries(valueKateqoriyalar.val());
  // let arr_top = {}
  for (let [key, value] of butunKitabSayi) {
    //   arr_top[`${value.name}`] = `${Object.keys(value.comments).length}`
    if (value.comments === undefined) {

    } else {
      let kk = Object.keys(value.comments).length;
      let divTopKom = document.createElement('li');
      divTopKom.innerHTML = `
        <i>${kk}</i><h4>${value.name}</h4>
        `

      commentsThreeHome.appendChild(divTopKom)
    }

  }


});
