(function () {
    var app = angular.module('app', []);

    app.controller("firstCtrl", function ($scope,$rootScope) {
        $rootScope.$on('eventName', function (event, args) {
            $scope.message = args.message;
            console.log($scope.message);
        });
    });

    app.controller("secondCtrl", function ($scope) {
        $scope.handleClick = function (msg) {
            $scope.$emit('eventName', {message: msg});
        };
    });
})();
