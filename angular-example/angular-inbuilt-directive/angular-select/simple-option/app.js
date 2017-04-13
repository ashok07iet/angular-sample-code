/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    angular.module('myApp', [])
            .controller('ExampleController', ['$scope', function ($scope) {
                    $scope.data = {
                        singleSelect: null,
                        multipleSelect: [],
                        option1: 'option-1'
                    };

                    $scope.forceUnknownOption = function () {
                        $scope.data.singleSelect = 'nonsense';
                    };
                }]);
})();
