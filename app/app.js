import * as MODEL from "./model.js";

function route() {
    // gets hashtag and name after
    let hashTag = window.location.hash;
    // replaces hashtag with nothing
    let pageID = hashTag.replace("#", "");

    // if there's nothing in the URL then it passes in 'home'
    if(pageID == "") {
        MODEL.changePage("home");
    } else {
        MODEL.changePage(pageID);
    }
}

function initListeners() {
    // $("nav a").click((e) =>{
    //     console.log("click " + btnID); 
    // });
}


function initApp() {
    // listening for a 'hashchange', calls route when the hastag does change
    $(window).on("hashchange", route)
    route();
}

$(document).ready(function () {
    initApp();
    initListeners();
});


// greensock/gsap stuff
let myNav = document.getElementsByClassName("links");
let myLogo = document.getElementsByClassName("logo");
TweenMax.from(myNav, { duration: 3, opacity: 0, x: 50 });
TweenMax.from(myLogo, { duration: 3, opacity: 0, x: 50 });