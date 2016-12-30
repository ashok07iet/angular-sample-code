/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var app = angular.module('filters', []);

    app.controller('demo', function ($scope) {
        $scope.example1 = "awesome";
        $scope.example2 = "Honorificabilitudinitatibus";
    });
    app.filter('capitalize', function () {
        return function (input, char) {
            if (isNaN(input)) {
                var char = char - 1 || 0;
                var letter = input.charAt(char).toUpperCase();
                var out = [];
                for (var i = 0; i < input.length; i++) {
                    if (i === char) {
                        out.push(letter);
                    } else {
                        out.push(input[i]);
                    }
                }
                return out.join('');
            } else {
                return input;
            }
        };
    });
})();

