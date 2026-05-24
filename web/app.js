// Elements
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const dynamicPage = document.getElementById('module')
const anchorList = Array(sidebar.getElementsByTagName("a"))
// Variables
let initSidebarState = sessionStorage.getItem("sidebarState")

// Functions
async function injectPage(pageName) {
  let html = await fetch(pageName).then(rs => rs.text())
  dynamicPage.innerHTML = html;
}

// Init
if(initSidebarState == "opened") {
    sidebar.classList.add('opened')
    document.documentElement.classList.remove("sidebar-open");
}

injectPage("/web/pages/main.html")

// Events
toggleButton.addEventListener("click", function () {
  sessionStorage.setItem("sidebarState", sidebar.classList.contains('opened') ? "closed" : "opened")
  sidebar.classList.toggle('opened');
})
window.onpopstate = (state) => {
  const locationpath = "/web/pages/" + location.hash.slice(1) + ".html"
  injectPage(locationpath)
}