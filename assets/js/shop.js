window.onload = function () {
    const relevance = document.querySelector(".col-lg-9 .col-title .lists .sort .list .list-title");
    let i = 0;
    relevance.addEventListener("click", () => {
        const list = document.querySelector(".col-lg-9 .col-title .lists .sort .list .list-dropdown");
        if (i % 2 === 0) {
            list.style.height = "max-content";
            list.style.opacity = "1";
            relevance.style.borderColor = "#e3a51e";
        } else {
            list.style.height = "0";
            list.style.opacity = "0";
            relevance.style.borderColor = "#e8e8e8";
        }
        i++;
    });

    // const listtxt = document.querySelector(".lists .sort .list .list-title p");
    // const lists = document.querySelectorAll(".lists .sort .list .list-dropdown ul li");
    // for(let i = 0; i < lists.length; i++){
    //     lists[i].addEventListener("click", ()=>{
    //         // console.log(lists[i].innerHTML)
    //         listtxt.innerHTML = lists[i].innerHTML;
    //         list.style.height = "0";
    //         list.style.opacity = "0";
    //     });
    // }

    const list = document.querySelector(".col-lg-9 .col-title .grid ul li .list-btn");
    const rowMenu = document.querySelector(".col-lg-9 .row-menu");
    const rowList = document.querySelector(".col-lg-9 .row-list");

    list.addEventListener("click", () => {
        rowList.classList.add("activ");
        rowMenu.classList.remove("activ");
        grid.classList.remove("activ-btn");
        list.classList.add("activ-btn");
    });
    const grid = document.querySelector(".col-lg-9 .col-title .grid ul li .grid-btn");
    grid.addEventListener("click", () => {
        rowMenu.classList.add("activ");
        rowList.classList.remove("activ");
        grid.classList.add("activ-btn");
        list.classList.remove("activ-btn");
    });
    // Menu Bar start
const menu = document.querySelector("#second > .wrapper > .custom-container > .search > .menu-bar button");
const offcanvasOverlayMenubar = document.querySelector(".offcanvas-overlay-menubar");
let j = 0;
menu.addEventListener("click", (e) => {
    e.stopPropagation();
    const menuBar = document.querySelector("#second > .wrapper > #menu-bar");
    const body = document.querySelector("body");
    const cancel = document.querySelector("#second > .wrapper > #menu-bar > .menu-bar-wrapper .cancel button");
    if (j % 2 === 0) {
        menuBar.style.width = "300px";
        // body.style.filter = "brightness(0.8)";
        menuBar.style.opacity = "1";
        menuBar.style.visibility = "visible";
        cancel.addEventListener("click", (e) => {
            e.stopPropagation();
            menuBar.style.width = "0";
            menuBar.style.opacity = "0";
            menuBar.style.visibility = "hidden";
            offcanvasOverlayMenubar.classList.remove("offcanvas-overlay-menubar-activ");
        });
        offcanvasOverlayMenubar.addEventListener("click", () => {
            menuBar.style.width = "0";
            menuBar.style.opacity = "0";
            menuBar.style.visibility = "hidden";
            offcanvasOverlayMenubar.classList.remove("offcanvas-overlay-menubar-activ");
        })
        offcanvasOverlayMenubar.classList.add("offcanvas-overlay-menubar-activ");
    } else {
        menuBar.style.width = "0";
        menuBar.style.opacity = "0";
        menuBar.style.visibility = "hidden";
        offcanvasOverlayMenubar.classList.remove("offcanvas-overlay-menubar-activ");
    }
    i++;
});
window.addEventListener("scroll", (e) => {
    const header = document.querySelector("header > #second > .wrapper >.custom-container");
    if (window.scrollY > 167 && window.scrollY < 280) {
        header.classList.add("second-hide");
    } else if (window.scrollY > 280) {
        header.classList.add("custom-container-activ");
        header.classList.remove("custom-container-hide");
    } else {
        header.classList.remove("custom-container-activ");
        header.classList.remove("custom-container-hide");
    }
})
// Menu Bar End
};

var lowerSlider = document.querySelector('#lower');
var upperSlider = document.querySelector('#upper');

document.querySelector('#two').value = upperSlider.value;
document.querySelector('#one').value = lowerSlider.value;

var lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
            upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value = this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value = this.value
};