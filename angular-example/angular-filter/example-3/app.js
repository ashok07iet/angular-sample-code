/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller('FriendController', ['$scope', function ($scope) {
            $scope.friends = [
                {name: "Deanna", city: "Malibu"},
                {name: "Beverly", city: "Ventura"},
                {name: "Jean-Luc", city: "Beverly Hills"}
            ];
        }]);
})();

