//hent knappen som skal aktivere noe
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click",function(){
 // hente element som skal bli synlig
 const navList = document.querySelector("#navList");
 console.log(navList);

 navList.classList.remove("hidden");
 navList.classList.add("navList");
})

const sunIcon = document.querySelector("#sunIcon");
console.log(sunIcon);

sunIcon.addEventListener("click",function(){
    const body = document.querySelector("body");
    console.log(body);

    body.classList.remove("light");
    body.classList.add("dark");
})