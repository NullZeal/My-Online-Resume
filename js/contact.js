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


function submit1() {
    alert ("Submit successful!");
}

document.getElementById('newUsername').addEventListener("change", checkInput);