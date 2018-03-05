//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {

  $scope.clickedUsers={};
  
  getTask(); // Load all available tasks 



//A call to read all the records in the database

  function getTask(){  
  $http.post("ajax/getTask.php").success(function(data){
        $scope.tasks = data;
       });
  };


$scope.selectedCont=function(task){
    $scope.clickedUsers=task;
  };


//A call to update the task table

$scope.updateTask=function(id,task,description){
  var data={
    id:id,
    task:task,
    description:description,
    
  };

  $http.post("ajax/updateTask.php",data).success(function(data){
    getTask();
    
  });

};


//A call to add new Task
  
  $scope.addTask = function (task,desc) {
    var data={
      task:task,
      desc:desc,
    
    };

    $http.post("ajax/addTask.php",data).success(function(data){

      console.log(data);
        getTask();
        $scope.inputtask = "";
        $scope.inputdesc="";
       
      });
  };

// A call to add new Task
  
  $scope.deleteTask = function (taskid) {
    
    $http.post("ajax/deleteTask.php?task="+taskid).success(function(data){
        getTask();

      });
    
  };



});
