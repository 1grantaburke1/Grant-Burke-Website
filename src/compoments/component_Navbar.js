//get the elements in navbar
let navBar = document.querySelector("nav");
let logo = document.querySelector(".logo");
let navContainer = document.querySelector(".navigation");
let links = document.querySelectorAll(".navigation > li");

let navbarToggle = document.querySelector(".toggle_nav");

let toggleArrowIcon = document.querySelector(".toggle_nav > p");
let toggleHamburgerIcon = document.querySelector(".hamburger_btn");

let logoImg = document.querySelector("nav img");
logoImg.setAttribute("src", "./assets/images/GB_blue_logo.jpg");

// Determine navbarToggle btn's icon based on width
if (window.innerWidth <= 974) {
    toggleArrowIcon.style.display = "none";
    toggleHamburgerIcon.style.display = "block";
    ShrinkNavBar();
}

let emptySpace = document.querySelector(".empty");
//Empty space at the top of screen.
if (window.innerWidth > 974) {
    setTimeout(() => {
        startingNavHeight = navBar.offsetHeight;
        emptySpace.style.height = startingNavHeight + "px";
    }, 100);

    toggleArrowIcon.style.display = "block";
    toggleHamburgerIcon.style.display = "none";
    navBar.style.width = "100vw";
}

let toggleShown = false;
let navbarDown = true;
if (window.innerWidth <= 974) {
    navbarDown = false;
}
let atTop = true;
window.addEventListener("scroll", () => {
    // Mobile Widths
    if (this.innerWidth > 974) {
        //Desktop Widths
        if (this.scrollY > 0) {
            emptySpace.style.height = "0px";
            ShrinkNavBar();
            ShowNavBarToggle();
        }

        if (this.scrollY == 0) {
            GrowNavBar();

            if (navbarDown == true) {
                HideNavBarToggle();
            }
            return;
        }
    }
});

navbarToggle.addEventListener("click", () => {
    if (window.innerWidth <= 974) {
        if (navbarDown == true) {
            HideNavBar();
            navbarDown = false;
        } else {
            ShowNavBar();
            navbarDown = true;
        }
    } else {
        if (navbarDown == true) {
            emptySpace.style.height = "0px";
            HideNavBar();

            navbarToggle.style.top = "-35px";
            setTimeout(() => {
                ShowNavBarToggle();

                toggleArrowIcon.textContent = "\u2193";
            }, 150);
            navbarDown = false;
        } else {
            ShowNavBar();

            navbarToggle.style.top = "-1px";
            setTimeout(() => {
                if (window.scrollY > 0) {
                    ShowNavBarToggle();
                    toggleArrowIcon.textContent = "\u2191";
                    emptySpace.style.height = startingNavHeight - 10 + "px";
                }
            }, 150);
            navbarDown = true;
            if (window.scrollY == 0) {
                HideNavBarToggle();
                emptySpace.style.height = startingNavHeight - 10 + "px";
            }
        }
    }
});

function ShrinkNavBar() {
    links.forEach((link) => {
        link.classList.add("shrink_navigation");
    });

    navContainer.style.margin = "5px";
    navBar.style.width = "fit-content";

    if (window.innerWidth > 974) {
        //navbarToggle.style.top = "-20px";
        toggleShown = true;

        navBar.style.borderBottomLeftRadius = "20px";
        navBar.style.right = "0";

        logo.querySelector("img").style.width = "55px";
        logo.style.flexDirection = "column";
        logo.style.fontSize = "12pt";
        logo.style.gap = "2px";
        logo.style.paddingRight = "0px";
        logo.style.margin = "10px 0px 10px 15px";
        navContainer.style.marginBlock = "16px";
        logo.style.setProperty("--left-padding", "10px");
    } else {
        ShowNavBarToggle();

        navBar.style.right = "0vw";

        navContainer.style.display = "flex";
        navContainer.style.flexDirection = "column";
        navContainer.style.marginRight = "100px";
        navBar.style.alignItems = "start";
        navBar.style.borderBottomLeftRadius = "5px";

        logo.style.fontSize = "16pt";
        logo.querySelector("img").style.width = "65px";
        logo.style.paddingRight = "0px";
        logo.style.margin = "10px 0px 5px 15px";
        logo.style.marginRight = "65px";
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
        HideNavBarToggle();
    }

    logo.style.display = "flex";
    navBar.style.width = "100vw";
    navBar.style.border = "none";
    navBar.style.alignItems = "center";
    navBar.style.borderBottomLeftRadius = "0px";
    navContainer.style.margin = "10px 5px";
    navContainer.style.flexDirection = "row";
    navContainer.style.flexWrap = "wrap";
    navContainer.classList.remove("float_left");
    toggleShown = false;

    logo.querySelector("img").style.width = "90px";
    logo.style.flexDirection = "row";
    logo.style.fontSize = "24pt";
    logo.style.gap = "15px";
    logo.style.paddingRight = "10px";
    navContainer.style.marginBlock = "12px";
    logo.style.setProperty("--left-padding", "25%");

    if (window.innerWidth > 974) {
        logo.style.margin = "10px 10px 10px 30px";
    } else {
        logo.style.margin = "15px";
        logo.style.marginBottom = "10px";
        navContainer.style.margin = "0px 10px 5px";
    }

    links.forEach((link) => {
        link.classList.remove("shrink_navigation");
    });

    if (window.innerWidth > 974) {
        navContainer.style.marginTop = "20px";
    }
}

function ShowNavBar() {
    navBar.style.top = "0px";
}

function HideNavBar() {
    navBar.style.top = "-310px";
}

function ShowNavBarToggle() {
    navbarToggle.style.top = "-20px";
}

function HideNavBarToggle() {
    navbarToggle.style.top = "-80px";
}
