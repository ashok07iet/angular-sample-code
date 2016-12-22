/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('formController', ['$scope', function ($scope) {
            $scope.master = {};

            $scope.update = function (user) {
                $scope.master = angular.copy(user);
            };

            $scope.reset = function (form) {
                if (form) {
                    form.$setPristine();
                    form.$setUntouched();
                }
                $scope.user = angular.copy($scope.master);
            };

            $scope.reset();
        }]);
})();
