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
} else {
    toggleArrowIcon.style.display = "block";
    toggleHamburgerIcon.style.display = "none";
}

//Empty space at the top of screen.
let emptySpace = document.querySelector(".empty");
let startingNavHeight = navBar.offsetHeight;
// emptySpace.style.height = startingNavHeight + 10 + "px";

setTimeout(() => {
    startingNavHeight = navBar.offsetHeight;
    emptySpace.style.height = startingNavHeight + "px";
}, 700);

navBar.style.width = "100vw";

let toggleShown = false;
let navbarDown = true;
// let belowMark = false;
let atTop = true;
window.addEventListener("scroll", () => {
    // Mobile Widths
    if (this.innerWidth <= 974) {
        //new way
        if (this.scrollY > 0 && atTop == true) {
            navContainer.style.justifyContent = "initial";
            // emptySpace.style.height = "0px";
            ShrinkNavBar();
            HideNavBar();
            emptySpace.style.height = "0px";
            atTop = false;
            navbarDown = false;
            this.scrollY(0);
        }

        if ((emptySpace.style.height = "0px")) {
            navbarToggle.style.top = "-20px";
        }

        //old way
        // Exiting Empty space
       // if (this.scrollY > 60) {
       //     navContainer.style.justifyContent = "initial";
       //      ShrinkNavBar();
       //  } else if (this.scrollY <= 60) {
       //     navContainer.style.justifyContent = "center";
       //      GrowNavBar();
       //  }

       //  if ((this.scrollY > 60) & (this.scrollY <= startingNavHeight - 70)) {
       //      navBar.style.width = "100%";
       //      navContainer.style.flexDirection = "row";
       //      navContainer.style.flexWrap = "wrap";
       //  }

       //  if (this.scrollY <= startingNavHeight - 70) {
       //      belowMark = false;
       //      navbarToggle.style.top = "-80px";
       //  }

       //  if (this.scrollY > startingNavHeight - 70) {
       //      if (belowMark == false) {
       //          HideNavBar();
       //          navbarDown = false;
       //      }

       //      belowMark = true;
       //      navbarToggle.style.top = "-20px";
       //  }

       //  // Entering Empty space
       //  if (this.scrollY < startingNavHeight - 75) {
       //      ShowNavBar();
       //      navbarDown = true;
       //  }

       //  if (this.scrollY < 50) {
       //      GrowNavBar();
       //  }

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
    if (this.innerWidth <= 974 && this.scrollY == 0) {
        emptySpace.style.height = startingNavHeight + "px";
        GrowNavBar();
        ShowNavBar();
        navContainer.style.justifyContent = "center";
        navbarToggle.style.top = "-80px";
        atTop = true;
        this.scrollY(0);
        return;
    }
    
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

    //logo.style.display = "none";
    navContainer.style.margin = "5px";
    navBar.style.width = "fit-content";

    if (window.innerWidth > 974) {
        navBar.style.borderBottomLeftRadius = "20px";
        navBar.style.right = "0";

        // mark
        logo.querySelector("img").style.width = "55px";
        logo.style.flexDirection = "column";
        logo.style.fontSize = "12pt";
        logo.style.gap = "2px";
        logo.style.paddingRight = "0px";
        logo.style.margin = "10px 0px 10px 15px";
        navContainer.style.marginBlock = "16px";
        // /mark
    } else {
        navBar.style.right = "0vw";

        navContainer.style.display = "flex";
        navContainer.style.flexDirection = "column";
        navContainer.style.marginRight = "100px";
        navBar.style.alignItems = "start";
        navBar.style.borderBottomLeftRadius = "5px";

        // mark
        logo.style.fontSize = "16pt";
        logo.querySelector("img").style.width = "65px";
        logo.style.paddingRight = "0px";
        logo.style.margin = "10px 0px 5px 15px";
        logo.style.marginRight = "60px";
        // /mark
        // /mark
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
    navContainer.style.margin = "10px 5px";
    navContainer.style.flexDirection = "row";
    navContainer.style.flexWrap = "wrap";
    navContainer.classList.remove("float_left");
    toggleShown = false;

    // mark
    logo.querySelector("img").style.width = "90px";
    logo.style.flexDirection = "row";
    logo.style.fontSize = "24pt";
    logo.style.gap = "15px";
    logo.style.paddingRight = "10px";
    logo.style.margin = "10px 10px 10px 30px";
    navContainer.style.marginBlock = "12px";
    // /mark

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
    navBar.style.top = "-300px";
}
