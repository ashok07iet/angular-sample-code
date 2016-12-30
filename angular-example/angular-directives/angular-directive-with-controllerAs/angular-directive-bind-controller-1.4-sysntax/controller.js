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
     myApp.controller('someDirectiveController', [function () {
           
        }]);
    myApp.directive('someDirective', function () {
        return {
            scope: {},
            bindToController:{
                name: '=' 
            },
            controller:'someDirectiveController',
            controllerAs: 'ctrl',
            template: '<div>{{ctrl.name}}</div>'
        };
    });
})();
