angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, PlaylistsService) {
  
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

  $scope.playlists = PlaylistsService.playlists;

  $scope.newTask = function() {
    $scope.playlists.push({ title: 'New venue', id: 7 });
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

.controller('PlaylistCtrl', function($scope, playlist) {
  $scope.playlist = playlist;

  $scope.editState = {show: false};

  // Edit a venue
  $scope.edit = function() {
    $scope.editState.show = !$scope.editState.show;
  };    
})
;

