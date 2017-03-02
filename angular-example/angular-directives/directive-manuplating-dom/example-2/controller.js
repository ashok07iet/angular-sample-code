/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.directive("restricted", function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                // Some auth check function
                attrs.$observe('user', function (value) {
                    if (value==='admin') {
                        element.css('display', '');
                    }else{
                       element.css('display', 'none'); 
                    }
                });
            }
        };
    });

})();
