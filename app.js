document.addEventListener("DOMContentLoaded", function () {
    let menu = document.getElementById("menu");
    let navele = document.getElementById("navitems");

    let isNavVisible = false;

    menu.addEventListener('click', function () {
        console.log("Menu clicked");
        
        if (isNavVisible) {
           
            navele.style.display = 'none';
        } else {
            
            navele.style.display = 'flex';
        }

        isNavVisible = !isNavVisible;
        console.log("isNavVisible:", isNavVisible);
    });
});

