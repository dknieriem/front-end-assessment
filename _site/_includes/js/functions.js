//Hamburger Menu functionality
const setupBurger = function(){
    var burger_switch = document.getElementsByClassName("hamburger-switch")[0];
    var menu = document.getElementsByClassName("hamburger-menu")[0];

    if(burger_switch && menu){
        burger_switch.addEventListener('click', (event) => {
            menu.classList.toggle('active');
        });
    }
}

//Popover functionality
const setupPopovers = function(){
    var popovers = document.querySelectorAll(".popover");
    if(popovers){
        popovers.forEach( popover => {
            popover.addEventListener('mouseover', (event) => {
                popover.classList.add('active');
            });

            popover.addEventListener('mouseout', (event) => {
                popover.classList.remove('active');
            });

            popover.addEventListener('click', (event) => {
                popover.classList.toggle('active');
            });
        });
    }
}

//setup event listeners
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    
    setupBurger();
    setupPopovers();
});




//add button classes
window.addEventListener('resize', (event) => {
    const tabletBreak = 768;
    const mobileBreak = 480;
    let buttons = document.querySelectorAll(".button");
    //only update button classes if the correct class doesn't already exist
    if(window.innerWidth <= mobileBreak && !buttons[0].classList.contains("mobile")){
        console.log("go mobile");
        buttons.forEach( button => {
            button.classList.remove("tablet");
            button.classList.add("mobile");
        });
    } else if(window.innerWidth <= tabletBreak && !buttons[0].classList.contains("tablet")){
        buttons.forEach( button => {
            console.log("go tablet");
            button.classList.remove("mobile");
            button.classList.add("tablet");
        });
    } else if(window.innerWidth > tabletBreak && (buttons[0].classList.contains("tablet") || buttons[0].classList.contains("mobile"))) {
        buttons.forEach( button => {
            console.log("go desktop");
            button.classList.remove("tablet");
            button.classList.remove("mobile");
        });
    }
});