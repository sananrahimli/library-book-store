/** @format */

import {
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from "../js/firebase.js";

/** @format */
function inrHTMLvalue() {
  const aboutPageNameInrHtml = document.querySelector(".aboutPageName");
  const aboutPageDescrpInrHtml = document.querySelector(".description");

  var img = document.getElementById("aboutPictureSRC");

  onValue(ref(db, "/aboutSite/about_page_name"), (snapshot) => {
    const pageNme = snapshot.val();
    aboutPageNameInrHtml.innerHTML = pageNme;
  });
  onValue(ref(db, "/aboutSite/about_description"), (snapshot) => {
    const pageDescrptn = snapshot.val();
    aboutPageDescrpInrHtml.innerHTML = pageDescrptn;
  });

  onValue(ref(db, "aboutSite/about_picture"), (snapshot) => {
    const pageImageUrl = snapshot.val();
    img.src = pageImageUrl;
  });
}

inrHTMLvalue();
