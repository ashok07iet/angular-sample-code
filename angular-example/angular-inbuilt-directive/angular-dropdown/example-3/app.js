/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 angular.module('myApp', []) .controller('ExampleController', ['$scope', function($scope) {
   $scope.data = {
    model: null,
    availableOptions: [
         {value: 'myString', name: 'string'},
         {value: 1, name: 'integer'},
         {value: true, name: 'boolean'},
         {value: null, name: 'null'},
         {value: {prop: 'value'}, name: 'object'},
         {value: ['a'], name: 'array'}
    ]
   };
}]);