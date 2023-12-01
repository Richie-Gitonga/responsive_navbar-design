const displayMenu = document.querySelector('.menu-button');
const closeMenu = document.querySelector('.close-button');
const menuBar = document.querySelector('.navlinks');


displayMenu.addEventListener('click', () => {
    console.log("clicked")
    menuBar.style.display = "block";
})

closeMenu.addEventListener('click', () => {
    console.log("clicked")
    menuBar.style.display = "none";
})