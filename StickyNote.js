var myApp=angular.module('myApp',[]);
var count=1;

myApp.factory('dataArray', function(){
    return [{srNo:"count",message:"message",time:"Time",status:"done"}];
})
function addController($scope,dataArray){
    $scope.message="";
    $scope.data=dataArray;
    var time="";
    $scope.onClick=function (){
        var currentTime=new Date();
        time=currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds();

        $scope.data.push({srNo:count,message:$scope.message,time:time,status:"none"});
        count++;
    }

}
function showController($scope,dataArray){
    $scope.data=dataArray;
    $scope.delete=function (x){
       $scope.data.splice(x.count,1);
    }

}
