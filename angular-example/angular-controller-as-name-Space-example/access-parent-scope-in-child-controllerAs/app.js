/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var app = angular.module('myApp', []);
    function ControllerOne() {
        this.foo = 'Pascal';
    }
    function ControllerTwo() {
        this.foo = 'Christoph';
    }
    app.controller('ControllerOne', ControllerOne);
    app.controller('ControllerTwo', ControllerTwo);
})();

