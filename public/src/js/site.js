let btnGetUserLocation = document.getElementById("btnUserLocationData");
let userInputValue = document.getElementById("userInput").value;

btnGetUserLocation.addEventListener("click", function() {
  if ("geolocation" in navigator) {
    console.log("geolocation is supported..");

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
    });
  }
});
