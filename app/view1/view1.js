'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  $scope.friends = [
    {name: "Ray", favoriteColor: "red", backgroundColor: "blue"},
    {name: "Oscar", favoriteColor: "orange", backgroundColor: "green"},
    {name: "Gwen", favoriteColor: "green", backgroundColor: "yellow"},
    {name: "Bob", favoriteColor: "blue", backgroundColor: "red"},
    {name: "Marie", favoriteColor: "magenta", backgroundColor: "purple"},
  ];

  shuffle($scope.friends);



}]);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

