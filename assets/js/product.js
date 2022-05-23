window.onload = function (){
    const description = document.querySelector("#third .wrapper .custom-container .cus-title ul #description");
    const information = document.querySelector("#third .wrapper .custom-container .cus-title ul #information");
    const reviews = document.querySelector("#third .wrapper .custom-container .cus-title ul #reviews");
    const descriptionO = document.querySelector("#third .wrapper .custom-container .description");
    const informationO = document.querySelector("#third .wrapper .custom-container .information");
    const reviewsO = document.querySelector("#third .wrapper .custom-container .reviews");
    information.addEventListener("click", () =>{
        informationO.classList.add("activ");
        descriptionO.classList.remove("activ");
        reviewsO.classList.remove("activ");
        information.classList.add("activ-links");
        description.classList.remove("activ-links");
        reviews.classList.remove("activ-links");
    });
    reviews.addEventListener("click", () =>{
        informationO.classList.remove("activ");
        descriptionO.classList.remove("activ");
        reviewsO.classList.add("activ");
        information.classList.remove("activ-links");
        description.classList.remove("activ-links");
        reviews.classList.add("activ-links");
    });
    description.addEventListener("click", () =>{
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

    const img = document.querySelector("#second .wrapper .custom-container .row .col-lg-5 .image img");
    img.addEventListener("mousemove", (e)=>{
        // console.log(e.target.offsetX)
        img.style.transform = "scale(1.2)";
    })
};