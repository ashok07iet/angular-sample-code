/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    angular.module("myApp", [])
            .component("helloWorld", {
                template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
                bindings: {name: '@'},
                controller:'hellowctrl'
//                controller: function () {
//                    this.myName = 'Alain';
//                }
            }).controller('hellowctrl',function(){
                this.myName = 'Alain1';
            });;
})();
