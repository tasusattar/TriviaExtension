var DisplayedCard = function(flashCard){
  this.flashCard = flashCard;
  this.displayed = false;
  this.date = "";
  this.liked = false;
  this.highlighted = false;
};

DisplayedCard.prototype.display = function() {
  this.displayed = true;
  this.date = this.getDate();
  selected();
};

DisplayCard.prototype.selected = function() {
  document.getElementById("info").innerHTML = this.flashCard.info;
};

DisplayedCard.prototype.getDate = function(){
  const D = new Date();
  const MONTH = D.getMonth() + 1;
  const DATE = D.getDate() + "/" + MONTH + "/" + D.getFullYear();

  return DATE;
};

DisplayedCard.prototype.likeSwitch = function() {
  this.liked = !this.liked;
};

DisplayedCard.prototype.highlightSwitch = function() {
  this.highlighted = !this.highlighted;
};

var FlashCard = function(info, category, source){
  this.info = info;
  this.category = catefgory;
  this.source = source;
};

var Book = function(name){
  this.name = name;
  this.selected = true;
  this.undisplayed = [];
  this.displayed = [];
};
