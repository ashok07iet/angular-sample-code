(function (){
    
     function Fruit (theColor, theSweetness, theFruitName, price) {
     this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.fruitPrice=price;
         this.getTotalprice = function () {
         return  this.fruitPrice+(this.fruitPrice*this.vat);
        };
     
}
    Fruit.prototype.vat=.05;
    
    var apple=new Fruit("red","sweet","apple",100);
     var mango=new Fruit("yellow","sweet","mango",200);
     document.write("apple price>>>"+apple.getTotalprice());
    document.write("mngo price>>>"+mango.getTotalprice());
    document.write("<br/><br/>");
      Fruit.prototype.vat=.1;
      document.write("apple price>>>"+apple.getTotalprice());
    document.write("mango price>>>"+mango.getTotalprice());
    
    
})();