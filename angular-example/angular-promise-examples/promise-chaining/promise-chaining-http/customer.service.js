/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
 var myApp=angular.module('myApp');
myApp.service('customerService',['$http',function($http){
         this.getCustomer = function (name) {
            return $http.get(
                'http://localhost:8080/customer-service/customers/?name='+name,
                {headers:{'remote-user':'admin'}}
            );
        };
        
        this.getOrders = function (cusId) {
            return $http.get(
                'http://localhost:8080/customer-service/customers/'+cusId+'/orders',
                {headers:{'remote-user':'admin'}}
            );
        };
}]);
   
})();

