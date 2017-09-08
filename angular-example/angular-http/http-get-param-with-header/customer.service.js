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
                'http://localhost:3000/api/dataservice/Customer/'+id,
                {headers:{'remote-user':'admin'}}
            );
        };
}]);
   
})();

