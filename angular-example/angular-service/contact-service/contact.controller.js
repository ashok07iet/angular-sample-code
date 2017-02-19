/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
var module = angular.module('myApp');
module.controller('ContactController', function ($scope, ContactService) {

    $scope.contacts = ContactService.list();

    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    };


    $scope.delete = function (id) {

        ContactService.delete(id);
        if ($scope.newcontact.id ===id) $scope.newcontact = {};
    };


    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    };
});
})();
