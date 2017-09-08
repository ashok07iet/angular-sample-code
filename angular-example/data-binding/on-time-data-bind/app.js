/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('oneTimeBindingExampleApp', []).
        controller('EventController', ['$scope', function ($scope) {
                var counter = 0;
                var names = ['Igor', 'Misko', 'Chirayu', 'Lucas'];
                $scope.clickMe = function (clickEvent) {
                    $scope.name = names[counter % names.length];
                    counter++;
                };
            }]);
