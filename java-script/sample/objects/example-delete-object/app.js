(function(){
  var fruit={
    "name":"apple",
    "color":"red"
 
}
  
document.write("name:>>"+fruit.name+"  color:>>"+fruit.color);
    document.write("<br/><br/>");
    var isdelete=delete fruit.name;
    document.write("deleted:>>"+isdelete);
    document.write("<br/><br/>");
document.write("name:>>"+fruit.name+"  color:>>"+fruit.color);
    
    document.write("<br/><br/>");
    
})();

var a=12;

document.write("window.a>>"+window.a);
 document.write("<br/><br/>");
 var isdelete=delete window.a;
 document.write("deleted:>>"+isdelete);
 document.write("<br/><br/>");
document.write("window.a>>"+window.a);