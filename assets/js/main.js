$('.custom-owl').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoPlayTimeout: 1000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    slideSpeed: 300,
    paginationSpeed: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.custom-owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('.custom-owl-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
window.onload = function () {
    const menu = document.querySelector("#second > .wrapper > .custom-container > .search > .menu-bar button");
    let i = 0;
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
        const menuBar = document.querySelector("#second > .wrapper > #menu-bar");
        const body = document.querySelector("body");
        const cancel = document.querySelector("#second > .wrapper > #menu-bar > .menu-bar-wrapper .cancel button");
        if (i % 2 === 0) {
            menuBar.style.width = "300px";
            // body.style.filter = "brightness(0.8)";
            menuBar.style.opacity = "1";
            menuBar.style.visibility = "visible";
            cancel.addEventListener("click", (e) => {
                e.stopPropagation();
                menuBar.style.width = "0";
                // body.style.filter = "brightness(1)";
                menuBar.style.opacity = "0";
                menuBar.style.visibility = "hidden";
            });
        } else {
            menuBar.style.width = "0";
            // body.style.filter = "brightness(1)";
            menuBar.style.opacity = "0";
            menuBar.style.visibility = "hidden";
        }
        i++;
    });
};