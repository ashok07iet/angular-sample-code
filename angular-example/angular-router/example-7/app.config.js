/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('GuitarApp')
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.
                        when('/list', {
                            templateUrl: 'view/list.html',
                            controller: 'ListController'
                        }).
                        when('/details/:guitarID', {
                            templateUrl: 'view/details.html',
                            controller: 'DetailsController'
                        }).
                        otherwise({
                            redirectTo: '/list'
                        });
            }]);
