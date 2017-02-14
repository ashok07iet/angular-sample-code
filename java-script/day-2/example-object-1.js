(function() {
    
    function Employee(name,basicSalary,bonous,age){
         this.name=name;
        this.basicSalary=basicSalary;
        this.bonous=bonous;
        this.age=age;
         this.favoriteProgrammingLanguage= "javaScript",
        this.totalSalary=function(){
            return this.basicSalary+this.bonous;
        }
    }
    /*var employee = {
        name: "RAM",
        basicSalary:10000,
        bonous:2000,
        age: 12,
        favoriteProgrammingLanguage: "javaScript",
        totalSalary:function(){
            return this.basicSalary+this.bonous;
        },
        
        23:"asfdgy"
        
    };*/
    var employee=new Employee('ram',12000,2000,34);
    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.favoriteProgrammingLanguage);
   
    console.log('total salary'+(employee.totalSalary()));
    
    var employee2=new Employee('mohan',23000,2000,34);
    
    console.log(employee2.name);
    console.log(employee2.age);
    console.log(employee2.favoriteProgrammingLanguage);
   
    console.log('total salary'+(employee2.totalSalary()));
   
})();
