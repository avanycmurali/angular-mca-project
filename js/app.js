var app = angular.module('campus360',[]);

app.controller("dashboardcontroller",function($scope){

    $scope.collegename="FiSaT";
    $scope.totalStudents=1800;
    $scope.totalFaculty=89;

console.log("dashboard controller is loaded");

$scope.students=[

"Vishnu","Vishnav","Avany","Aradhya"

];



$scope.fees=25600;
$scope.today=new Date();

$scope.departments=[
    "cse","MCA","MBA","EEE","BCA","IMCA"
];

$scope.selectedDepartment = "cse";

$scope.addstudent=function(){


$scope.totalStudents++;

};

});

