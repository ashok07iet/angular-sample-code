/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var app = angular.module('filters', []);

    app.controller('demo', function ($scope) {
        $scope.example1 = 1;
        $scope.example2 = 2;
        $scope.example3 = 3;
        $scope.example4 = 4;
        $scope.example5 = 777;
        $scope.example6 = 1901;
        $scope.example7 = 0;
        $scope.example8 = 'Seven';
    });
    app.filter('ordinal', function () {
        return function (number) {
            if (isNaN(number) || number < 1) {
                return number;
            } else {
                var lastDigit = number % 10;
                if (lastDigit === 1) {
                    return number + 'st';
                } else if (lastDigit === 2) {
                    return number + 'nd';
                } else if (lastDigit === 3) {
                    return number + 'rd';
                } else if (lastDigit > 3) {
                    return number + 'th';
                }
            }
        };
    });
})();

