(function() {
    var myApp = angular.module('myApp', []);
    myApp.controller('simpleController',['$scope',function($scope){
        
        this.customers=[
           {name:"mohan",city:"Bangalore" },
           {name:"ram",city:"Delhi" },
           {name:"redy",city:"Hyderabad" },
           {name:"Dinesh",city:"Tamilndu" }
        ];
        this.name="ashok";
    }]);
})();
