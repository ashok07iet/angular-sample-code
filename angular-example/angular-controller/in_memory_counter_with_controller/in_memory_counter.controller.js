angular.module("CounterApp", [])
    .controller("CounterController", ['$scope',CounterController]);
function CounterController($scope){
    $scope.counter = 0;
        $scope.decrement = function() {
            $scope.counter--;
        };
     $scope.increment = function() {
            $scope.counter++;
        };
}
