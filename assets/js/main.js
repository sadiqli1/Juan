// Basket Start
function basket(id, img, title, price) {
    let items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    if (items.length > 0) {
        if (items.some((item) => item.item.id === id)) {
            items = items.filter((item) => item.item.id !== id);

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

}

function basketAdd() {
    const products = document.querySelector(".products");
    products.innerHTML = "";
    const items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    let subTotal = 0;
    const subTotalS = document.querySelector(".sub-total p");
    if (items.length > 0) {
        let count = 0;
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
            const priceNum = parseFloat(item.item.price);
            subTotal += priceNum;
            count += item.count;
        });
        // const SubTotalnum = parseFloat(subTotal);
        subTotalS.innerHTML = `$${subTotal}`;
        const ecoTax = document.querySelector(".eco-tax p");
        ecoTax.innerHTML = `$${count * 5}`;
        const vat = document.querySelector(".vat p");
        vat.innerHTML = `$${subTotal * 20 / 100}`;
        const total = document.querySelector(".total p");
        const ecoTaxnum = parseFloat(ecoTax.innerHTML);
        const vatnum = parseFloat(vat.innerHTML);
        total.innerHTML = `$${subTotal + (count * 5) + (subTotal * 20 / 100)}`
    }
    else {
        products.innerHTML = "Your Basket is Empty"
    }
    productCount();
};
basketAdd();


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
    let i = 0;
    items.forEach((item) => {
        i += item.count;
    });
    productCount.innerHTML = i;
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
            offcanvasOverlayMenubar.addEventListener("click", ()=>{
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
    window.addEventListener("scroll",(e) =>{
        console.log(e)
    })

};
// Menu Bar End


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