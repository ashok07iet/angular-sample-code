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
                    console.log("sucess");
                    $scope.customers = response;
                });
                result.error(function (err) {
                    console.log(err);
                }); 
                console.log('function end');
            };
        }]);
})();
