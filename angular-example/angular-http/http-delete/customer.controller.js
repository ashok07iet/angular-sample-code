/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('customerController', ['$scope', 'customerService', function ($scope, customerService) {
            init();
            function init() {
                var result = customerService.getCustomers();
                result.success(function (response) {
                    $scope.customers = response;
                });
                result.error(function (err) {
                    console.log(err);
                });
            }
            ;
            $scope.delete=function(customerId){
               var result = customerService.deleteCustomers(customerId); 
               result.success(function () {
               init();
            });
            result.error(function (err) {
                console.log(err);
            });
            };
        }]);
})();
