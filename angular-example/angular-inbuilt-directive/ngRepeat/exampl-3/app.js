/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    angular.module('myApp', [])
.controller('TasksCtrl', ['$scope',function($scope) {
    var date = new Date().toISOString();
    $scope.tasks = [];
    for (var i = 1; i < 2000; i++) {
        $scope.tasks.push({
            id: i,
            title: 'Task ' + i, 
            date: date
        });
    }
    
    $scope.refresh = function() {
        console.time("Refreshing");
        $scope.tasks = angular.copy($scope.tasks);
        console.timeEnd("Refreshing");
    };
}]);
})();

