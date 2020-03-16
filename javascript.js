window.addEventListener("keypress", (event) => {
  backgroundChange(event)});

function backgroundChange(event) {
  if (event.key === "k") {
    body.style.backgroundImage = "url('https://www.wallpaperup.com/uploads/wallpapers/2013/12/26/204827/d3535c07a6de2bc6d0e75788b844dd5a.jpg')";
 }
 else if(event.key === "o"){
 body.style.backgroundImage = "url('https://images-na.ssl-images-amazon.com/images/I/81zMH11PiKL._AC_SL1500_.jpg')";
}
}

var container=document.getElementById("container");
var bird = document.getElementById('bird');

container.addEventListener('click', (event) => {
  moveBird(event)
});

function moveBird(event){
let xPosition = event.clientX- container.getBoundingClientRect().left - (bird.clientWidth /2);
let yPosition = event.clientY-container.getBoundingClientRect().top - (bird.clientHeight /2);
bird.style.left = xPosition + "px";
bird.style.top = yPosition +'px';
}

let hat= document.getElementById("hat");

hat.addEventListener("mousemove", (event) => {changeHat(event)});

let hat2= document.getElementById("hat2");

hat2.addEventListener("mousemove", (event) => {changeHat(event)});

function changeHat(event) {
 hat.style.fill="blue";
 hat2.style.fill="blue"
}
