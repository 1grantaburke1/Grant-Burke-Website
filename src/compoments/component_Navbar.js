//get the elements in navbar
let navBar = document.querySelector("nav");
let logo = document.querySelector(".logo");
let navContainer = document.querySelector(".navigation");
let links = document.querySelectorAll(".navigation > li");

let navbarToggle = document.querySelector(".toggle_nav");

let toggleArrowIcon = document.querySelector(".toggle_nav > p");
let toggleHamburgerIcon = document.querySelector(".hamburger_btn");

// Determine navbarToggle btn's icon based on width
if (window.innerWidth <= 974) {
    toggleArrowIcon.style.display = "none";
    toggleHamburgerIcon.style.display = "block";
} else {
    toggleArrowIcon.style.display = "block";
    toggleHamburgerIcon.style.display = "none";
}

//Empty space at the top of screen.
let emptySpace = document.querySelector(".empty");
let startingNavHeight = navBar.offsetHeight;

// setTimeout(() => {
//     startingNavHeight = navBar.offsetHeight;
//     emptySpace.style.height = startingNavHeight + "px";
// }, 10);
emptySpace.style.height = startingNavHeight + "px";
navBar.style.width = "100vw";

let toggleShown = false;
let navbarDown = true;
let belowMark = false;
window.addEventListener("scroll", () => {
    // Mobile Widths
    if (this.innerWidth <= 974) {
        // Exiting Empty space
       if (this.scrollY > 60) {
            ShrinkNavBar();
        } else if (this.scrollY <= 60) {
            GrowNavBar();
        }

        if ((this.scrollY > 60) & (this.scrollY <= startingNavHeight - 70)) {
            navBar.style.width = "100%";
        }

        if (this.scrollY <= startingNavHeight - 70) {
            belowMark = false;
            navbarToggle.style.top = "-80px";
        }

        if (this.scrollY > startingNavHeight - 70) {
            if (belowMark == false) {
                HideNavBar();
                navbarDown = false;
            }

            belowMark = true;
            navbarToggle.style.top = "-20px";
        }

        // Entering Empty space
        if (this.scrollY < startingNavHeight - 75) {
            ShowNavBar();
            navbarDown = true;
        }

        if (this.scrollY < 50) {
            GrowNavBar();
        }

        return;
    }

    //Desktop Widths
    if (this.scrollY > 0) {
        emptySpace.style.height = "0px";
    }

    if (this.scrollY == 0) {
        GrowNavBar();
        return;
    }

    ShrinkNavBar();
});

navbarToggle.addEventListener("click", () => {
    if (navbarDown == true) {
        if (this.innerWidth > 974) {
            emptySpace.style.height = "0px";
        }

        HideNavBar();

        navbarToggle.style.top = "-35px";
        setTimeout(() => {
            navbarToggle.style.top = "-20px";

            toggleArrowIcon.textContent = "\u2193";
        }, 150);
        navbarDown = false;
        return;
    }

    if (this.innerWidth > 974) {
        emptySpace.style.height = startingNavHeight + "px";
    }
    ShowNavBar();

    if (window.scrollY == 0) {
        navbarToggle.style.top = "-80px";
        toggleArrowIcon.textContent = "\u2191";
        navbarDown = true;
        return;
    }

    navbarToggle.style.top = "-1px";
    setTimeout(() => {
        navbarToggle.style.top = "-20px";
        toggleArrowIcon.textContent = "\u2191";
    }, 150);
    navbarDown = true;
});

function ShrinkNavBar() {
    if (toggleShown == false) {
        navbarToggle.style.top = "-20px";
        toggleShown = true;
    }

    links.forEach((link) => {
        link.classList.add("shrink_navigation");
    });

    logo.style.display = "none";
    navContainer.style.margin = "5px";
    navBar.style.width = "fit-content";

    if (window.innerWidth > 974) {
        navBar.style.borderBottomLeftRadius = "20px";
        navBar.style.right = "0";
    } else {
        navBar.style.right = "0vw";

        navContainer.style.display = "flex";
        navContainer.style.flexDirection = "column";
        navContainer.style.marginRight = "100px";
        navBar.style.alignItems = "start";
        navBar.style.borderBottomLeftRadius = "5px";
    }

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        navBar.style.borderLeft = "1px solid rgb(208, 208, 208)";
        navBar.style.borderBottom = "1px solid rgb(208, 208, 208)";
    } else {
        navBar.style.borderLeft = "1px solid black";
        navBar.style.borderBottom = "1px solid black";
    }
    navContainer.classList.add("float_left");
}

function GrowNavBar() {
    if (navbarDown == true) {
        emptySpace.style.height = startingNavHeight + "px";
        navbarToggle.style.top = "-80px";
    }
    
    logo.style.display = "flex";
    navBar.style.width = "100vw";
    navBar.style.border = "none";
    navBar.style.alignItems = "center";
    navBar.style.borderBottomLeftRadius = "0px";
    navContainer.style.marginBottom = "10px";
    navContainer.classList.remove("float_left");
    toggleShown = false;

    links.forEach((link) => {
        link.classList.remove("shrink_navigation");
    });

    if (window.innerWidth > 974) {
        navContainer.style.marginTop = "20px";
    } else {
        navContainer.style.marginRight = "0px";
        navContainer.style.marginTop = "0px";
    }
}

function ShowNavBar() {
    navBar.style.top = "0px";
}

function HideNavBar() {
    navBar.style.top = "-300px";
}
