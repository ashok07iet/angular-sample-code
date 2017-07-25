/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('customerController', ['$scope', 'customerService', function ($scope, customerService) {
            $scope.find=function(){
                var result = customerService.getCustomer($scope.cusId);
                result.success(function (response) {
                    $scope.customer = response[0];
                });
                result.error(function (err) {
                    console.log(err);
                }); 
            };
            $scope.update=function(){
                var result = customerService.updateCustomer($scope.customer);
                result.then(function (response) {
                $scope.customer = {};
                $scope.message="save successfully";
            },function (err) {
                console.log(err);
                 $scope.message="error in save";
            });
            };   
        }]);
})();
