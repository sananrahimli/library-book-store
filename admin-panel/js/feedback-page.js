import { ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from '../../js/firebase.js';

const table = document.querySelector('.tableStyle tbody')


onValue(ref(db, 'contactSite/'), function(feedback){
    const userFeedback = Object.entries(feedback.val());
    let index = 1;
    table.innerHTML = ""
    for(let [key, value] of userFeedback) {
        let trBlock = document.createElement('tr')
        trBlock.innerHTML = `
        <td>${index++}</td>
        
                  <td>${value.fullname}</td>
                  <td>${value.address}</td>
                  <td>${value.email}</td>
                  <td>${value.phone}</td>
                  <td>${value.note}</td>
                  <td><a href="#"><span class="icon-trash-can-com"></span> Sil</a></td>
                  <td><button data-option="${value.option}" data-id="${key}" class="optionButton no"></button></td>`
        table.appendChild(trBlock)        
    }


    const btn_opt = document.querySelectorAll('.optionButton')
    for(let k of btn_opt) {
        let falseOption = k.dataset.option;
        
        if(falseOption === "false") {
            falseOption = 'true'
            k.addEventListener('click', function(e){
                e.preventDefault()
                
                set(ref(db, `contactSite/${k.dataset.id}/option`), falseOption);
            })
        }
    }
})


