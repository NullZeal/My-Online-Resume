// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 45.491657766855326, lng: -73.58155140432127 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

document.getElementById('newUsername').addEventListener("change", checkInput);


function validateForm() {

    var nameToValidate = document.forms["myform"]["name"].value;
    var emailToValidate = document.forms["myform"]["email"].value;
    var phoneToValidate = document.forms["myform"]["phone"].value;

    var regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var regexphone = /^(\+\d{1,3}[ ])?(\(\d{3}\)[ ]|\d{3}-)\d{3}-\d{4}$/;
    
    if (nameToValidate == ""){
        alert("Please input a name!");
        return false;
    }

    if (!regexemail.test(emailToValidate)){
        alert("Please input a valid email!");
        return false;
    }

    if (!regexphone.test(phoneToValidate)){
        alert("Please input a valid phone number!");
        return false;
    }
}