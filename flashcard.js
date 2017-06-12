var DisplayedCard = (function(){
  var nextId = 0;
  var nameId = "DC";

  return function DisplayedCard(flashCard){
  this.flashCard = flashCard;
  this.id = nameId + nextId.toString();
  nextId++;
  this.displayed = false;
  this.date = "";
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
  anchor.className += " plain";
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
  that.makeInteractive();
};

DisplayedCard.prototype.makeInteractive = function(){
  var that = this;
  document.getElementById("liked").addEventListener("click", function(){
    that.colorSwitch("liked");
  });
  document.getElementById("highlighted").addEventListener("click", function(){
    that.colorSwitch("highlighted");
  });
  document.getElementById("disliked").addEventListener("click", function(){
    that.colorSwitch("disliked");
  });
}

DisplayedCard.prototype.colorSwitch = function(action){
  this.choices[action] = !this.choices[action];
  this.changeOpacity(action);
  var elem = document.getElementById(this.id);
  elem.classList.toggle(action);
  elem.classList.remove("plain");

  if (action == "disliked"){
    this.choices["liked"] = false;
    this.choices["highlighted"] = false;
    elem.classList.remove("liked", "highlighted");
  }else{
    this.choices["disliked"] = false;
    elem.classList.remove("disliked");
  }

  if ((!elem.classList.contains("liked")) &&
  (!elem.classList.contains("highlighted")) &&
  (!elem.classList.contains("disliked"))){
    elem.classList.add("plain");
  }
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

DisplayedCard.prototype.changeOpacity = function(id){
  var elem = document.getElementById(id);
  if (this.choices[id]){
  elem.style.opacity = 1;
  }
  else {
    elem.style.opacity = 0.4;
  }
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
