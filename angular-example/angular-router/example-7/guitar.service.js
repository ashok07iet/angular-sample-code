/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('GuitarApp')
        .service('GuitarService', ['$http', function ($http) {
                var self = this;
                self.getGuitarList = function () {
                    return $http({
                        method:"Get",
                        url:"data/guitar.json"
                    });
                };
                self.getGuitarDetail = function () {
                    return $http({
                        method:"Get",
                        url:"data/guitar.json"
                    });
                };
            }]);
