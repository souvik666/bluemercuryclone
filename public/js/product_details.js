function add() {
    var d = document.querySelector("input");
    var c = d.value;
    d.innerHTML = null;
    input = Number(c);
    input++;
    d.value = input;
}
function remove() {
    var d = document.querySelector("input");
    var c = d.value;
    d.innerHTML = null;
    input = Number(c);
    if (input === 1) {
        input = c;
    } else {
        input--;
    }
    d.value = input;
}

var slideLeft = 1;
var slideRight = 4;

// Function to Display only Four Products in Slider
function slideShow() {
    for (let i = slideLeft; i <= slideRight; i++) {
        document.getElementById("sc" + i).style.display = "inline-block";
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