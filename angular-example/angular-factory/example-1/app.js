(function() {
    var myApp = angular.module('myApp', []);
    myApp.factory('MathService', function() {
        return {
            add: function(a, b) {
                return a + b;
            },

            subtract: function(a, b) {
                return a - b;
            },

            multiply: function(a, b) {
                return a * b;
            },

            divide: function(a, b) {
                return a / b;
            }
        };
    });
   
    myApp.factory('CalculatorService', function(MathService) {
        return {
            square: function(a) {
                return MathService.multiply(a, a);
            },
            cube: function(a) {
                return MathService.multiply(a, MathService.multiply(a, a));
            }
        };
    });
    myApp.controller('CalculatorController', function($scope, CalculatorService) {

        $scope.doSquare = function() {
            $scope.answer = CalculatorService.square($scope.number);
        };

        $scope.doCube = function() {
            $scope.answer = CalculatorService.cube($scope.number);
        };
    });
})();
