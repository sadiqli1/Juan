window.onload = function (){
    const relevance = document.querySelector(".col-lg-9 .col-title .lists .sort .list .list-title");
    let i =0;
    relevance.addEventListener("click", () =>{
        const list = document.querySelector(".col-lg-9 .col-title .lists .sort .list .list-dropdown");
        if(i%2===0){
            list.style.height = "max-content";
            list.style.opacity = "1";
            relevance.style.borderColor = "#e3a51e";
        }else{
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

    list.addEventListener("click", () =>{
        rowList.classList.add("activ");
        rowMenu.classList.remove("activ");
        grid.classList.remove("activ-btn");
        list.classList.add("activ-btn");
    });
    const grid = document.querySelector(".col-lg-9 .col-title .grid ul li .grid-btn");
    grid.addEventListener("click", ()=>{
        rowMenu.classList.add("activ");
        rowList.classList.remove("activ");
        grid.classList.add("activ-btn");
        list.classList.remove("activ-btn");
    });
};