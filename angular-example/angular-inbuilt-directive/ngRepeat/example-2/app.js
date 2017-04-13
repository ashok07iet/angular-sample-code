/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    angular.module("myApp", [])
            .controller('simpleCtrl', [function () {
                    var self = this;
                    self.values = [42, 42, 43, 43];
                }]);
})();
