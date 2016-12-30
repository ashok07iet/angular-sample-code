/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {

    var app = angular.module('directivesModule', []);
    app.controller("controller", ['$scope', function ($scope) {
            var counter = 0;
            $scope.customers = [
                {
                    name: 'David',
                    street: '1234 Anywhere St.'
                },
                {
                    name: 'Tina',
                    street: '1800 Crest St.'
                },
                {
                    name: 'Michelle',
                    street: '890 Main St.'
                }
            ];
            $scope.addCustomer = function () {
                counter++;
                $scope.customers.push({
                    name: 'New Customer' + counter,
                    street: counter + ' Cedar Point St.'
                });
            };
        }]);
    app.directive('isolateScopeWithController', function () {

        var controller = ['$scope', function ($scope) {

                function init() {
                    $scope.items = angular.copy($scope.datasource);
                }

                init();

                $scope.addItem = function () {
                    $scope.add();

                    //Add new customer to directive scope
                    $scope.items.push({
                        name: 'New Directive Controller Item'
                    });
                };
            }];
        
//        function link($scope){
//             function init() {
//                    $scope.items = angular.copy($scope.datasource);
//                }
//
//                init();
//
//                $scope.addItem = function () {
//                    $scope.add();
//
//                    //Add new customer to directive scope
//                    $scope.items.push({
//                        name: 'New Directive Controller Item'
//                    });
//                }; 
//        }
                template = '<button ng-click="addItem()">Add Item</button><ul>' +
                '<li ng-repeat="item in items">{{ ::item.name }}</li></ul>';

        return {
            restrict: 'EA', //Default in 1.3+
            scope: {
                datasource: '=',
                add: '&'
            },
           // link: link,
           controller:controller,
            template: template
        };
    });

}());
