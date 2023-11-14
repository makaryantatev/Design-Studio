"use strict"

function function1() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


let mybutton = document.getElementById("button1")

window.onscroll = function() {
    scrollfunc() 
}

function scrollfunc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
    } else (
        mybutton.style.display = "none"
    )
}


///////////////////

function imgFunction(img) {
    let img1 = document.getElementById('img1')
    let container = document.getElementById('container')
    img1.src = img.src
    container.style.display = 'block'
    let sc2 = document.getElementById('section2')
    sc2.style.display = 'none'
} 

///////////////////

let name1 = document.getElementById("name")
let email1 = document.getElementById("email")
let message1 = document.getElementById("message")

function function3() {
    alert("Continue with" + " " + name1.value + "?")
}
function function4() {
    alert("Continue with" + " " + email1.value + "?")
}
function function5() {
    alert("Continue with" + " " + meesage1.value + "?")
}
function function6() {
    alert("Are you sure you want to go Nicepage.com ?")
}

///////////////////



