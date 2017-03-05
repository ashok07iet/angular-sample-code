/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);

function createDirective(name){  
  return function(){
    return {
      restrict: 'E',
      compile: function(tElem, tAttrs){
        console.log(name + ': compile');
        return {
          pre: function(scope, iElem, iAttrs){
            console.log(name + ': pre link');
          },
          post: function(scope, iElem, iAttrs){
            console.log(name + ': post link');
          }
        };
      },
      controller:function($scope,$element, $attrs){
        console.log(name+':controller');  
      }
    };
  };
}

app.directive('levelOne', createDirective('levelOne'));  
app.directive('levelTwo', createDirective('levelTwo'));  
app.directive('levelThree', createDirective('levelThree'));  
