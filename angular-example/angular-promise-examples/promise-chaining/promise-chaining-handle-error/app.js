/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller('GreetingController', ['$scope', 'ArticleService', function ($scope, ArticleService) {
            $scope.getArticles = function () {
                var helloPromise = ArticleService.getArticles('angular');
                $scope.articles=[];
                helloPromise.then(function (data) {
                    console.log(data);
                    $scope.articles.push(data);
                    return ArticleService.getArticles('javascript');
                }).then(function(data){
                     console.log(data);
                    $scope.articles.push(data);
                    return $scope.articles.length;
                }).then(function(data){
                    $scope.articalesCount=data;
                    return ArticleService.getArticles('javascript1');
                }).then(function(data){
                    $scope.promiseEndData=data+' promise end';
                }).catch(function(e){
                     console.log(e+'ashok');
                     $scope.error=e;
                });
            };
        }]);
    myApp.service('ArticleService',['$q',function($q){
            this.getArticles=function(articalName){
                 var articles = {
                     'angular': 'http://www.tothenew.com/blog/angularjs-deferred-promises-basic-understanding/',
                     'javascript':'https://davidwalsh.name/promises'
                 };
                 var defer = $q.defer();
                 if(articles[articalName]){
                 defer.resolve(articalName+':http://www.tothenew.com/blog/angularjs-deferred-promises-basic-understanding/');
                 
             }else{
                defer.reject('no artical found for '+articalName); 
             }
             return defer.promise;
            };
    }]);
})();

