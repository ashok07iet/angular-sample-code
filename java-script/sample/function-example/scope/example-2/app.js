function parent(bonous){
   var salary=bonous*10000;
    
    function child1(){
        document.write("child1%:::"+(salary/2) );
        document.write("<br/>");
        var child1Salary=3456;
    }
    function child2(){
        document.write("child2%::::"+(salary/3) );
        var child2Salary=3456455;
    }
    child1();
    child2();
    console.log(child1Salary);
    console.log(child2Salary);
}
parent(34567);
