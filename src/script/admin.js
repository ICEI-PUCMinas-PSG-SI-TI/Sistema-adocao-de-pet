const drawer = document.querySelector("#toggle-btn");

drawer.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
})

const sidebarLinks = document.querySelectorAll(".sidebar-link");
const iframe = document.querySelector("#content-frame");

sidebarLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        iframe.src = link.getAttribute("data-page"); // Define o src do iframe
    });
});