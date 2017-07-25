/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module('myApp',[]);
app.controller('ctrl',function($scope,$timeout){
    $scope.user={name:"ashok"};
    $scope.callMe=function(){
        $timeout(function(){
           console.log("JSON.stringify(user)");
           //console.log($event.target.id);
        },100);
    };
});
app.directive('ngClickDirective', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngClickDirective);
        element.on( "mousedown",function(event) {
            console.log("on mouse down call");
            if(event.which===1){
            scope.$apply(function() {
                fn(scope, {$event:event});
            });
        }
        });
        element.on('keyup',function(event){
            var keycode=event.keyCode||event.which;
            console.log("on key press  call::"+keycode);
            console.log("e.keyCode::"+event.keyCode);
            console.log("e.which::"+event.which);
            if(keycode===13 ||keycode===32){
            scope.$apply(function() {
                fn(scope, {$event:event});
            });
        } 
        });
    };
});
