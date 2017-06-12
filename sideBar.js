
document.getElementById("navbtn").addEventListener("click", openNav);
document.getElementById("closebtn").addEventListener("click", closeNav);
document.getElementById("history").addEventListener("click", openHist);
document.getElementById("books").addEventListener("click", openBooks);

document.getElementById("likedFilter").addEventListener("click", function(){
  filter("liked");
});
document.getElementById("highlightedFilter").addEventListener("click", function(){
  filter("highlighted");
});
document.getElementById("dislikedFilter").addEventListener("click", function(){
  filter("disliked");
});
document.getElementById("plainFilter").addEventListener("click", function(){
  filter("plain");
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    // document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("content_screen").style.marginRight = "250px";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("navbtn").style.display = "none";
    // document.getElementById("content_screen").style.marginRight = "250px";
    openHist();
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("navbtn").style.display = "inline";
    // document.getElementById("content_screen").style.marginRight = "0";
}

function openHist() {
  document.getElementById("bookObjs").style.display = "none";
  document.getElementById("histObjs").style.display = "flex";
}

function openBooks() {
  document.getElementById("histObjs").style.display = "none";
  document.getElementById("bookObjs").style.display = "flex";
}

function filter(id) {
  var btnId = id + "Filter";
  var elem = document.getElementById(btnId);
  var filtered = filterChange(elem);
  var cards = document.getElementsByClassName(id);
  for (var i=0; i<cards.length; i++){
    if (filtered){
      cards[i].style.display = "none";
    }
    else{
      cards[i].style.display = "block";
    }
  }
}

function filterChange(elem) {
  if (elem.style.backgroundColor == "inherit"){
    elem.style.backgroundColor = elem.style.color;
    elem.style.borderStyle = "solid";
    return false;
  }

  elem.style.backgroundColor = "inherit";
  elem.style.borderStyle = "none";
  return true;
}
