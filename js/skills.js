moveskill1();
moveskill2();
moveskill3();
moveskill4();


function moveskill1() {
    var elem = document.getElementById("innerprogressbar1");   
    var width = 0;
    var id = setInterval(frame, 8);
    
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
    var id = setInterval(frame, 15);
    
    function frame() {
      if (width >= 75) {
        clearInterval(id);
      } 
      else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("percent2").innerHTML = width * 1  + '%';
      }
    }
}

function moveskill3() {
    var elem = document.getElementById("innerprogressbar3");   
    var width = 0;
    var id = setInterval(frame, 3);
    
    function frame() {
      if (width >= 70) {
        clearInterval(id);
      } 
      else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("percent3").innerHTML = width * 1  + '%';
      }
    }
}

function moveskill4() {
    var elem = document.getElementById("innerprogressbar4");   
    var width = 0;
    var id = setInterval(frame, 13);
    
    function frame() {
      if (width >= 85) {
        clearInterval(id);
      } 
      else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("percent4").innerHTML = width * 1  + '%';
      }
    }
}