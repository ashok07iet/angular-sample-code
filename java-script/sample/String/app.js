(function() {

    var  txt =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var  sln = txt.length;
    document.write("String:>" + txt  );
    document.write("<br/>")
    document.write("length:>" + sln);
    document.write("<br/><br/>");
    
    var str = "Please locate where 'locate' occurs!";
    var pos = str.lastIndexOf("locate");
    document.write("String2:>" + str  );
    document.write("<br/>")
    document.write("index:>" + pos);
    document.write("<br/><br/>");
    
    
    var str3 = "Apple, Banana, Kiwi";
    var res = str3.slice(7,-3);
     document.write("String3:>" + str3  );
    document.write("<br/>")
    document.write("substr:>" + res);
    document.write("<br/><br/>");
    
    var str4 = "Apple, Banana, Kiwi";
    var res4 = str4.substr(7,3);
     document.write("String4:>" + str4  );
    document.write("<br/>")
    document.write("substr:>" + res4);
    document.write("<br/><br/>");
    

})();