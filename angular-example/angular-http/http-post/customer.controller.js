/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('customerController', ['$scope', 'customerService', function ($scope, customerService) {
            $scope.save=function(){
                var result = customerService.createCustomer($scope.customer);
                result.success(function (response) {
                $scope.customers = response;
                $scope.message="save successfully";
            });
            result.error(function (err) {
                console.log(err);
                 $scope.message="error in save";
            });
            };   
        }]);
})();
