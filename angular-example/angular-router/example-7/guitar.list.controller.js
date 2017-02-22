/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('GuitarApp')
        .controller("ListController", ['$scope', 'GuitarService',
            function ($scope, GuitarService)
            {
                GuitarService.getGuitarList()
                        .then(function (data) {
                            $scope.guitars = data;
                            $scope.orderGuitar = 'price';
                        });
            }]
                );

