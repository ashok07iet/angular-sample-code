/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('customerController', ['$scope', 'customerService', function ($scope, customerService) {
              $scope.find=function(){
                var result = customerService.getCustomer($scope.name);
                result.then(function(response){
                     $scope.customer=response.data;
                     return customerService.getOrders($scope.customer.customerId);
                }).then(function(response){
                    $scope.orders=response.data;
                }).catch(function(e){
                    $scope.error=e;
                });    
            };
        }]);
})();
