/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    angular.module('myApp', [])
            .controller('ExampleController', ['$scope', function ($scope) {
                    $scope.items = ['settings', 'home', 'options', 'other'];
                    $scope.selection = $scope.items[0];
                }]);
})();

