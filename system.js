var info1 = "Fix Hydro";
var cat1 = "Todo";
var src1 = "Me";

var info2 = "Blah blah";
var cat2 = "blah";
var src2 = "blah blah land";

var flashCard1 = new FlashCard(info1, cat1, src1);
var flashCard2 = new FlashCard(info2, cat2, src2);

var book1 = new Book(cat1);
var book2 = new Book(cat2);

hist = new Book("History")

var displayCard1 = flashCard1.makeDisplayedCard();
var displayCard2 = flashCard2.makeDisplayedCard();

displayCard2.firstDisplay(book2);
displayCard1.firstDisplay(book1);
