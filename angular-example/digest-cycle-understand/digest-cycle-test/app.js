angular.module('myApp', [])
    .controller("em", ['$scope',"$rootScope", function($scope, $rootScope) {
        $scope.a = 10;
        $scope.b = 20;
        $scope.c = 30;
        $scope.$watch('a',function(){
            console.log("a is modified");
            $scope.b=$scope.a+5;
        });
        $scope.$watch('b',function(){
            console.log("b is modified");
        });
        $scope.$watch('c',function(){
            console.log("c is modified");
            $scope.a=$scope.a+10;
        });
        $rootScope.$watch(function(){
            console.log("digest cycle triggred");
        });
    }]);
