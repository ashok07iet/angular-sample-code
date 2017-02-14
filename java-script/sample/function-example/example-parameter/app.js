(function(){
    function add(a,b){
    
    document.write("a>>>"+a+"  :::b>>>"+b) ;
        document.write("<br/>") 
        
    }
    
    function add(a,b,c){
    
    document.write(" second :: a>>>"+a+"  :::b>>>"+b) ;
        document.write("<br/>") 
        
    }
    
    add(10,20);
    add(10);
    add();
    add(10,30,40);
    
})();