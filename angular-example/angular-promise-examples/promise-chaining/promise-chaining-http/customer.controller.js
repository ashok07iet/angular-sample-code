/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('customerController', ['$scope', 'customerService', function ($scope, customerService) {
              $scope.find=function(){
                  var cus;
                var result = customerService.getCustomer($scope.name);
                result.then(function(response){
                    cus=response.data;
                     return customerService.getOrders(cus.customerId);
                }).then(function(response){
                    cus.orders=response.data;
                    $scope.customer=cus;
                    
                }).catch(function(e){
                    $scope.error=e;
                });    
            };
        }]);
})();
