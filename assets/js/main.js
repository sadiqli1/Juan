// Basket Start
function basket(id, img, title, price) {
    let items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    if (items.length > 0) {
        if (items.some((item) => item.item.id === id)) {
            // items = items.filter((item) => item.item.id !== id);
            // items.forEach(item =>{
            //     if(item.item.id = id){
            //         item.count += 1;
            //     }
            // })
            items = items.map((item) => {
                if (item.item.id === id) {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                } else {
                    return item;
                }
            }).filter(Boolean);

        } else {
            items.push({
                item: {
                    id,
                    img: `https://${img}.jpg`,
                    title,
                    price,
                },
                count: 1,
            })
        }
    } else {
        items.push({
            item: {
                id,
                img: `https://${img}.jpg`,
                title,
                price,
            },
            count: 1,
        })
    }
    localStorage.setItem("items", JSON.stringify(items));
    productCount();
    basketAdd();
    priceCalc();
}

function basketAdd() {
    const products = document.querySelector(".products");
    products.innerHTML = "";
    const items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    if (items.length > 0) {
        items.forEach(item => {
            products.insertAdjacentHTML(`afterbegin`, ` <div class="product">
            <div class="image">
                <a href="product.html">
                    <img src="${item.item.img}" alt="">
                </a>
            </div>
            <div class="about">
                <div class="title">
                    <a href="product.html">${item.item.title}</a>
                </div>
                <div class="price">
                    <p class="product-quantity">${item.count} *</p>
                    <p class="product-price">$${item.item.price}</p>
                </div>
            </div>
            
            <div class="cancel">
                <button onclick="productDelete('${item.item.id}')"><i class="fa-solid fa-x"></i></button>
            </div>
        </div>`);
        });
    }
    else {
        products.innerHTML = "Your Basket is Empty"
    }
    productCount();
    priceCalc();
};
basketAdd();

function priceCalc() {
    const items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    const subTotalS = document.querySelector(".sub-total p");
    const ecoTax = document.querySelector(".eco-tax p");
    const vat = document.querySelector(".vat p");
    const total = document.querySelector(".total p");
    let subTotal = 0;
    let count = 0;
    items.forEach(item => {
        const price = parseFloat(item.item.price);
        subTotal += price * item.count;
        count += item.count;
    });
    subTotalS.innerHTML = `$${subTotal}`;
    ecoTax.innerHTML = `$${count * 5}`;
    vat.innerHTML = `$${(subTotal * 20) / 100}`;
    total.innerHTML = `$${subTotal + (count * 5) + (subTotal * 20) / 100}`;
}
priceCalc();

function productDelete(id) {
    let items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    items = items.filter((item) => item.item.id !== id);
    localStorage.setItem("items", JSON.stringify(items));
    basketAdd();
}

function productCount() {
    const productCount = document.querySelector(".products-count");
    const items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    productCount.innerHTML = items.length;
}
productCount();


function cardSection() {
    const basket = document.querySelector(".baskets");
    basket.classList.add("basket-activ");
    const overlay = document.querySelector(".offcanvas-overlay");
    overlay.classList.add("offcanvas-overlay-activ");
    overlay.addEventListener("click", () => {
        basket.classList.remove("basket-activ");
        overlay.classList.remove("offcanvas-overlay-activ");
    });
    basketAdd();
};
function cancel() {
    const basket = document.querySelector(".baskets");
    basket.classList.remove("basket-activ");
    const overlay = document.querySelector(".offcanvas-overlay");
    overlay.classList.remove("offcanvas-overlay-activ");
};

if (window.screen.width < 1007) {
    const bag = document.querySelector(".bag button");
    bag.addEventListener("click", () => {
        document.location.href = "http://127.0.0.1:5500/cart.html";
    })
}

window.addEventListener("storage", productCount);
window.addEventListener("storage", basketAdd);
// Basket End


// Carusel Start
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
})

$('.custom-owl-2').owlCarousel({
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
            items: 3
        }
    }
})


$('.owl-carousel-3').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
})
// Carusel End


// Menu Bar start

const menu = document.querySelector("#second > .wrapper > .custom-container > .search > .menu-bar button");
const offcanvasOverlayMenubar = document.querySelector(".offcanvas-overlay-menubar");
let i = 0;
menu.addEventListener("click", (e) => {
    e.stopPropagation();
    const menuBar = document.querySelector("#second > #menu-bar");
    const body = document.querySelector("body");
    const cancel = document.querySelector("#second > #menu-bar > .menu-bar-wrapper .cancel button");
    if (i % 2 === 0) {
        menuBar.style.width = "80%";
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
    const header = document.querySelector("header > #second > .wrapper");
    if (window.scrollY > 167 && window.scrollY < 280) {
        header.classList.add("second-hide");
    } else if (window.scrollY > 280) {
        header.classList.add("wrapper-activ");
        header.classList.remove("wrapper-hide");
    } else {
        header.classList.remove("wrapper-activ");
        header.classList.remove("wrapper-hide");
    }
})

// let f = 0;
// function dropdown() {
//     const dropdown = document.querySelector(".cus-dropdown");
//     const plus = document.querySelector(".asdf");
//     if (f % 2 === 0) {
//         dropdown.classList.add("cus-dropdown-activ");
//         plus.classList.add("minus");
//     }else{
//         dropdown.classList.remove("cus-dropdown-activ");
//         plus.classList.remove("minus");
//     }
//     f++;
// }

let f = 0;
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".cus-dropdown");
const plus = document.querySelectorAll(".drop-plus");
for (i = 0; i < dropdownBtn.length; i++) {
    dropdownBtn[i].addEventListener("click", (e) => {
        if (f % 2 === 0) {
            for(j = 0; j < dropdown.length; j++){
                dropdown[j].classList.remove("cus-dropdown-activ");
            }
            for(y = 0; y < plus.length; y++){
                plus[y].classList.remove("minus");
            }
            e.target.parentElement.parentElement.nextElementSibling.classList.add("cus-dropdown-activ");
            e.target.previousElementSibling.classList.add("minus");
        } else {
            e.target.parentElement.parentElement.nextElementSibling.classList.remove("cus-dropdown-activ");
            e.target.previousElementSibling.classList.remove("minus");
        }
        f++;
    });

}

// Menu Bar End

// Back To Top Start
const backToTop = document.querySelector(".backtotop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        backToTop.classList.add("backtotop-activ");
    } else {
        backToTop.classList.remove("backtotop-activ");
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
})
// Back To Top End


//Modal Start
function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

const btn = document.querySelectorAll(".my-btn");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        modal.classList.add("activ");
    });
}

const img2 = document.querySelectorAll(".modal .modal-dialog .modal-content .custom-container .row .col-lg-5 .images-lists .img img");
const imgcon2 = document.querySelectorAll(".modal .modal-dialog .modal-content .custom-container .row .col-lg-5 #zoom");
for (let i = 0; i < img2.length; i++) {
    img2[i].addEventListener("click", () => {
        imgcon2[0].children[0].src = img2[i].src;
        imgcon2[0].style.backgroundImage = `url(${img2[i].src})`;
    });
};
// Modal End


// Searh Btn Start
const searchWrapper = document.querySelector(".search-wrapper");
function search() {
    searchWrapper.classList.add("search-wrapper-activ");
}

const searchClose = document.querySelector(".search-wrapper .search-inner .search-close");
searchClose.addEventListener("click", () => {
    searchWrapper.classList.remove("search-wrapper-activ");
})
// Searh Btn End