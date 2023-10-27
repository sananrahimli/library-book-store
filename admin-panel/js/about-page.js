

import {
    ref,
    set,
    get,
  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
  import { db } from "../../js/firebase.js";
  
  let namePage = document.querySelector("#namePage");
  let discriptionPage = document.querySelector("#descriptionPage");
  let urlPage = document.querySelector("#urlPage");
  let forumSubmitBtn = document.querySelector("#aboutForm");
  
  // ----------------- Melumatlarin Firebase gonderilmesi ---------------
  
  function clearInput() {
    namePage.value = "";
    discriptionPage.value = "";
    urlPage.value = "";
  }
  
  function aboutPageChange(namePage, discriptionPage, urlPage) {
    set(ref(db, "/aboutSite/about_page_name"), namePage);
    set(ref(db, "/aboutSite/about_description"), discriptionPage);
    set(ref(db, "/aboutSite/about_picture"), urlPage);
  }
  
  forumSubmitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    aboutPageChange(namePage.value, discriptionPage.value, urlPage.value);
    alert('Məlumatlar dəyişildi!')
    clearInput();
  });
  //--------------- Son ---------------------------------
  