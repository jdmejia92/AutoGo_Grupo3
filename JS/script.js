const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)


function fixNav () {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



//Fetch para cargar el contenido de overlay
fetch('PAGES/overlay.html')
.then(response => response.text())
.then(data => {
  document.getElementById('overlay-container').innerHTML = data;
});

// Mostrar el overlay
function showOverlay(type) {
const overlay = document.getElementById("overlay");
const signUpForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

if (type === "signup") {
  signUpForm.style.display = "block";
  loginForm.style.display = "none";
} else {
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
}

overlay.style.display = "flex";
}

// Función para cerrar el overlay
function closeOverlay() {
const overlay = document.getElementById("overlay");
overlay.style.display = "none";
}