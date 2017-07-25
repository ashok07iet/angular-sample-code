(function(){
    var myApp = angular.module('myApp', []);
    myApp.controller('DoubleController',['$scope',function($scope){
        $scope.double=function(){
            return $scope.num*2;
        };
    }]);
})();
