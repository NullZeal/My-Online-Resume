const ccw = document.getElementById("ccw");
ccw.addEventListener("mouseover",()=>{
   ccw.style.backgroundColor = "5px 5px 2px black";
})

ccw.addEventListener("mouseleave",()=>{
   ccw.style.boxShadow = "0px 0px 0px";
})

function rotateCW(id){
    document.querySelector(id).style.transform = `rotate(360deg)`;
}

function rotateCCW(id){
    document.querySelector(id).style.transform = `rotate(0deg)`;
}

function tellJuliensName() {
    alert ("My full name is : Julien Pontbriand. Thanks for clicking me!");
}