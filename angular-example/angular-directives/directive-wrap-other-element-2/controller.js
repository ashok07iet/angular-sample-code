/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('Controller', ['$scope', function ($scope) {
            $scope.name = 'Tobias';
        }])
            .directive('myDialog', function () {
                return {
                    restrict: 'E',
                    transclude: true,
                    scope: {},
                    templateUrl: 'my-dialog.html',
                    link: function (scope) {
                        scope.name = 'Jeff';
                    }
                };
            });
})();
