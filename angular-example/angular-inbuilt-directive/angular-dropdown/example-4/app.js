/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp', []).controller('ExampleController', ['$scope', function ($scope) {
        $scope.data = {
            availableOptions: [
                {id: '1', name: 'Option A'},
                {id: '2', name: 'Option B'},
                {id: '3', name: 'Option C'}
            ]
        };
       $scope.data.selectedOption={id: '3', name: 'Option C1'} //This sets the default value of the select in the ui

    }]);
