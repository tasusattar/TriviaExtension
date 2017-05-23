

document.getElementById("navbtn").addEventListener("click", openNav);
document.getElementById("closebtn").addEventListener("click", closeNav);
document.getElementById("history").addEventListener("click", openHist);
document.getElementById("books").addEventListener("click", openBooks);

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("content_screen").style.marginRight = "250px";
    openHist();
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content_screen").style.marginRight = "0";
}

function openHist() {
  document.getElementById("bookObjs").style.display = "none";
  document.getElementById("histObjs").style.display = "flex";
}

function openBooks() {
  document.getElementById("histObjs").style.display = "none";
  document.getElementById("bookObjs").style.display = "flex";
}
