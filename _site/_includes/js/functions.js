//Hamburger Menu functionality
const setupBurger = function(){
    var burger_switch = document.querySelectorAll(".hamburger-switch"); //allow for multiple toggles
    var menu = document.querySelector(".hamburger-menu"); //we assume there's only one hamburger menu

    if(burger_switch && menu){
        burger_switch.forEach( burger => {
            burger.addEventListener('click', (event) => {
                menu.classList.toggle('active');
            });
        });

        //Also close on non-item whitespace clicks (the .hamburger-menu)
        menu.addEventListener('click', (event) => {
            if(event.target === event.currentTarget){ 
                menu.classList.toggle('active');
            }
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
const checkWindowSize = function(){
    const tabletBreak = 980;
    const mobileBreak = 480;
    let buttons = document.querySelectorAll(".button");
    //only update button classes if the correct class doesn't already exist
    if(window.innerWidth <= mobileBreak && !buttons[0].classList.contains("mobile")){
        console.log("go mobile");
        buttons.forEach( button => {
            button.classList.remove("tablet");
            button.classList.add("mobile");
        });
    } else if(window.innerWidth > mobileBreak && window.innerWidth <= tabletBreak && !buttons[0].classList.contains("tablet")){
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
}
window.addEventListener('resize', (event) => {
    checkWindowSize();
});

//ensure button styles appear on page load
//TODO: this can be improved. Currently the button flashes w/ full style before
//the correct class can be assigned
window.addEventListener('load', (event) => {
    checkWindowSize();
});