window.addEventListener("scroll", () => {
    document.querySelector("html").classList.add("scrolling");
});

window.addEventListener("scrollend", () => {
    document.querySelector("html").classList.remove("scrolling");
});

setTimeout(() => {
    document.querySelector("html").classList.remove("scrolling");
}, 1200);
