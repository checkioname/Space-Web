
const menuCons= document.querySelector(".menu");
const buttonCons = document.querySelector(".button");

buttonCons.addEventListener("click", ()=>{
    const visible = menuCons.getAttribute('data-content');
    console.log(visible);

    if(visible === "false"){
        menuCons.setAttribute('data-content', true);
        buttonCons.setAttribute('aria-expanded', true)
    }else if (visible === 'true'){
        menuCons.setAttribute('data-content', false);
        buttonCons.setAttribute('aria-expanded', false);
    }


});

