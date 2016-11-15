angular.module("CounterApp", [])
    .controller("CounterController", function($scope) {
        $scope.counter = 0;
        $scope.decrement = function() {
            $scope.counter--;
        };
     $scope.increment = function() {
            $scope.counter++;
        };
});
