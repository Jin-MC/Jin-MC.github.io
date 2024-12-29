let slideIndex = 1; //Declarando la variable "slideIndex"
showSlides(slideIndex); //Pasándole el valor de la variable "slideIndex" como parámetro a la función "showSlides"

// Creando la función plusSlides
function plusSlides(n) {
    // Sumando el valor del parámetro al valor de índice que tenía la variable "slideIndex"
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("imagen");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.transform = "translateX(" + (-100 * (slideIndex-1)) + "%)";
    }
}
function plusSlides1(n) {
    // Sumando el valor del parámetro al valor de índice que tenía la variable "slideIndex"
    showSlides1(slideIndex += n);
}

function showSlides1(n) {
    let slides = document.getElementsByClassName("imagen1");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.transform = "translateX(" + (-100 * (slideIndex-1)) + "%)";
    }
}