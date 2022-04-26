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




// const ccw = document.getElementById("ccw");
// ccw.addEventListener("mouseover",()=>{
//    ccw.style.backgroundColor = "0,0,0";
// })
// ccw.addEventListener("mouseleave",()=>{
//    ccw.style.transform =  'rotate(-180deg)';
// })

// var rotation = 0;

// function rotateMeClockWise(){
//     rotation += 360;
//     if (rotation === 3600)
//     rotation = 0;
//     document.querySelector("#julienPicture").style.transform = `rotate(${rotation}deg)`;
//     document.getElementById("counter").innerHTML = rotation;
// }

// function rotateMeCounterClockWise(){
//     rotation -= 360;
//     if (rotation === -3600)
//     rotation = 0;
//     document.querySelector("#julienPicture").style.transform = `rotate(${rotation}deg)`;
//     document.getElementById("counter").innerHTML = rotation;
// }

// var counter = rotation;
// document.getElementById("counter").innerHTML = rotation;
