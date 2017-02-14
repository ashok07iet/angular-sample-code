(function(){
   var employee={};
     var e=employee;
    e.name="ram";
    e.salary=10000;
    e.bonous=2000;
    e[101]="phone no";
    e.total=function(){
      this.bonous+this.salary  
        
        
    } 
    document.write("name:>>>"+employee.name);
     document.write("<br/><br/>");
    document.write("name:>>>"+employee["name"]);
    document.write("<br/><br/>");
     document.write("name:>>>"+employee[101]);
})();