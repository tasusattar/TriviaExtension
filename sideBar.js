

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
  var toReplace = document.getElementById("objects");
  toReplace.innerHTML = "<a href='#'>About</a>\n<a href='#'>Services</a>";
}

function openBooks() {
  var toReplace = document.getElementById("objects");
  toReplace.innerHTML = "<a href=\"#\">Clients</a>\n<a href=\"#\">Contacts</a>";
}


// today's date to be displayed
var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

var fullDate = day + "/" + month + "/" + year;

document.getElementById("dateDisplay").innerHTML = fullDate;
