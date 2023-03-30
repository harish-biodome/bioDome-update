
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {

    if (btn1.innerText === "ON") {
        btn1.innerText = "OFF";
    } else {
        btn1.innerText = "ON";
    }
});

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {

    if (btn2.innerText === "ON") {
        btn2.innerText = "OFF";
    } else {
        btn2.innerText = "ON";
    }
});
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {

    if (btn3.innerText === "ON") {
        btn3.innerText = "OFF";
    } else {
        btn3.innerText = "ON";
    }
});


/*
var date = new Date();
var current_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
document.getElementById("p1").innerHTML = current_date;


var date = new Date();
var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById("p2").innerHTML = current_time;



// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
// let summary = document.querySelector(".summary");
// let loc = document.querySelector(".location");
// let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            // API ID
            const api = "6d055e39ee237af35ca066f35474e9df";

            // API URL
            const base =
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
                `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

            // Calling the API
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    temperature.textContent =
                        Math.floor(data.main.temp - kelvin) + "°C";
                    summary.textContent = data.weather[0].description;
                    loc.textContent = data.name + "," + data.sys.country;
                    let icon1 = data.weather[0].icon;
                    
                });
        });
    }
});
*/


// ------sticky navbar------

window.onscroll = function() {myFunction()};
  
var navlist = document.getElementById("navlist");
var sticky = navlist.offsetTop;

/* Function to stick the nav bar */
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navlist.classList.add("sticky")
    }
    else {
        navlist.classList.remove("sticky");
    }
}



// ------ accuweahter-----------------

