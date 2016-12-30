/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('controller', [ function () {
            this.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatre'
            };
        }]);
    myApp.directive('someDirective', function () {
        return {
            restrict: 'A',
            controller: 'controller',
            controllerAs: 'ctrl',
            template: '{{ctrl.customer}}'
        };
    });
})();
