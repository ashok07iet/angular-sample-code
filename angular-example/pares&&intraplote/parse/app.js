/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  var mainMod = angular.module('MainApp', []);
mainMod.controller('MainCtrl', ['$scope','$parse','$interpolate',
    function ($scope,$parse,$interpolate) {
         $scope.name = 'Manish';
        
         //$parse
         $scope.parse = $parse('name')($scope);
         $parse('name').assign($scope,'Prakash');
         $scope.parse_assign = $parse('name')($scope);
          
         $scope.button_text = 'click me';
         
         obj={
           button_text:"click"  
         };
         //$interpolate
      	 var html = '<div ng-click="clickme();">{{button_text}}</div>';
         var htmlInterplote=$interpolate(html);
         $scope.interpolate =htmlInterplote($scope);
         $scope.interpolate1 =htmlInterplote(obj);
         
    }
]);
})();

