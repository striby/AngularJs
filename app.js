/**
 * Created by Administrator on 2016/4/17.
 */
function MController($scope,$timeout){
    $scope.clock ={
        now:new Date()
    } ;
    var updateClock = function () {
        $scope.clock.now = new Date ();
    };
    setInterval(function () {
      $scope.$apply(updateClock);
    },1000);
    updateClock();
}