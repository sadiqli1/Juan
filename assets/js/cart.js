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
            <button onclick="productDelete('${item.item.id}')">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </td>
    </tr>`)
    })
    price();
    productCount();
}
renderContent();

function decrease(id) {
    let items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    items.forEach(item => {
        if (item.item.id === id) {
            if (item.count > 1) {
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
    renderContent();
}

function productCount() {
    const productCount = document.querySelector(".products-count");
    const items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
    productCount.innerHTML = items.length;
}
productCount();

window.addEventListener("storage", renderContent);
window.addEventListener("storage", productCount);
// Basket End