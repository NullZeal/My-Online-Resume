var slideIndex = 1;     // slides indexed from 1

showSlides(slideIndex);
automaticChange();

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }   // if beyond the last one, go to the first one
    if (n < 1) { slideIndex = slides.length }   // if before the first one, go to the last one

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function automaticChange() {
    slideIndex++;
    showSlides(slideIndex);
    timeout = setTimeout(automaticChange, 8000);   // call again automaticChange() after 7s
}

var rotation = 0;

function rotateMeClockWise(){
    rotation += 90;
    if (rotation === 360)
    rotation = 0;
    document.querySelector("#imgz").style.transform = `rotate(${rotation}deg)`;
}

function rotateMeCounterClockWise(){
    rotation -= 90;
    if (rotation === 0)
    rotation = 360;
    document.querySelector("#imgz").style.transform = `rotate(${rotation}deg)`;
}