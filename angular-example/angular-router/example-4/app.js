/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
                .when("/", {
                    template: "<div>{{message}}</div>"
                })
                .when("/red", {
                    template: "<div style='background-color:red'>{{message}}</div>"
                })
                .when("/green", {
                    template: "<div style='background-color:green'>{{message}}</div>"
                })
                .when("/blue", {
                    template: "<div style='background-color:blue'>{{message}}</div>"
                }).otherwise({
			redirectTo: '/'
		});
    });
    app.controller('MainController',['$scope',function($scope){
        $scope.message="Hello router" ;   
    }]);
})();
