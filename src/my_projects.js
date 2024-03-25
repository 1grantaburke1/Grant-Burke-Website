let RBCSection = document.querySelector(".RBC_container");
let RBCInfo = RBCSection.querySelector(".information");
let RBCHeader = RBCSection.querySelector(".information > h2 a");

let RBCMarker = RBCSection.querySelector(".information .marker");
let hrMarker = RBCSection.querySelector(".information hr");

let removableParas = RBCSection.querySelectorAll(".information .removable");

let logoImg = document.querySelector("nav img");
logoImg.setAttribute("src", "/assets/GB_blue_logo.jpg");

if (window.innerWidth <= 980) {
    RBCHeader.style.textDecoration = "none";
    RBCHeader.style.pointerEvents = "none";
    RBCHeader.style.cursor = "default";

    removableParas.forEach((para) => {
        RBCInfo.removeChild(para);
    });

    let newPara = document.createElement("p");
    let newBold = document.createElement("b");

    newBold.textContent = "Available to View?: ";
    newPara.appendChild(newBold);
    newPara.append("No");
    RBCMarker.before(newPara);

    newPara = document.createElement("p");
    newBold = document.createElement("b");

    newBold.textContent = "Link to webpage: ";
    newPara.appendChild(newBold);
    newPara.append("Unavailable on Mobile");
    RBCMarker.after(newPara);
}
