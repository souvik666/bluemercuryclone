// Low To High
function lowToHigh() {
    let access = localStorage.getItem("bluemercuryProducts");
    let preSort = JSON.parse(access);

    let rat = [];

    for (let i = 0; i < preSort.length; i++) {
        rat.push(Object.values(preSort[i])[3]);
    }

    rat.sort();
    console.log(rat)

    let newArr = [];

    for (let i = 0; i < rat.length; i++) {
        for (let j = 0; j < preSort.length; j++) {
            if (rat[i] === Object.values(preSort[j])[3]) {
                newArr.push(preSort[j]);
            }
        }
    }

    document.getElementById("right-body").innerHTML = null;

    let mainDiv = document.getElementById("right-body");
    newArr.forEach(function (data) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = data.image;
        let p1 = document.createElement("p");
        p1.innerText = data.brand;
        let p2 = document.createElement("p");
        p2.innerText = data.name;
        let amount = data.price;
        let p3 = document.createElement("p");
        p3.innerText = `$${amount}`;

        div.append(img, p1, p2, p3);
        mainDiv.append(div);
    });
}

// Sort High To Low 
function highToLow() {
    let access = localStorage.getItem("bluemercuryProducts");
    let preSort = JSON.parse(access);

    let rat = [];

    for (let i = 0; i < preSort.length; i++) {
        rat.push(Object.values(preSort[i])[3]);
    }

    rat.sort();

    let rat1 = []

    for (let i = rat.length-1; i >= 0; i--) {
        rat1.push(rat[i]);
    }

    let newArr = [];

    for (let i = 0; i < rat1.length; i++) {
        for (let j = 0; j < preSort.length; j++) {
            if (rat1[i] === Object.values(preSort[j])[3]) {
                newArr.push(preSort[j]);
            }
        }
    }

    document.getElementById("right-body").innerHTML = null;

    let mainDiv = document.getElementById("right-body");
    newArr.forEach(function (data) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = data.image;
        let p1 = document.createElement("p");
        p1.innerText = data.brand;
        let p2 = document.createElement("p");
        p2.innerText = data.name;
        let p3 = document.createElement("p");
        p3.innerText = `$${data.price}`;

        div.append(img, p1, p2, p3);
        mainDiv.append(div);
    });
}

// For Sorting
function sorting(a) {
    if (a === "ltoh") {
       lowToHigh();
    } else if (a === "htol") {
        highToLow();
    } else if (a === "newarrivals") {
        document.getElementById("right-body").innerHTML = null;
        addData();
    }
}

// Function for Dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Adding Products in HTML
let accessing = localStorage.getItem("bluemercuryProducts");
let productData = JSON.parse(accessing);
let z = 0;

function addData() {
    let mainDiv = document.getElementById("right-body");

    productData.forEach(function (product) {
        let div = document.createElement("div");
        div.setAttribute("id", `a${z}`);
        z++;

        let image = document.createElement("img");
        image.src = product.image;

        let p1 = document.createElement("p");
        p1.innerText = product.brand;

        let p2 = document.createElement("p");
        p2.innerText = product.name;

        let price = `$${product.price}`
        let p3 = document.createElement("p");
        p3.innerText = price;

        div.append(image, p1, p2, p3);
        div.onclick = function () {
            addClickData(product)
        };
        mainDiv.append(div);
        
    })
}
addData();

// For Brand 1 Sorting
function kiehl() {
    let access = localStorage.getItem("bluemercuryProducts");
    let preSort = JSON.parse(access);

    let dummy = [];
    for (let i = 0; i < preSort.length; i++) {
        if (Object.values(preSort[i])[1] === "KIEHL'S SINCE 1851") {
            dummy.push(preSort[i])
        }
    }

    document.getElementById("right-body").innerHTML = null;

    let mainDiv = document.getElementById("right-body");
    dummy.forEach(function (data) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = data.image;
        let p1 = document.createElement("p");
        p1.innerText = data.brand;
        let p2 = document.createElement("p");
        p2.innerText = data.name;
        let amount = data.price;
        let p3 = document.createElement("p");
        p3.innerText = `$${amount}`;

        div.append(img, p1, p2, p3);
        mainDiv.append(div);
    });
}

