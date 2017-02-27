/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var app = angular.module("myApp", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
                .when('/home', {
                    templateUrl: 'view/home.html',
                    controller: 'StudentController'
                })
                .when('/viewStudents', {
                    templateUrl: 'view/viewStudents.html',
                    controller: 'StudentController1'
                })
                .otherwise({
                    redirectTo: '/home'
                });
    });
     app.controller('StudentController', function ($scope) {
         console.log("inside controller")
            $scope.students = [
                {name: 'Mark Waugh', city: 'New York'},
                {name: 'Steve Jonathan', city: 'London'},
                {name: 'John Marcus', city: 'Paris'}
            ];

            $scope.message = "Click on the hyper link to view the students list.";
        });
        app.controller('StudentController1', function ($scope) {
         console.log("inside controller")
            $scope.students = [
                {name: 'Mark Waugh', city: 'New York'},
                {name: 'Steve Jonathan', city: 'London'},
                {name: 'John Marcus', city: 'Paris'}
            ];

        });
})();
