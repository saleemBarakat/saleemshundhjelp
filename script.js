

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
}

const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

const wrapper = document.createElement('div');

wrapper.setAttribute('class', 'wrapper');

app.appendChild(container);
container.appendChild(wrapper);


const wordpress = document.createElement('div');
wordpress.setAttribute('class', 'wordpress');

const h1 = document.createElement('h1');
h1.setAttribute('class', 'record-title')
h1.textContent = "saleem Barakat";

const p = document.createElement('p');
p.textContent = "Ålder: 20 år";
const p1 = document.createElement('p');
p1.textContent = "Adress: Helsingborgsgatan 10B";
const p2 = document.createElement('p');
p2.textContent = "Postnummer: 252 52";
const p3 = document.createElement('p');
p3.textContent = "Stad: Helsingborg";
const p4 = document.createElement('p');
p4.textContent = "Land: Sverige";
const p5 = document.createElement('p');
p5.textContent = "Nuvarande sysselsättning: Front-End developer";

wrapper.appendChild(wordpress);
wordpress.appendChild(h1);
wordpress.appendChild(p);
wordpress.appendChild(p1);
wordpress.appendChild(p2);
wordpress.appendChild(p3);
wordpress.appendChild(p4);
wordpress.appendChild(p5);


