var elInputNumber = document.querySelector("#js-number");
var elButton = document.querySelector("#js-button");

// people
var elPeopleHour = document.querySelector(".people__hour-span");
var elPeopleMinute = document.querySelector(".people__minute-span");
var elPeopleSecond = document.querySelector(".people__second-span");

// bicycle
var elBicycleHour = document.querySelector(".bicycle__hour-span");
var elBicycleMinute = document.querySelector(".bicycle__minute-span");
var elBicycleSecond = document.querySelector(".bicycle__second-span");

// car
var elCarHour = document.querySelector(".car__hour-span");
var elCarMinute = document.querySelector(".car__minute-span");
var elCarSecond = document.querySelector(".car__second-span");

// plane
var elPlaneHour = document.querySelector(".plane__hour-span");
var elPlaneMinute = document.querySelector(".plane__minute-span");
var elPlaneSecond = document.querySelector(".plane__second-span");

elButton.addEventListener("click", ()=> {
    var inputValue = elInputNumber.value;

    // people
    var peopleHour = (inputValue / 3).toFixed(2);
    elPeopleHour.innerHTML = parseInt(peopleHour);

    var peopleMinute = ((peopleHour - Math.floor(peopleHour)) * 60).toFixed(2);
    elPeopleMinute.innerHTML = parseInt(peopleMinute);

    var peopleSecond = ((peopleMinute - Math.floor(peopleMinute)) * 60).toFixed();
    elPeopleSecond.innerHTML = peopleSecond;

    // bicycle
    var bicycleHour = (inputValue / 20.1).toFixed(2);
    elBicycleHour.innerHTML = parseInt(bicycleHour);

    var bicycleMinute = ((bicycleHour - Math.floor(bicycleHour)) * 60).toFixed(2);
    elBicycleMinute.innerHTML = parseInt(bicycleMinute);

    var bicycleSecond = ((bicycleMinute - Math.floor(bicycleMinute)) * 60).toFixed();
    elBicycleSecond.innerHTML = bicycleSecond;
    
    // car
    var carHour = (inputValue / 70).toFixed(2);
    elCarHour.innerHTML = parseInt(carHour);

    var carMinute = ((carHour - Math.floor(carHour)) * 60).toFixed(2);
    elCarMinute.innerHTML = parseInt(carMinute);

    var carSecond = ((carMinute - Math.floor(carMinute)) * 60).toFixed();
    elCarSecond.innerHTML = carSecond;


    // plane
    var planeHour = (inputValue / 800).toFixed(2);
    elPlaneHour.innerHTML = parseInt(planeHour);

    var planeMinute = ((planeHour - Math.floor(planeHour)) * 60).toFixed(2);
    elPlaneMinute.innerHTML = parseInt(planeMinute);

    var planeSecond = ((planeMinute - Math.floor(planeMinute)) * 60).toFixed();
    elPlaneSecond.innerHTML = planeSecond;
});