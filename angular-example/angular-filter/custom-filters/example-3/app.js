/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var app = angular.module('filters', []);

    app.controller('demo', function ($scope) {
        $scope.example1 = [
            {name: 'C#', type: 'static'},
            {name: 'PHP', type: 'dynamic'},
            {name: 'Go', type: 'static'},
            {name: 'JavaScript', type: 'dynamic'},
            {name: 'Rust', type: 'static'}
        ];
    });

    app.filter('staticLanguage', function () {
        return function (input) {
            var out = [];
            angular.forEach(input, function (language) {
                if (language.type === 'static') {
                    out.push(language);
                }
            });
            return out;
        };
    });
})();

