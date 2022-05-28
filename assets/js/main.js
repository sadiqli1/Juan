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
// Carusel End


// Menu Bar start
window.onload = function () {
    const menu = document.querySelector("#second > .wrapper > .custom-container > .search > .menu-bar button");
    const offcanvasOverlayMenubar = document.querySelector(".offcanvas-overlay-menubar");
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
        const header = document.querySelector("header > #second");
        if (window.scrollY > 167 && window.scrollY < 280) {
            header.classList.add("second-hide");
        } else if (window.scrollY > 280) {
            header.classList.add("second-activ");
            header.classList.remove("second-hide");
        } else {
            header.classList.remove("second-activ");
            header.classList.remove("second-hide");
        }
    })

};
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
// Modal End