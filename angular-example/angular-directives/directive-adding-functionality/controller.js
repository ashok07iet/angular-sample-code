/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('Controller', ['$scope', '$timeout', function ($scope, $timeout) {
            $scope.name = 'Tobias';
            $scope.message = '';
            $scope.hideDialog = function (message) {
                $scope.message = message;
                $scope.dialogIsHidden = true;
                $timeout(function () {
                    $scope.message = '';
                    $scope.dialogIsHidden = false;
                }, 2000);
            };
        }])
            .directive('myDialog', function () {
                return {
                    restrict: 'E',
                    transclude: true,
                    scope: {
                        'close': '&onClose'
                    },
                    templateUrl: 'my-dialog-close.html'
                };
            });
})();
