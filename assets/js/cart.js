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
                <button onclick="productDelete(${item.item.id})"><i class="fa-solid fa-x"></i></button>
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

function renderContent() {
    const tbody = document.querySelector(".tbody");
    const items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    tbody.innerHTML = "";
    items.forEach(item => {
        tbody.insertAdjacentHTML("afterbegin", `<tr>
        <td class="image">
            <a href="product.html">
                <img src="${item.item.img}"
                    alt="">
            </a>
        </td>
        <td class="title">
            <a href="product.html">${item.item.title}</a>
        </td>
        <td class="price">
            <p>$${item.item.price}</p>
        </td>
        <td class="quantity">
            <div>
                <p onclick="decrease('${item.item.id}')">-</p>
                <input type="text" value="${item.count}">
                <p onclick="increase('${item.item.id}')">+</p>
            </div>
        </td>
        <td class="total-price">
            <p>$${item.item.price * item.count}</p>
        </td>
        <td class="trash">
            <a href="" onclick="productDelete('${item.item.id}')">
                <i class="fa-solid fa-trash-can"></i>
            </a>
        </td>
    </tr>`)
    })
    price();
}
renderContent();

function decrease(id) {
    let items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    items.forEach(item => {
        if (item.item.id === id) {
            if(item.count > 1){
                item.count -= 1;
            }
        };
    });
    localStorage.setItem("items", JSON.stringify(items));
    renderContent();
};
function increase(id) {
    let items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    items.forEach(item => {
        if (item.item.id === id) {
            item.count += 1;
        };
    });
    localStorage.setItem("items", JSON.stringify(items));
    renderContent();
}

function price() {
    const items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    const subTotal = document.querySelector(".sub-total2");
    const shipping = document.querySelector(".shipping");
    const totalPrice = document.querySelector(".total-price .price");
    let total = 0;
    let i = 0;
    items.forEach(item => {
        priceNum = parseFloat(item.item.price)
        countNum = parseFloat(item.count);
        i += countNum;
        total += priceNum * countNum;
    })
    subTotal.innerHTML = `$${total}`;
    shipping.innerHTML = `$${i * 10}`;
    totalPrice.innerHTML = `$${total + (i * 10)}`
}
price();

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

window.addEventListener("storage", renderContent);
// Basket End