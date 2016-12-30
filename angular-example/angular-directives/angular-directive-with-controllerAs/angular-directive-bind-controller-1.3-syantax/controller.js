/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('controller', ['$scope',function ($scope) {
           $scope.cname='Java Home';
        }]);
     myApp.controller('someDirectiveController', ['$scope',function ($scope) {
           this.age=10;
        }]);
    myApp.directive('someDirective', function () {
        return {
            scope: {
                name: '='
            },
            controller:'someDirectiveController',
            controllerAs: 'ctrl',
            bindToController: true,
            template: '<div>{{ctrl.name}}</div><div>{{ctrl.age}}</div>'
        };
    });
})();
