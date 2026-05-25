const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");

burger.addEventListener("click", () => {
    burger.classList.toggle("activeBurger");
    sidebar.classList.toggle("activeSidebar");
});