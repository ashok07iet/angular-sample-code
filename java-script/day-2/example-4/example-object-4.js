(function() {
    function Fruit (theColor, theSweetness,  theFruitName) {
     this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
     this.showName = function () {
        console.log("This is a " + this.fruitName);
    }
    this.nativeTo = function () {
         console.log("This is a ");
      
    }

 }
    
    var f=new Fruit("red","to sweet","apple");
    var f1=new Fruit("yellow","to sweet","bannana");
    Fruit.prototype.price=10;
    console.log(f.price);
    console.log(f1.price);
  
   
})();