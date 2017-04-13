/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    angular.module('myApp', [])
            .controller('Test', function ($scope) {
                $scope.items1 = ['one', 'two', 'three', 'four'];
                $scope.items2 = [{name: 'one', age: 30}, {name: 'two', age: 27}, {name: 'three', age: 50}];
            });
})();