/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var app = angular.module('app',[]);

app.factory('myService', function(){
  function getName() {
      return 'myName';
  }
  return {
      getName : getName
  };
});
app.directive('myDirective', ['myService',function(myService){
  return {
    template: '<h1>{{name}}</h1>',
    link: function (scope, element, attrs) {
        scope.name = myService.getName();
    }
  };
}]);
})();
