window.onload = function () {
    const description = document.querySelector("#third .wrapper .custom-container .cus-title ul #description");
    const information = document.querySelector("#third .wrapper .custom-container .cus-title ul #information");
    const reviews = document.querySelector("#third .wrapper .custom-container .cus-title ul #reviews");
    const descriptionO = document.querySelector("#third .wrapper .custom-container .description");
    const informationO = document.querySelector("#third .wrapper .custom-container .information");
    const reviewsO = document.querySelector("#third .wrapper .custom-container .reviews");
    information.addEventListener("click", () => {
        informationO.classList.add("activ");
        descriptionO.classList.remove("activ");
        reviewsO.classList.remove("activ");
        information.classList.add("activ-links");
        description.classList.remove("activ-links");
        reviews.classList.remove("activ-links");
    });
    reviews.addEventListener("click", () => {
        informationO.classList.remove("activ");
        descriptionO.classList.remove("activ");
        reviewsO.classList.add("activ");
        information.classList.remove("activ-links");
        description.classList.remove("activ-links");
        reviews.classList.add("activ-links");
    });
    description.addEventListener("click", () => {
        informationO.classList.remove("activ");
        descriptionO.classList.add("activ");
        reviewsO.classList.remove("activ");
        information.classList.remove("activ-links");
        description.classList.add("activ-links");
        reviews.classList.remove("activ-links");
    });


    $('.custom-owl-1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    const img = document.querySelectorAll("#second .wrapper .custom-container .row .col-lg-5 .images-lists .img img");
    const imgcon = document.querySelectorAll("#second .wrapper .custom-container .row .col-lg-5 #zoom");
    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("click", () => {
            imgcon[0].children[0].src = img[i].src;
            imgcon[0].style.backgroundImage = `url(${img[i].src})`;
        });
    };

    const minus = document.querySelector("#second .wrapper .custom-container .row .col-lg-7 .product-quantity-box .quantity #minus");
    const plus = document.querySelector("#second .wrapper .custom-container .row .col-lg-7 .product-quantity-box .quantity #plus");
    const count = document.querySelector("#second .wrapper .custom-container .row .col-lg-7 .product-quantity-box .quantity #count");
    let counnum = parseFloat(count.innerHTML);
    minus.addEventListener("click", () => {
        if (counnum > 1) {
            counnum -= 1;
            count.innerHTML = counnum;
        }
        else {

        }
    });
    plus.addEventListener("click", () => {
        counnum += 1;
        console.log(counnum)
        count.innerHTML = counnum;
    });

    const img2 = document.querySelectorAll(".modal .modal-dialog .modal-content .custom-container .row .col-lg-5 .images-lists .img img");
    const imgcon2 = document.querySelectorAll(".modal .modal-dialog .modal-content .custom-container .row .col-lg-5 #zoom");
    for (let i = 0; i < img2.length; i++) {
        img2[i].addEventListener("click", () => {
            imgcon2[0].children[0].src = img2[i].src;
            imgcon2[0].style.backgroundImage = `url(${img2[i].src})`;
        });
    };
};

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

function productCount() {
    const productCount = document.querySelector(".products-count");
    const items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    productCount.innerHTML = items.length;
}
productCount();
window.addEventListener("storage", productCount);