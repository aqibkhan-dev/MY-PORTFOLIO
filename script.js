// let s = document.querySelector(".btn");
// s.setAttribute("style", "background-color:red;");
// let l = document.querySelector(".logo");
// l.innerHTML = '<h1>hello</h1>';
// let newDiv = document.createElement('div');
// newDiv.className = 'pass';
// newDiv.id = 'word';
// var newDivPass = document.createTextNode('password alodlokklmcmkijijikmkmxwski.');
// newDiv.appendChild(newDivPass)


// var box = document.querySelector(".Contact");
// var f = document.querySelector('form');

// box.insertBefore(newDiv, f);

// function myMenuFunction(){
//     let menuBtn = document.querySelector('.navbar');
//     if(menuBtn.className === "navbar"){
//         menuBtn.className += "showNav";
//     } else{
//         menuBtn.className = "navbar"
//     }
// }

// let icon = document.getElementById("menu-icon");
// let nav = document.querySelector("nav");

// icon.addEventListener("click",()=>{
//     nav.classList.toggle("showNav");
   
// })

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('x');
    navbar.classList.toggle('active');
};
// window.onscroll = () =>{
//     section.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top >= offset && top <offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav ul li a[href '+ id + ']' ).classList.add(active);
//             });
//         };
//     });
// };