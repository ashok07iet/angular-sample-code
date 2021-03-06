/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('Controller', ['$scope', function ($scope) {
            $scope.format = 'M/d/yy h:mm:ss a';
        }])
            .directive('myCurrentTime', ['$interval', 'dateFilter', function ($interval, dateFilter) {

                    function link(scope, element, attrs) {
                        var format,
                                timeoutId;

                        function updateTime() {
                            element.text(dateFilter(new Date(), format));
                        }

                        scope.$watch('format', function (value) {
                            format = value;
                            updateTime();
                        });

                        element.on('$destroy', function () {
                            $interval.cancel(timeoutId);
                        });

                        // start the UI update process; save the timeoutId for canceling
                        timeoutId = $interval(function () {
                            updateTime(); // update DOM
                        }, 3000);
                    }

                    return {
                        link: link
                    };
                }]);

})();
