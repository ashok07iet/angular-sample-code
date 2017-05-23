(function(){
    var myApp = angular.module('myApp', []);
    myApp.controller('DoubleController',[function(){
        this.double=function(){
            return this.num*2;
        };
    }]);
})();
