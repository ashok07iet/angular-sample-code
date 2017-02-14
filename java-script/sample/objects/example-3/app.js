(function(){
    
    
    function Fruit (theColor, theSweetness, theFruitName, price) {
     this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.fruitPrice=price;
     this.howSweetIam = function () {
        console.log("This is a " + this.fruitName);
    }
    }
 /*var apple={
     
     "color":"red",
     "sweetness":"sweet",
     "fruitName":"apple",
     "fruitPrice":"12" ,
     this.howSweetIam=function(){
     
     
 }
     
 };
        var mango={
     
     "color":"yellow",
     "sweetness":"sweet",
     "fruitName":"Mango",
     "fruitPrice":"13"  ,
            this.howSweetIam=function(){
     
     
 }*/
     
 var apple=new Fruit("red","sweet","apple","13");
     var mango=new Fruit("yellow","sweet","mango","14");
    
    
})();