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
                    template: "<div style='background-color:red'>green.html</div>"
                })
                .when("/green", {
                    template: "<div style='background-color:green'>green.html</div>"
                })
                .when("/blue", {
                    template: "<div style='background-color:blue'>red.html</div>"
                }).otherwise({
			redirectTo: '/'
		});
    });
})();
