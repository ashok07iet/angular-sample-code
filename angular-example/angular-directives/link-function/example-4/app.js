var app = angular.module('myApp', []);
app.directive('myDad', function () {
    return {
        restrict: 'E',
        link: {
            pre: function (scope, elem, attr) {
                scope.name = 'XXX';
                scope.greeting = 'Hello!';
            }
        }
    };
});
app.directive('mySon', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attr) {
            scope.sonSays = 'Hey, I am son, and my dad is ' + scope.name;
        }
    };
});