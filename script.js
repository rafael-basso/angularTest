var app = angular.module('app',[])

app.controller("AppController", function ($scope, $http) {
  $scope.listaSelecionavel = [];
  $scope.todoItems = [];

  $scope.adicionarAoTodo = function(item, index) {
    
    if($scope.listaSelecionavel.length == $scope.todoItems.length){
      alert("Full list")
      return
    }
        
    for(let i in $scope.listaSelecionavel){
        if($scope.listaSelecionavel[index] == $scope.todoItems[i]){
          alert('Name already taken')
          return
        }
    }
    $scope.todoItems.push(item);
  }
  
  $scope.removeItemTodo = function(index) {
     $scope.todoItems.splice(index,1)
    $scope.content=''
    $scope.visible = false
  }

  $scope.loadApi = function () {
   $http.get("https://jsonplaceholder.typicode.com/users").then(function (res) {
       $scope.listaSelecionavel = res.data;
     });
 };
 
  $scope.loadApi()
  
  $scope.maior = function() {
    if($scope.todoItems.length==0){
      alert("Empty list")
      $scope.content=''
      return
    }
    
//console.log($scope.todoItems[0].name)
    
  var maior=0
  var menor=1

  for (let i in $scope.todoItems){
        if($scope.todoItems[i].name.length>maior){
          maior=$scope.todoItems[i].name.length
          var indexMaior = i
        }
        else{
          menor=$scope.todoItems[i].name.length
          var indexMenor=i
        }
    }

//console.log(maior,indexMaior, menor,indexMenor)

//console.log($scope.todoItems[indexMaior].name)
    var soma = $scope.todoItems[indexMaior].name.replace(/ /g,"").length
    //console.log(soma)
    
    $scope.content = $scope.todoItems[indexMaior].name
    
    //$scope.total=maior   
    $scope.total=soma
    
    $scope.visible = true

}
  
  
});