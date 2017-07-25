/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
    function ControllerTwo($scope) {
        $scope.foo = 'Christoph';
    }
     angular.module('moduleTwo')
            .controller('ControllerTwo', ControllerTwo);
})();