angular.module('angularTimer.controller', ['timer'])
    .controller('AngularTimerController', ['$scope', function($scope) {

        init();

        function init(){
            setEndDateForTimer(2);
        }
        function setEndDateForTimer(endDayNumber){
            var today = new Date();
            var tomorrow = new Date("05/25/2016 15:22:08");
            //tomorrow.setDate(today.getDate()+1);
            $scope.saleEndDate = tomorrow.getTime();
//console.log("gfgfgv " + $scope.saleEndDate);
//console.log(tomorrow);

        }


    }]);