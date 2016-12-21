/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
 var myApp=angular.module('myApp');
myApp.service('customerService',['$http',function($http){
         this.getCustomer = function (id) {
            return $http.get(
                'http://localhost:8080/customer-service/customers/'+id,
                {headers:{'remote-user':'admin'}}
            );
        };
}]);
   
})();

