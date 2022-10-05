
const setupBurger = function(){
    var burger_switch = document.getElementsByClassName("hamburger-switch")[0];
    var menu = document.getElementsByClassName("hamburger-menu")[0];

    if(burger_switch && menu){
        burger_switch.addEventListener('click', (event) => {
            menu.classList.toggle('active');
        });
    }

}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    
    setupBurger();
});


//add button classes 
window.addEventListener('resize', (event) => {

});