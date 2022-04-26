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

function tellJuliensName() {
    alert ("My full name is : Julien Pontbriand. Thanks for clicking me!");
}

const ccw = document.getElementById("ccw");
ccw.addEventListener("mouseover",()=>{
   ccw.style.backgroundColor = "5px 5px 2px black";
})

ccw.addEventListener("mouseleave",()=>{
   ccw.style.boxShadow = "0px 0px 0px";
})

// const ccw = document.getElementById("ccw");
// ccw.addEventListener("mouseover",()=>{
//    ccw.style.backgroundColor = "0,0,0";
// })
// ccw.addEventListener("mouseleave",()=>{
//    ccw.style.transform =  'rotate(-180deg)';
// })

function rotateCW(id){
    document.querySelector(id).style.transform = `rotate(360deg)`;
}

function rotateCCW(id){
    document.querySelector(id).style.transform = `rotate(0deg)`;
}

function moveskill1() {
    var elem = document.getElementById("innerprogressbar1");   
    var width = 0;
    var id = setInterval(frame, 13);
    
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } 
      else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("percent1").innerHTML = width * 1  + '%';
      }
    }
}

function moveskill2() {
    var elem = document.getElementById("innerprogressbar2");   
    var width = 0;
    var id = setInterval(frame, 13);
    
    function frame() {
      if (width >= 60) {
        clearInterval(id);
      } 
      else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("percent2").innerHTML = width * 1  + '%';
      }
    }
}
