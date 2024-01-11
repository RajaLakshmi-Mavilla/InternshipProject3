let menu = document.getElementById("menu");
let navele = document.getElementById("navitems");

let isNavVisible = false;

menu.addEventListener('click', function() {
    if (isNavVisible) {
        navele.style.display = 'none';
    } else {
        navele.style.display = 'flex';
    }


    isNavVisible = !isNavVisible;
});