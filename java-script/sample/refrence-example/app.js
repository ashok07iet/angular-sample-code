(function() {
    var a = 20;
    var b = a;
    b = 30;

    document.write("a::" + a);
    document.write("<br/><br/>");
    document.write("b::" + b);
     document.write("<br/><br/>");
    
    var students=["ram","mohan"];
     document.write("students::" + students[0]);
    document.write("<br/><br/>");
   
    var students2=students;
    students2[0]="ram1";
     document.write("students::" + students[0]);
    document.write("<br/><br/>");
    document.write("students2::" + students2[0]);
    
})();