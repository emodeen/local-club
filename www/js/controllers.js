angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout, TodosService) {
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the Edit Venue modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the Edit Venue modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.playlists = TodosService.todos

  //$scope.playlists = [
  //  { title: 'Yard House', id: 1 },
  //  { title: 'Kings', id: 2 },
  //  { title: 'Dave & Busters', id: 3 },
  //];

  $scope.newTask = function() {
    $scope.playlists.push({ title: 'New venue', id: 7 });
  };

  // Edit a venue
  $scope.edit = function(playlist) {
     $scope.modal.show();
  };

  // Edit a venue
  $scope.remove = function(playlist) {
      var index = $scope.playlists.indexOf(playlist);
      $scope.playlists.splice(index, 1);
  };    
    
  // Called when the Submit button is clicked
  $scope.doLogin = function() {
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {

})
;

