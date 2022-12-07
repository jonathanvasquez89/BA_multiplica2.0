// Form-Active-BTN
document.getElementById("btn_registro").addEventListener("click", registro);
document.getElementById("btn_login").addEventListener("click", iniciarSesion);

// reponsive
window.addEventListener("resize", widthpage);

// Declaracion de variables
var contenedorLoginRegistro = document.querySelector(".contenedor__login-registro");
var formularioLogin = document.querySelector(".formulario-login");
var formularioRegistro = document.querySelector(".formulario-registro");
var bgFormLogin = document.querySelector(".bg_form-login");
var bgFormRegistro = document.querySelector(".bg_form-registro");

// funciones
function widthpage() {
    if (window.innerWidth > 860) {
        bgFormLogin.style.display = "block";
        bgFormRegistro.style.display = "block";
    } else {
        bgFormRegistro.style.display = "block";
        bgFormRegistro.style.opacity = "1";
        bgFormLogin.style.display = "none";
        formularioLogin.style.display = "block";
        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "0px";
    }
}
widthpage();

function iniciarSesion() {
    if (window.innerWidth > 860) {
        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "10px";
        formularioLogin.style.display = "block";
        bgFormRegistro.style.opacity = "1";
        bgFormLogin.style.opacity = "0";
    } else { 
        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "0px";
        formularioLogin.style.display = "block";
        bgFormRegistro.style.display = "block";
        bgFormLogin.style.display = "none";
    }
}

function registro() {
    if (window.innerWidth > 860) {
        formularioRegistro.style.display = "block";
        contenedorLoginRegistro.style.left = "440px";
        formularioLogin.style.display = "none";
        bgFormRegistro.style.opacity = "0";
        bgFormLogin.style.opacity = "1";
    } else {
        formularioRegistro.style.display = "block";
        contenedorLoginRegistro.style.left = "0px";
        formularioLogin.style.display = "none";
        bgFormRegistro.style.display = "none";
        bgFormLogin.style.display = "block";
        bgFormLogin.style.opacity = "1";
    }
}
