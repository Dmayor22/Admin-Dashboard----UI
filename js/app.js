// Select menu icon and close icon
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.getElementById("close")


// Seleect sidebar
const sidebar = document.getElementById("sidebar");

// eleemnt for opening sidebar
let sidebarOpen = false;

// function for openSidebar
const openSidebar = () => {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
};

// funvtion for closeSidebar
const closeSidebar = () => {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
};

// onClick action for menu icon
menuIcon.addEventListener("click", openSidebar);
closeIcon.addEventListener("click", closeSidebar);
