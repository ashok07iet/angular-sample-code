angular.module('CounterApp', [])
    .controller('CounterController', ['$scope','$timeout',function(a, b) {
        a.counter = 0;
        var updateCounter = function() {
            a.counter++;
            b(updateCounter, 1000);
        };
        updateCounter();
    }]);
