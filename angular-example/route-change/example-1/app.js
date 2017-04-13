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
                    template: "<div>Main module</div>"
                })
                .when("/red", {
                    template: "<div style='background-color:red'>red.html</div>"
                })
                .when("/green", {
                    template: "<div style='background-color:green'>green.html</div>"
                })
                .when("/blue", {
                    template: "<div style='background-color:blue'>blue.html</div>"
                }).when("/login", {
            template: '<form ng-submit="login()">' +
                    '<label>Username</label>'
                    + '<input type="text" ng-model="username">'
                    +'<div>'
                    +'<label>Password</label>'
                    + '<input type="text" ng-model="password">'
                    +'</div>'
                    +'<br/>'
                    + '<button>Login</button>'
                    + '</form>',
            controller: 'LoginCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    });
    app.run(function ($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (!$rootScope.loggedInUser) {
                // no logged user, redirect to /login
                if (next.$$route.redirectTo === "/login") {
                } else {
                    $location.path("/login");
                }
            }
        });
    });
    app.controller("LoginCtrl", function ($scope, $location, $rootScope) {
        $scope.login = function () {
            $rootScope.loggedInUser = $scope.username;
            $location.path("/");
        };
    });
})();
