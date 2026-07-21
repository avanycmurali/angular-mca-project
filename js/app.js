var app = angular.module('campus360',[]);

app.controller("dashboardcontroller",function($scope){

    $scope.collegename="FISAT";
    $scope.totalStudents=1800;
    $scope.totalFaculty=89;

console.log("dashboard controller is loaded");

$scope.students=[

"Vishnu","Vishnav","Avany","Aradhya"

];

$scope.addstudent=function(){

$scope.totalStudents++;

};

});

