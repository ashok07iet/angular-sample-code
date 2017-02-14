function Employee(name){
   var vm=this;
    vm.name=name;
    vm.age=10;
    vm.display=function(){
        console.log("display called"+JSON.stringify(this));
        console.log(vm.name+"::"+vm.age);
    }
}


var emp=new Employee("ram");
var emp1={
    
};
emp1.dis=emp.display;

emp1.dis();