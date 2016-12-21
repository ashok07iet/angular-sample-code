/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
 var myApp=angular.module('myApp');
myApp.service('customerService',['$http',function($http){
        this.updateCustomer = function (customer) {
            return $http({
                method: 'Put',
                url: 'http://localhost:8080/customer-service/customers/',
                data:customer
            });
        };
          this.getCustomer = function (id) {
            return $http({
                method: 'Get',
                url: 'http://localhost:8080/customer-service/customers/'+id
            });
        };
}]);
   
})();

