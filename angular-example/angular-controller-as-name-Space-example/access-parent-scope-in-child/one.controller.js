/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
   function ControllerOne($scope) {
        $scope.foo = 'Pascal';
    } 
    angular.module('moduleOne')
            .controller('ControllerOne', ControllerOne);
})();

