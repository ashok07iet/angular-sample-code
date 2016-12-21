/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
 var myApp=angular.module('myApp');
myApp.service('customerService',['$http',function($http){
        this.createCustomer = function (customer) {
            return $http({
                method: 'Post',
                url: 'http://localhost:8080/customer-service/customers/',
                data:customer
            });
        };
}]);
   
})();

