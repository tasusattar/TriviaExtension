var DisplayedCard = (function(){
  var nextId = 0;
  var nameId = "DC";

  return function DisplayedCard(flashCard){
  this.flashCard = flashCard;
  this.id = nameId + nextId.toString();
  nextId++;
  this.displayed = false;
  this.date = "";
  this.liked = false;
  this.highlighted = false;
  this.disliked = false;
  this.choices = {
    "liked": false,
    "highlighted": false,
    "disliked": false
  };
  this.borderColor = "black";
  this.innerColor = "white";
  };
})();

DisplayedCard.prototype.firstDisplay = function() {
  this.displayed = true;
  this.date = todaysDate();
  this.selected();
  this.makeCicle();
};

DisplayedCard.prototype.selected = function() {
  document.getElementById("info").innerHTML = this.flashCard.info;
  document.getElementById("category").innerHTML = this.flashCard.category;
  document.getElementById("dateDisplay").innerHTML = this.date;
  this.displayBtns();
};

DisplayedCard.prototype.makeCicle = function() {
  var that = this;
  var elem = document.getElementById("histObjs");
  var anchor = document.createElement("a");
  anchor.href = "#"
  anchor.className = "cardCircles";
  anchor.id = that.id;
  anchor.onclick = function(){
    that.selected();
  };
  elem.appendChild(anchor);
};

DisplayedCard.prototype.displayBtns = function() {
  var that = this;
  var elem = document.getElementById("bottomRight");
  var btnsblock = document.createElement("div");
  btnsblock.id = "btnContainer";

  for (var key in that.choices){
    var anchor = document.createElement("a");
    anchor.href = "#"
    anchor.className = "colorBtns";
    anchor.id = key;
    if (that.choices[key] === true){
      anchor.style.opacity = 1;
    }
    btnsblock.appendChild(anchor);
  }

  elem.replaceChild(btnsblock, elem.childNodes[0]);
  makeClickable(that);
};

DisplayedCard.prototype.colorSwitch = function(action){
  this.choices[action] = !this.choices[action];
  var elem = document.getElementById(this.id);
  elem.classList.toggle(action);

  if (action == "disliked"){
    this.choices["liked"] = false;
    this.choices["highlighted"] = false;
    elem.classList.remove("liked", "highlighted");
  }else{
    this.choices["disliked"] = false;
    elem.classList.remove("disliked");
  }
};

// DisplayedCard.prototype.likeSwitch = function() {
//   this.liked = !this.liked;
//   var elem = document.getElementById(this.id);
//   elem.classList.toggle("liked");
//
//   if (this.liked === true){
//     this.disliked = false;
//     elem.classList.remove("disliked");
//   }
//
//   this.changeBorderColor();
// };
//
// DisplayedCard.prototype.highlightSwitch = function() {
//   this.highlighted = !this.highlighted;
//   var elem = document.getElementById(this.id);
//   elem.classList.toggle("highlighted");
//
//   if (this.highlighted === true){
//     this.disliked = false;
//     elem.classList.remove("disliked");
//   }
//
//   this.changeInnerColor();
// };
//
// DisplayedCard.prototype.dislikeSwitch = function() {
//   this.disliked = !this.disliked;
//   var elem = document.getElementById(this.id);
//   elem.classList.toggle("disliked");
//
//   if (this.disliked === true){
//     this.liked = false;
//     this.highlighted = false;
//     elem.classList.remove("liked", "highlighted");
//   }
//
//   this.changeBorderColor();
//   this.changeInnerColor();
// };

DisplayedCard.prototype.changeBorderColor = function(){
  if (this.disliked === true){
    this.borderColor = "red";
    this.liked = false;
  }
  else if (this.liked === true){
    this.borderColor = "green";
  }
  else{
    this.borderColor = "black";
  }
};

DisplayedCard.prototype.changeInnerColor = function() {
  if (this.disliked === true){
    this.innerColor = "red";
  }
  else if (this.highlighted === true){
    this.innerColor = "gold";
  }
  else{
    this.innerColor = "white";
  }
};

var makeClickable = function(card){
  document.getElementById("liked").addEventListener("click", function(){
    card.colorSwitch("liked");
  });
  document.getElementById("highlighted").addEventListener("click", function(){
    card.colorSwitch("highlighted");
  });
  document.getElementById("disliked").addEventListener("click", function(){
    card.colorSwitch("disliked");
  });
}

var todaysDate = function(){
  const D = new Date();
  const MONTH = D.getMonth() + 1;
  const DATE = D.getDate() + "/" + MONTH + "/" + D.getFullYear();

  return DATE;
};

var FlashCard = function(info, category, source){
  this.info = info;
  this.category = category;
  this.source = source;
};

FlashCard.prototype.makeDisplayedCard = function() {
  const DCARD = new DisplayedCard(this);

  return DCARD;
};

var Book = function(name){
  this.name = name;
  this.selected = true;
  this.undisplayed = [];
  this.displayed = {};
};
