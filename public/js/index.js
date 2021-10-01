// right slide start

function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
// right slide end

let bluemercuryDataConvert = JSON.stringify(bluemercuryData);
localStorage.setItem("bluemercuryProducts", bluemercuryDataConvert);

// Functions for Sliders
var slideLeft = 1;
var slideRight = 4;
var slideLeft1 = 1;
var slideRight1 = 4;

// Function to Display only Four Products in Slider
function slideShow() {
    for (let i = slideLeft; i <= slideRight; i++) {
        document.getElementById("sc" + i).style.display = "inline-block";
    }
    for (let i = slideLeft; i <= slideRight; i++) {
        document.getElementById("scc" + i).style.display = "inline-block";
    }
}

// Move First Slide Right
function slideMoveRight() {
    if (slideRight <= 7) {
        document.getElementById("sc" + slideLeft).style.display = "none";
        slideLeft += 1;
        slideRight += 1;

        for (let i = slideLeft; i <= slideRight; i++) {
            document.getElementById("sc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}

// Move Second Slider Right
function slideMoveRight1() {
    if (slideRight1 <= 7) {
        document.getElementById("scc" + slideLeft1).style.display = "none";
        slideLeft1 += 1;
        slideRight1 += 1;

        for (let i = slideLeft1; i <= slideRight1; i++) {
            document.getElementById("scc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}

// Move First Slider Left
function slideMoveLeft() {
    if (slideLeft >= 2) {
        document.getElementById("sc" + slideRight).style.display = "none";
        slideLeft -= 1;
        slideRight -= 1;

        for (let i = slideLeft; i <= slideRight; i++) {
            document.getElementById("sc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}

// Move Second Slider Left
function slideMoveLeft1() {
    if (slideLeft1 >= 2) {
        document.getElementById("scc" + slideRight1).style.display = "none";
        slideLeft1 -= 1;
        slideRight1 -= 1;

        for (let i = slideLeft1; i <= slideRight1; i++) {
            document.getElementById("scc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}

// Function for Mail Subscription in Footer
function mailSent() {
    let email = document.getElementById("email").value;

    if (email != null) {
        setTimeout(function () {
            alert("Subscribed, you will receive daily tips on mail!");
            document.getElementById("email").value = null;
        }, 3000);
    }
}

//For Slider
let counter = 1;

setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 3000);

