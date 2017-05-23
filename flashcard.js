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
  this.borderColor = "black";
  this.innerColor = "white";
  };
})();

DisplayedCard.prototype.firstDisplay = function(book) {
  this.displayed = true;
  this.date = todaysDate();
  book.addtoDisplayed(this);
  hist.addtoDisplayed(this);
  this.selected();
  this.makeCicle();
};

DisplayedCard.prototype.selected = function() {
  document.getElementById("info").innerHTML = this.flashCard.info;
  document.getElementById("category").innerHTML = this.flashCard.category;
  document.getElementById("dateDisplay").innerHTML = this.date;
};

DisplayedCard.prototype.makeCicle = function() {
  var that = this;
  var elem = document.getElementById("histObjs");
  var anchor = document.createElement("a");
  anchor.href = "javascript: void(0)"
  anchor.className = "cardCircles";
  anchor.onclick = function(){
    that.selected();
  };
  elem.appendChild(anchor);
};

DisplayedCard.prototype.likeSwitch = function() {
  this.liked = !this.liked;
  if (this.liked === true){
    this.disliked = false;
  }
  this.changeBorderColor();
};

DisplayedCard.prototype.highlightSwitch = function() {
  this.highlighted = !this.highlighted;
  if (this.highlighted === true){
    this.disliked = false;
  }
  this.changeInnerColor();
};

DisplayedCard.prototype.dislikeSwitch = function() {
  this.disliked = !this.disliked;
  if (this.disliked === true){
    this.liked = false;
    this.highlighted = false;
  }
  this.changeBorderColor();
  this.changeInnerColor();
};

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
  const dCard = new DisplayedCard(this);

  return dCard;
};

var Book = function(name){
  this.name = name;
  this.selected = true;
  this.undisplayed = [];
  this.displayed = {};
};

Book.prototype.addtoDisplayed = function(dCard) {
  this.displayed[dCard.id] = dCard;
};

Book.prototype.displayHist = function() {
  var elem = document.getElementById("objects");
  var obj;
  for(var key in this.displayed){
    obj = this.displayed[key];
    obj.makeCicle();
  }
};
