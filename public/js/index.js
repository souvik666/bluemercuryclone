// right slide start

function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
// right slide end

// Products Data Starts Here
let bluemercuryData = [
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3605972610010-1_235x.jpg?v=1629489864",
        brand: "KIEHL'S SINCE 1851",
        name: "Anti-Aging Rentinol Serum",
        price: 60,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-656509713714-1_235x.jpg?v=1628259400",
        brand: "CHANTECAILLE",
        name: "SeaScreen 30",
        price: 69,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280375507-1_235x.jpg?v=1628194918",
        brand: "111SKIN",
        name: "Firming Mask",
        price: 15,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-85oz-685428028913-1_235x.jpg?v=1627423091",
        brand: "BUMBLE AND BUMBLE",
        name: "Blonde Shampoo",
        price: 31,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3605972256249-1_235x.jpg?v=1620673588",
        brand: "KIEHL'S SINCE 1851",
        name: "Skin-Strengthening Serum",
        price: 81,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-656509711000-1_235x.jpg?v=1623477013",
        brand: "CHANTECAILLE",
        name: "Orange Flower Water",
        price: 68,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-67oz-685428028944-1_235x.jpg?v=1627422903",
        brand: "BUMBLE AND BUMBLE",
        name: "Blonde Conditioner",
        price: 67,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280375514-1_235x.jpg?v=1628194928",
        brand: "111SKIN",
        name: "Blemish Mask",
        price: 29,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3605972401267-1_235x.jpg?v=1628027410",
        brand: "Facial Fuel for Men",
        name: "Skin-Strengthening Serum",
        price: 55,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-cheetah-656509172023-1_235x.jpg?v=1629447687",
        brand: "CHANTECAILLE",
        name: "Eye Shade",
        price: 51,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-685428028258-1_235x.jpg?v=1627070973",
        brand: "BUMBLE AND BUMBLE",
        name: "Repair Treatment",
        price: 38,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-nudedip-888066035118-1_235x.jpg?v=1629821185",
        brand: "TOM FORD",
        name: "Eye Color Quad",
        price: 89,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3605972453211-1_235x.jpg?v=1625861641",
        brand: "Facial Oil-Free Gel",
        name: "Skin-Strengthening Serum",
        price: 32,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-685428029507-1_235x.jpg?v=1627070969",
        brand: "BUMBLE AND BUMBLE",
        name: "Repair Styler",
        price: 34,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280375491-1_235x.jpg?v=1628194932",
        brand: "111SKIN",
        name: "Recovery Mask",
        price: 92,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-10ml-888066122214-1_235x.jpg?v=1629727013",
        brand: "TOM FORD",
        name: "Leather Parfum",
        price: 65,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280375521-1_235x.jpg?v=1628194937",
        brand: "111SKIN",
        name: "Express Mask",
        price: 75,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-20treatments-817237011415-1.jpg?v=1628281569",
        brand: "M-61",
        name: "PowerGlow Peel",
        price: 36,
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060534510043-1.jpg",
        brand: "M-61",
        name: "Boost LED Mask",
        price: 97,
    },
]

// Storing Product Data on Local Storage
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

