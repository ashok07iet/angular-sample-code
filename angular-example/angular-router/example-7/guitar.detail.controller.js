/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('GuitarApp')
        .controller("DetailsController", ['$scope', 'GuitarService', '$routeParams',
            function ($scope, GuitarService, $routeParams)
            {
                GuitarService.getGuitarDetail($routeParams.guitarID)
                        .then(function (data) {
                            $scope.guitarDetail = data;
                        });
            }]
                );