// For Brand 2 Sorting
function bumble() {
    let access = localStorage.getItem("bluemercuryProducts");
    let preSort = JSON.parse(access);

    let dummy = [];
    for (let i = 0; i < preSort.length; i++) {
        if (Object.values(preSort[i])[1] === "BUMBLE AND BUMBLE") {
            dummy.push(preSort[i])
        }
    }

    document.getElementById("right-body").innerHTML = null;

    let mainDiv = document.getElementById("right-body");
    dummy.forEach(function (data) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = data.image;
        let p1 = document.createElement("p");
        p1.innerText = data.brand;
        let p2 = document.createElement("p");
        p2.innerText = data.name;
        let amount = data.price;
        let p3 = document.createElement("p");
        p3.innerText = `$${amount}`;

        div.append(img, p1, p2, p3);
        mainDiv.append(div);
    });
}

// For Brand 3 Sorting
function tom() {
    let access = localStorage.getItem("bluemercuryProducts");
    let preSort = JSON.parse(access);

    let dummy = [];
    for (let i = 0; i < preSort.length; i++) {
        if (Object.values(preSort[i])[1] === "TOM FORD") {
            dummy.push(preSort[i])
        }
    }

    document.getElementById("right-body").innerHTML = null;

    let mainDiv = document.getElementById("right-body");
    dummy.forEach(function (data) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = data.image;
        let p1 = document.createElement("p");
        p1.innerText = data.brand;
        let p2 = document.createElement("p");
        p2.innerText = data.name;
        let amount = data.price;
        let p3 = document.createElement("p");
        p3.innerText = `$${amount}`;

        div.append(img, p1, p2, p3);
        mainDiv.append(div);
    });
}

// For Brand 4 Sorting
function chan() {
    let access = localStorage.getItem("bluemercuryProducts");
    let preSort = JSON.parse(access);

    let dummy = [];
    for (let i = 0; i < preSort.length; i++) {
        if (Object.values(preSort[i])[1] === "CHANTECAILLE") {
            dummy.push(preSort[i])
        }
    }

    document.getElementById("right-body").innerHTML = null;

    let mainDiv = document.getElementById("right-body");
    dummy.forEach(function (data) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = data.image;
        let p1 = document.createElement("p");
        p1.innerText = data.brand;
        let p2 = document.createElement("p");
        p2.innerText = data.name;
        let amount = data.price;
        let p3 = document.createElement("p");
        p3.innerText = `$${amount}`;

        div.append(img, p1, p2, p3);
        mainDiv.append(div);
    });
}

// For Brand 5 Sorting
function skin() {
    let access = localStorage.getItem("bluemercuryProducts");
    let preSort = JSON.parse(access);

    let dummy = [];
    for (let i = 0; i < preSort.length; i++) {
        if (Object.values(preSort[i])[1] === "111SKIN") {
            dummy.push(preSort[i])
        }
    }

    document.getElementById("right-body").innerHTML = null;

    let mainDiv = document.getElementById("right-body");
    dummy.forEach(function (data) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = data.image;
        let p1 = document.createElement("p");
        p1.innerText = data.brand;
        let p2 = document.createElement("p");
        p2.innerText = data.name;
        let amount = data.price;
        let p3 = document.createElement("p");
        p3.innerText = `$${amount}`;

        div.append(img, p1, p2, p3);
        mainDiv.append(div);
    });
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
};

// 

if (localStorage.getItem("bluemercuryCart") === null) {
    localStorage.setItem("bluemercuryCart", JSON.stringify([]));
};

function addClickData(p) {
    let ask = confirm("Add to Cart?")
    if (ask) {
        let access = localStorage.getItem("bluemercuryCart");
        let cartData = JSON.parse(access);

        let totalCount = 0;
        for (let i = 0; i < cartData.length; i++) {
            if (Object.values(cartData[i])[2] === p.name) {
                alert("Product is Already in the Cart!");
            } else {
                totalCount++;
            }
        }

        if (totalCount === cartData.length) {
            cartData.push(p);
            localStorage.setItem("bluemercuryCart", JSON.stringify(cartData));
        }

        if (p.name === "Anti-Aging Rentinol Serum") {
            window.location.href = "product_details.html"
        }
        
    }
}

