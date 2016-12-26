/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('customerController', ['$scope', 'customerService', function ($scope, customerService) {
            var result = customerService.getCustomers();
            result.then(function (response) {
                $scope.customers = response;
            });
      
        }]);
})();
