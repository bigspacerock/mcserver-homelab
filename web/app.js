const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

toggleButton.addEventListener("click", function () {
  if(localStorage.getItem("sidebarState") == "closed") {
    localStorage.setItem("sidebarState", "opened");
    sidebar.classList.toggle('close')
  } else {
    localStorage.setItem("sidebarState", "closed");
    sidebar.classList.toggle('close')
  }
})


document.addEventListener("DOMContentLoaded", function() {
  if(localStorage.getItem("sidebarState") == "closed") {
    sidebar.classList.toggle('close');
  }
})