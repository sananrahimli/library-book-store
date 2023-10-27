import { ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from '../js/firebase.js';


let formContacts = document.querySelector('form#contactsForm');

formContacts.addEventListener('submit', function(e){
    e.preventDefault()  
    const objectContact = {
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        address: e.target.address.value,
        phone: e.target.phone.value,
        note: e.target.note.value,
        option: false
    }
    const snapshot = push(ref(db, '/contactSite'));
    set(ref(db, 'contactSite/' + snapshot.key), objectContact);

    alert('Təşəkkür edirik! Məktubunuz gəbul edildi!');
    formContacts.reset()
})