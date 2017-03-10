/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('myApp')
        .controller('langCtrl',['$translate','$scope',function($translate,$scope){
               $scope.$watch('lang',function(newValue,oldValue){
                   if (newValue !== oldValue){
                      $translate.use(newValue); 
                   }
               });
        }]);