// Get the navigation element
const nav = document.querySelector('header');

// Get the initial offset of the navigation bar
const navOffset = nav.offsetTop;

// Function to make the navigation bar sticky
function stickyNavigation() {
    if (window.pageYOffset >= navOffset) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

// Add a scroll event listener to call the stickyNavigation function
window.addEventListener('scroll', stickyNavigation);
