// // Function for Dropdown
// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//     dropdown[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var dropdownContent = this.nextElementSibling;
//         if (dropdownContent.style.display === "block") {
//             dropdownContent.style.display = "none";
//         } else {
//             dropdownContent.style.display = "block";
//         }
//     });
// }

// // Function for Mail Subscription in Footer
// function mailSent() {
//     let email = document.getElementById("email").value;

//     if (email != null) {
//         setTimeout(function () {
//             alert("Subscribed, you will receive daily tips on mail!");
//             document.getElementById("email").value = null;
//         }, 3000);
//     }
// };

// // 

// if (localStorage.getItem("bluemercuryCart") === null) {
//     localStorage.setItem("bluemercuryCart", JSON.stringify([]));
// };

// function addClickData(p) {
//     let ask = confirm("Add to Cart?")
//     if (ask) {
//         let access = localStorage.getItem("bluemercuryCart");
//         let cartData = JSON.parse(access);

//         let totalCount = 0;
//         for (let i = 0; i < cartData.length; i++) {
//             if (Object.values(cartData[i])[2] === p.name) {
//                 alert("Product is Already in the Cart!");
//             } else {
//                 totalCount++;
//             }
//         }

//         if (totalCount === cartData.length) {
//             cartData.push(p);
//             localStorage.setItem("bluemercuryCart", JSON.stringify(cartData));
//         }

//         if (p.name === "Anti-Aging Rentinol Serum") {
//             window.location.href = "product_details.html"
//         }
        
//     }
// }

