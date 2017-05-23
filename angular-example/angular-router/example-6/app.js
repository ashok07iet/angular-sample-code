/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var app = angular.module("myApp", ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider.when("/",
                {
                    templateUrl: "view/app1.html",
                    controller: "AppCtrl1",
                    controllerAs: "app"
                }
        )
       .when("/hello/:firstName/:middleName/:lastName",
                {
                    templateUrl: "view/app2.html",
                    controller: "AppCtrl2",
                    controllerAs: "app"
                }
        ).otherwise({
                    redirectTo: '/'
                });
    })
            .controller('AppCtrl1', function ($routeParams) {
                var self = this;
                self.message = $routeParams.message;
            })
            .controller('AppCtrl2', function ($routeParams) {
                var self = this;
                self.message = $routeParams.firstName + " " + $routeParams.middleName + " " + $routeParams.lastName;
            });
})();
