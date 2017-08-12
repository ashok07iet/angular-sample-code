/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller('WellcomeController', ['$scope', 'WellcomeService', function ($scope, WellcomeService) {
            $scope.message = WellcomeService.sayHello();
        }]);
    myApp.provider('WellcomeService', [function () {
            var appName="customer-App";
            this.setName = function (newName) {
                appName = newName;
            };
            this.$get = function () {
                
                return {
                    sayHello: function () {
                        return "Welcome " + appName;
                    }
                };
            };
        }]);
    
   myApp.config(['WellcomeServiceProvider',function (WellcomeServiceProvider) {
        WellcomeServiceProvider.setName("admin-app");
   }]);
})();

